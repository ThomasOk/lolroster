import { useNavigate } from "react-router";
import { Button } from "@/components/ui/button";
import { ContentLayout } from "@/components/layouts/content-layout";

export const NotFoundPage = () => {
	const navigate = useNavigate();

	return (
		<ContentLayout>
			<div className="flex flex-col items-center justify-center min-h-[60vh] gap-8">
				<h1 className="text-4xl font-black transform -rotate-2 bg-white border-4 border-black py-2 px-6 shadow-xl">
					404
				</h1>

				<div className="max-w-md text-center space-y-4">
					<p className="text-lg font-medium">Oops! Wrong page!</p>

					<p className="text-gray-600">
						It’s possible the page has been moved or no longer exists.
					</p>
				</div>

				<div className="space-x-4">
					<Button onClick={() => navigate(-1)} variant="white">
						Go Back
					</Button>

					<Button onClick={() => navigate("/")} variant="default">
						Home
					</Button>
				</div>
			</div>
		</ContentLayout>
	);
};

export default NotFoundPage;
