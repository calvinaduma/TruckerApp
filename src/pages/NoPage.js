import React from "react";
import { Heading, View, Card } from "@aws-amplify/ui-react";

function NoPage() {
	return (
		<View className="NoPage">
			<Card>
				<Heading level={1}>Oops!</Heading>
				<div>
					<p>We can't seem to find the page that you're looking for.</p>
				</div>
			</Card>
		</View>
	);
}
export default NoPage;
