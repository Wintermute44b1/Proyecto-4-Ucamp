import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
  } from "react-router-dom";

  import NavBar from "../components/NavBar";
  
  import HomePage from "../pages/HomePage";
  import ContactUs from "../pages/ContactUs";
  import AboutUs from "../pages/AboutUs";
  
  const AppRouter = () => {
    return (
      <>
        <Router>
          <NavBar />
          <div className="container">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/aboutus" element={<AboutUs />} />
              <Route path="/contactus" element={<ContactUs />} />
            </Routes>
          </div>
        </Router>
      </>
    );
  };
  
  export default AppRouter;
  