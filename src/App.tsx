import "./app.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import About from "./pages/About/About";
import Recruitment from "./pages/Recruitment/Recruitment";
import ViewLicence from "./pages/ViewLicence/ViewLicence";
import ContactPage from "./pages/ContactPage/ContactPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/recruitment" element={<Recruitment />} />
        <Route path="/licence" element={<ViewLicence />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
};

export default App;
