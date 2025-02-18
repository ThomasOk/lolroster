import { ContentLayout } from "@/components/layouts/content-layout";
import { UserInfoSetup } from "@/features/auth/components/user-info-setup";

export const UserInfoSetupRoute = () => {
	return (
		<ContentLayout>
			<UserInfoSetup />
		</ContentLayout>
	);
};

export default UserInfoSetupRoute;
