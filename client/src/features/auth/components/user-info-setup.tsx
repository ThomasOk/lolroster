import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export const UserInfoSetup = () => {
	const [displayName, setDisplayName] = useState("");
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setError("");

		try {
			const response = await fetch(
				`${import.meta.env.VITE_API_URL}/users/me/user-update-info`,
				{
					method: "PATCH",
					headers: {
						"Content-Type": "application/json",
					},
					credentials: "include",
					body: JSON.stringify({ displayName }),
				}
			);

			if (!response.ok) {
				throw new Error("Failed to update display name");
			}

			// Redirect to homepage with param
			navigate("/?auth_status=success", { replace: true });
		} catch (err) {
			setError("Error when trying to update display name");
			toast.error("Failed to update display name");
			console.error(err);
		}
	};

	return (
		<div className=" flex justify-center bg-bg">
			<div className="w-full max-w-md p-8 border-2 border-border bg-bw shadow-shadow">
				<h2 className="text-2xl font-bold mb-6 text-center">Pick a username</h2>

				<form onSubmit={handleSubmit} className="space-y-4">
					<div>
						<label
							htmlFor="displayName"
							className="block text-sm font-medium mb-2"
						>
							Username
						</label>
						<input
							type="text"
							id="displayName"
							value={displayName}
							onChange={(e) => setDisplayName(e.target.value)}
							className="w-full px-3 py-2 border-2 border-border rounded-base focus:outline-none focus:ring-2 focus:ring-main"
							minLength={2}
							maxLength={25}
							required
						/>
					</div>

					{error && <div className="text-red-500 text-sm">{error}</div>}

					<Button
						type="submit"
						className="w-full"
						disabled={displayName.length < 2}
					>
						Confirm
					</Button>
				</form>
			</div>
		</div>
	);
};
