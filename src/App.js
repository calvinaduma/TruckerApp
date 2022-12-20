import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ResponsiveNavBarT24, studioTheme } from "./ui-components";
import { ThemeProvider, withAuthenticator } from "@aws-amplify/ui-react";
import AccountPage from "./pages/AccountPage";
import CatalogPage from "./pages/CatalogPage";
import DriverHomePage from "./pages/DriverHomePage";
import ProfilePage from "./pages/ProfilePage";
import PurchaseHistoryPage from "./pages/PurchaseHistoryPage";
import ManagePurchasesPage from "./pages/ManagePurchasesPage";
import DriverApplicationPage from "./pages/DriverApplicationPage";
import NoPage from "./pages/NoPage";
import SponsorViewApplicationsPage from "./pages/SponsorViewApplicationsPage";
import SponsorHomePage from "./pages/SponsorHomePage";

function App() {
	return (
		<ThemeProvider theme={studioTheme}>
			<Router>
				<ResponsiveNavBarT24 />
				<div className="App">
					<Routes>
						<Route
							exact
							path="/DriverHomePage"
							element={<DriverHomePage />}
						></Route>
						<Route
							exact
							path="/AccountPage"
							element={<AccountPage />}
						></Route>
						<Route
							exact
							path="/CatalogPage"
							element={<CatalogPage />}
						></Route>
						<Route
							exact
							path="/ProfilePage"
							element={<ProfilePage />}
						></Route>
						<Route
							exact
							path="/DriverHomePage"
							element={<DriverHomePage />}
						></Route>
						<Route
							exact
							path="/SponsorHomePage"
							element={<SponsorHomePage />}
						></Route>
						<Route
							exact
							path="/PurchaseHistoryPage"
							element={<PurchaseHistoryPage />}
						></Route>
						<Route
							exact
							path="/ManagePurchasesPage"
							element={<ManagePurchasesPage />}
						></Route>
						<Route
							exact
							path="/DriverApplicationPage"
							element={<DriverApplicationPage />}
						></Route>
						<Route
							exact
							path="/SponsorViewApplicationsPage"
							element={<SponsorViewApplicationsPage />}
						></Route>
						<Route path="*" element={<NoPage />}></Route>
					</Routes>
				</div>
			</Router>
		</ThemeProvider>
	);
}
//const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render();
export default withAuthenticator(App);
