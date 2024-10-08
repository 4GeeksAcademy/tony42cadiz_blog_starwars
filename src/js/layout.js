import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { CharCards } from "./views/Characters.jsx";
import { CharDetails } from "./views/CharDetails.jsx";
import { PlanCards } from "./views/Planets.jsx";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Home } from "./views/Home.jsx";
import { ShipCards } from "./views/Ships.jsx";
import { SpeciesCards } from "./views/Species.jsx";
import { VehiclesCards } from "./views/Vehicles.jsx";
import { PlanDetails } from "./views/PlanDetails.jsx";
import { ShipDetails } from "./views/ShipDetails.jsx";
import { SpeciesDetails } from "./views/SpeciesDetails.jsx";
import { VehiclesDetails } from "./views/VehiclesDetails.jsx";
import { Contacts } from "./views/Contacts.jsx";
import { FormularioContacto } from "./views/FormularioContacto.jsx";
//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/home" element={<Home />} />
						<Route path="/characters" element={<CharCards/>} />
						<Route path="/characters/:theid" element={<CharDetails />} />
						<Route path="/planets" element={<PlanCards />} />
						<Route path="/planets/:theid"  element={<PlanDetails />} />
						<Route path="/ships" element={<ShipCards/>} />
						<Route path="/ships/:theid" element={<ShipDetails />} />
						<Route path="/species" element={<SpeciesCards/>} />
						<Route path="/species/:theid" element={<SpeciesDetails />} />
						<Route path="/vehicles" element={<VehiclesCards/>} />
						<Route path="/vehicles/:theid" element={<VehiclesDetails />} />
						<Route path="/contacts" element={<FormularioContacto />} />
						<Route path="*" element={<h1 className="bod">Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
