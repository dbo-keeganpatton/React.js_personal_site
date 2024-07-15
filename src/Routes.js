import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactForm from "./pages/contactForm.js";
import MainPage from "./pages/mainPage.js";

import P1 from "./pages/p1.js";
import P2 from "./pages/p2.js";
import P3 from  "./pages/p3.js";
import P4 from "./pages/p4.js";

const AppRoutes = () => {
  return (
		<Router>
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="/contact" element={<ContactForm />} />
				
				<Route path="/P1" element={<P1 />} />
				<Route path="/P2" element={<P2 />} />
				<Route path="/P3" element={<P3 />} />
				<Route path="/P4" element={<P4 />} />

			</Routes>
    </Router>
  );
}

export default AppRoutes;

