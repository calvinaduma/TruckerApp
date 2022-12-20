import React from "react";
import { EditProfileTeam24 } from "./../ui-components";
import { withAuthenticator } from "@aws-amplify/ui-react";

function AccountPage({ signOut }) {
	return (
		<div>
			<div style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					height: '85vh'
						}}>
					<EditProfileTeam24 />
				</div>
			<button onClick={signOut}>Sign out</button>
		</div>
	);
}

export default withAuthenticator(AccountPage);
