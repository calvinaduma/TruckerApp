import React from "react";
import { View, withAuthenticator, ThemeProvider } from "@aws-amplify/ui-react";
import { DriverHeroLayout2, studioTheme } from "../ui-components";

function DriverHomePage({ signOut, user }) {
	return (
		<ThemeProvider theme={studioTheme}>
		<View className="DriverHomePage">
			<DriverHeroLayout2 />
		</View>
		</ThemeProvider>
	);
}
export default withAuthenticator(DriverHomePage);
