import React from "react";
import { Heading, View, Card } from "@aws-amplify/ui-react";
import { SponsorCollection } from "../ui-components";

function DriverApplicationPage() {
	return (
		<View className="DriverApplicationPage">
			<Card>
				<Heading level={1}>
					Browse through the sponsors below and apply!
				</Heading>
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						height: "85vh",
					}}
				>
					<SponsorCollection />
				</div>
			</Card>
		</View>
	);
}
export default DriverApplicationPage;
