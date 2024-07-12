import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactForm from "./pages/contactForm.js";
import MainPage from "./pages/mainPage.js";
import P1 from "./pages/p1.js";


const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
		<Route path="/contact" element={<ContactForm />} />
		
		<Route path="/P1" element={<P1 />} />
	</Routes>
    </Router>
  );
}

export default AppRoutes;

