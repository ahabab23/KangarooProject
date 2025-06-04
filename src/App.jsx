import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";

// Shared styles
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

// Admin Components
import Login from "./components/Admin/Login";
import DashboardLayout from "./components/Admin/DashbordLayout";

// Public Site Components
import Header from "./components/Navbar/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects/Projects";
import AboutUs from "./pages/Company/AboutUs";
import MissionVision from "./pages/Company/Mission";
import WhyChooseUs from "./pages/Company/WhyChooseUs";
import OurTeam from "./pages/Company/Team";

import Strategy from "./pages/Services/Strategy";
import Human from "./pages/Services/Human";
import ICT from "./pages/Services/ICT";
import Development from "./pages/Services/Development";

// Project Pages
import DetaineeCaseManagement from "./pages/Projects/Detainee";
import ITFiberInfrastructure from "./pages/Projects/ItFiber";
import DataCenterInfrastructure from "./pages/Projects/DateCenter";
import CentralDatabaseRegistration from "./pages/Projects/Cdr";
import HRMBiometricSystem from "./pages/Projects/Hrm";
import SafeCityManagement from "./pages/Projects/Smp";
import HumanResourceManagement from "./pages/Projects/HumanResource";
import CountyRevenueCollection from "./pages/Projects/Revenue";
import MicrofinanceManagement from "./pages/Projects/MicroFinance";
import DigitalLoansMobile from "./pages/Projects/DigitalLoan";
import MyAccountantApp from "./pages/Projects/Accountant";

// Helper to detect admin route
function useIsAdminRoute() {
  const location = useLocation();
  return location.pathname.startsWith("/admin");
}

// Public Site Layout
function PublicSite() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/mission-vision" element={<MissionVision />} />
          <Route path="/why-choose-us" element={<WhyChooseUs />} />
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/strategy" element={<Strategy />} />
          <Route path="/human" element={<Human />} />
          <Route path="/ict" element={<ICT />} />
          <Route path="/development" element={<Development />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/our-projects-portfolio" element={<Projects />} />
          <Route
            path="/detainee-case-management"
            element={<DetaineeCaseManagement />}
          />
          <Route
            path="/it-fiber-infrastructure"
            element={<ITFiberInfrastructure />}
          />
          <Route
            path="/data-center-infrastructure"
            element={<DataCenterInfrastructure />}
          />
          <Route
            path="/central-database-registration"
            element={<CentralDatabaseRegistration />}
          />
          <Route
            path="/hrm-biometric-system"
            element={<HRMBiometricSystem />}
          />
          <Route
            path="/safe-city-management"
            element={<SafeCityManagement />}
          />
          <Route
            path="/county-hrm-system"
            element={<HumanResourceManagement />}
          />
          <Route
            path="/county-revenue-collection"
            element={<CountyRevenueCollection />}
          />
          <Route
            path="/microfinance-management"
            element={<MicrofinanceManagement />}
          />
          <Route
            path="/digital-loans-mobile"
            element={<DigitalLoansMobile />}
          />
          <Route path="/my-accountant-app" element={<MyAccountantApp />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

// Admin Section Layout
function AdminSection() {
  const isAuthenticated = localStorage.getItem("token");

  return (
    <Routes>
      <Route
        path="/login"
        element={
          isAuthenticated ? <Navigate to="/admin/dashboard" /> : <Login />
        }
      />
      <Route
        path="/dashboard/*"
        element={
          isAuthenticated ? <DashboardLayout /> : <Navigate to="/admin/login" />
        }
      />
      <Route path="*" element={<Navigate to="/admin/login" />} />
    </Routes>
  );
}
// Root App
export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <AppRouter />
    </BrowserRouter>
  );
}

function AppRouter() {
  const isAdmin = useIsAdminRoute();
  return isAdmin ? (
    <Routes>
      <Route path="/admin/*" element={<AdminSection />} />
    </Routes>
  ) : (
    <PublicSite />
  );
}
