import React from "react";
import { Heading, View, Card } from "@aws-amplify/ui-react";
import { ProductCollection } from "../ui-components";

function CatalogPage() {
	return (
		<View className="CatalogPage">
			<Card>
				<Heading level={1}>Catalog:</Heading>
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						height: "85vh",
					}}
				>
					<ProductCollection />
				</div>
			</Card>
		</View>
	);
}
export default CatalogPage;
