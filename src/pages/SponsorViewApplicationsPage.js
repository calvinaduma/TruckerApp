import React from "react";
import { Heading, View, Card } from "@aws-amplify/ui-react";
import { DriverCollection } from "../ui-components";

function SponsorViewApplicationsPage() {
	return (
		<View className="SponsorViewApplicationsPage">
			<Card>
				<Heading level={1}>Your Driver Applications:</Heading>
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						height: "95vh",
					}}
				>
					<DriverCollection />
				</div>
			</Card>
		</View>
	);
}
export default SponsorViewApplicationsPage;
