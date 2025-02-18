import { api } from "@/lib/api-client";
import { User } from "@/features/auth/types/auth-types";

export const getCurrentUser = async (): Promise<User> => {
	return api.get("/users/me");
};

export const logout = async (): Promise<void> => {
	return api.post("/auth/logout");
};
