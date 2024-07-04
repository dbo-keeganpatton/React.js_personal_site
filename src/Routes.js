import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactForm from "./pages/contactForm.js";
import MainPage from "./pages/mainPage.js";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
		<Route path="/contact" element={<ContactForm />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;

