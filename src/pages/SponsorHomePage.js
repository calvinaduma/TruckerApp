import React from "react";
import { View, withAuthenticator, ThemeProvider } from "@aws-amplify/ui-react";
import { SponsorHeroLayout2, studioTheme } from "../ui-components";
//test

function SponsorHomePage({ signOut, user }) {
	return (
		<ThemeProvider theme={studioTheme}>
		<View className="SponsorHomePage">
			<SponsorHeroLayout2 />
			<button onClick={signOut}>Sign out</button>
		</View>
		</ThemeProvider>
	);
}
export default withAuthenticator(SponsorHomePage);
