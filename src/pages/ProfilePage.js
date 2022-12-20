import React from "react";
import { View, Card } from "@aws-amplify/ui-react";
import { ProfileCard } from "../ui-components";

function ProfilePage() {
	return (
		<View className="ProfilePage">
			<Card>
			<div style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					height: '85vh'
						}}>
					<ProfileCard />
				</div>
			</Card>
		</View>
	);
}
export default ProfilePage;
