import { db } from "@/db";
import { eq, and, sql } from "drizzle-orm";
import { authProvidersTable } from "@/db/schema/auth-providers";
import { usersTable } from "@/db/schema/users";
import { User } from "@/db/schema/users";

export class AuthService {
	static async findOrCreateUser(
		providerId: string,
		provider: string,
		userData: any
	): Promise<User> {
		const normalizedUserData = {
			email:
				provider === "google" ? userData.emails?.[0]?.value : userData.email,
			username:
				provider === "google" ? userData.displayName : userData.username,
			displayName: null, // Always set to null to force display name setup
		};

		// existing provider
		const existingProvider = await db
			.select()
			.from(authProvidersTable)
			.where(
				and(
					eq(authProvidersTable.providerId, providerId),
					eq(authProvidersTable.provider, provider)
				)
			)
			.limit(1);

		if (existingProvider.length > 0) {
			const user = await db
				.select()
				.from(usersTable)
				.where(eq(usersTable.id, existingProvider[0].userId))
				.limit(1);
			return user[0];
		}

		// new user
		const [newUser] = await db
			.insert(usersTable)
			.values({
				email: userData.email,
				username: userData.username,
				displayName: null,
			})
			.returning();

		// create new provider
		await db.insert(authProvidersTable).values({
			userId: newUser.id,
			provider,
			providerId,
			providerData: userData,
		});

		return newUser;
	}

	static async invalidateRefreshToken(userId: number): Promise<void> {
		await db
			.update(usersTable)
			.set({
				refreshTokenVersion: sql`${usersTable.refreshTokenVersion} + 1`,
				updatedAt: new Date(),
			})
			.where(eq(usersTable.id, userId));
	}
}
