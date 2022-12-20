import React from "react";
import { View, Card } from "@aws-amplify/ui-react";
import { PurchaseHistoryPageComp } from "../ui-components";

function PurchaseHistoryPage() {
	return (
		<View className="PurchaseHistoryPage">
			<Card>
				<PurchaseHistoryPageComp />
			</Card>
		</View>
	);
}
export default PurchaseHistoryPage;
