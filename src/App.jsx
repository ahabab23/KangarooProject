// import React from "react";
// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   Navigate,
//   useLocation,
// } from "react-router-dom";

// // Shared styles
// import "./App.css";
// import "@fortawesome/fontawesome-free/css/all.min.css";

// // Admin Components
// import Login from "./components/Admin/Login";
// import DashboardLayout from "./components/Admin/DashbordLayout";

// // Public Site Components
// import Header from "./components/Navbar/Header";
// import Footer from "./components/Footer";

// import Home from "./pages/Home";
// import Contact from "./pages/Contact";
// import Projects from "./pages/Projects/Projects";
// import AboutUs from "./pages/Company/AboutUs";
// import MissionVision from "./pages/Company/Mission";
// import WhyChooseUs from "./pages/Company/WhyChooseUs";
// import OurTeam from "./pages/Company/Team";

// import Strategy from "./pages/Services/Strategy";
// import Human from "./pages/Services/Human";
// import ICT from "./pages/Services/ICT";
// import Development from "./pages/Services/Development";

// // Project Pages
// import DetaineeCaseManagement from "./pages/Projects/Detainee";
// import ITFiberInfrastructure from "./pages/Projects/ItFiber";
// import DataCenterInfrastructure from "./pages/Projects/DateCenter";
// import CentralDatabaseRegistration from "./pages/Projects/Cdr";
// import HRMBiometricSystem from "./pages/Projects/Hrm";
// import SafeCityManagement from "./pages/Projects/Smp";
// import HumanResourceManagement from "./pages/Projects/HumanResource";
// import CountyRevenueCollection from "./pages/Projects/Revenue";
// import MicrofinanceManagement from "./pages/Projects/MicroFinance";
// import DigitalLoansMobile from "./pages/Projects/DigitalLoan";
// import MyAccountantApp from "./pages/Projects/Accountant";

// // Helper to detect admin route
// function useIsAdminRoute() {
//   const location = useLocation();
//   return location.pathname.startsWith("/admin");
// }

// // Public Site Layout
// function PublicSite() {
//   return (
//     <div className="min-h-screen flex flex-col">
//       <Header />
//       <main className="flex-grow">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about-us" element={<AboutUs />} />
//           <Route path="/mission-vision" element={<MissionVision />} />
//           <Route path="/why-choose-us" element={<WhyChooseUs />} />
//           <Route path="/our-team" element={<OurTeam />} />
//           <Route path="/strategy" element={<Strategy />} />
//           <Route path="/human" element={<Human />} />
//           <Route path="/ict" element={<ICT />} />
//           <Route path="/development" element={<Development />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/our-projects-portfolio" element={<Projects />} />
//           <Route
//             path="/detainee-case-management"
//             element={<DetaineeCaseManagement />}
//           />
//           <Route
//             path="/it-fiber-infrastructure"
//             element={<ITFiberInfrastructure />}
//           />
//           <Route
//             path="/data-center-infrastructure"
//             element={<DataCenterInfrastructure />}
//           />
//           <Route
//             path="/central-database-registration"
//             element={<CentralDatabaseRegistration />}
//           />
//           <Route
//             path="/hrm-biometric-system"
//             element={<HRMBiometricSystem />}
//           />
//           <Route
//             path="/safe-city-management"
//             element={<SafeCityManagement />}
//           />
//           <Route
//             path="/county-hrm-system"
//             element={<HumanResourceManagement />}
//           />
//           <Route
//             path="/county-revenue-collection"
//             element={<CountyRevenueCollection />}
//           />
//           <Route
//             path="/microfinance-management"
//             element={<MicrofinanceManagement />}
//           />
//           <Route
//             path="/digital-loans-mobile"
//             element={<DigitalLoansMobile />}
//           />
//           <Route path="/my-accountant-app" element={<MyAccountantApp />} />
//         </Routes>
//       </main>
//       <Footer />
//     </div>
//   );
// }

// // Admin Section Layout
// function AdminSection() {
//   const isAuthenticated = localStorage.getItem("token");
//   console.log(isAuthenticated);

//   return (
//     <Routes>
//       <Route
//         path="/admin/login"
//         element={
//           isAuthenticated ? <Navigate to="/admin/dashboard/users" /> : <Login />
//         }
//       />
//       <Route
//         path="/admin/dashboard/*"
//         element={
//           isAuthenticated ? <DashboardLayout /> : <Navigate to="/admin/login" />
//         }
//       />
//       <Route path="/admin/*" element={<Navigate to="/admin/login" />} />
//     </Routes>
//   );
// }

// // Root App
// export default function App() {
//   return (
//     <BrowserRouter>
//       <AppRouter />
//     </BrowserRouter>
//   );
// }

// function AppRouter() {
//   const isAdmin = useIsAdminRoute();
//   return isAdmin ? <AdminSection /> : <PublicSite />;
// }
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

// Enhanced auth check with error handling
function useAuth() {
  try {
    const token = localStorage.getItem("token");
    return !!token;
  } catch (error) {
    console.error("Error accessing localStorage:", error);
    return false;
  }
}

// Protected Route Component
function ProtectedRoute({ children }) {
  const isAuthenticated = useAuth();
  return isAuthenticated ? children : <Navigate to="/admin/login" replace />;
}

// Public Route Component (prevents admin access when logged in)
function PublicRoute({ children }) {
  const isAuthenticated = useAuth();
  return isAuthenticated ? (
    <Navigate to="/admin/dashboard/users" replace />
  ) : (
    children
  );
}

// Helper to detect admin route
function useIsAdminRoute() {
  const location = useLocation();
  return location.pathname.startsWith("/admin");
}

// Public Site Layout with improved structure
function PublicSite() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow">
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* Company Routes */}
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/mission-vision" element={<MissionVision />} />
          <Route path="/why-choose-us" element={<WhyChooseUs />} />
          <Route path="/our-team" element={<OurTeam />} />

          {/* Services Routes */}
          <Route path="/services/strategy" element={<Strategy />} />
          <Route path="/services/human" element={<Human />} />
          <Route path="/services/ict" element={<ICT />} />
          <Route path="/services/development" element={<Development />} />

          {/* Legacy service routes (redirects) */}
          <Route
            path="/strategy"
            element={<Navigate to="/services/strategy" replace />}
          />
          <Route
            path="/human"
            element={<Navigate to="/services/human" replace />}
          />
          <Route
            path="/ict"
            element={<Navigate to="/services/ict" replace />}
          />
          <Route
            path="/development"
            element={<Navigate to="/services/development" replace />}
          />

          {/* Contact */}
          <Route path="/contact" element={<Contact />} />

          {/* Projects */}
          <Route path="/projects" element={<Projects />} />
          <Route
            path="/our-projects-portfolio"
            element={<Navigate to="/projects" replace />}
          />

          {/* Individual Project Routes */}
          <Route
            path="/projects/detainee-case-management"
            element={<DetaineeCaseManagement />}
          />
          <Route
            path="/projects/it-fiber-infrastructure"
            element={<ITFiberInfrastructure />}
          />
          <Route
            path="/projects/data-center-infrastructure"
            element={<DataCenterInfrastructure />}
          />
          <Route
            path="/projects/central-database-registration"
            element={<CentralDatabaseRegistration />}
          />
          <Route
            path="/projects/hrm-biometric-system"
            element={<HRMBiometricSystem />}
          />
          <Route
            path="/projects/safe-city-management"
            element={<SafeCityManagement />}
          />
          <Route
            path="/projects/county-hrm-system"
            element={<HumanResourceManagement />}
          />
          <Route
            path="/projects/county-revenue-collection"
            element={<CountyRevenueCollection />}
          />
          <Route
            path="/projects/microfinance-management"
            element={<MicrofinanceManagement />}
          />
          <Route
            path="/projects/digital-loans-mobile"
            element={<DigitalLoansMobile />}
          />
          <Route
            path="/projects/my-accountant-app"
            element={<MyAccountantApp />}
          />

          {/* Legacy project routes (redirects) */}
          <Route
            path="/detainee-case-management"
            element={
              <Navigate to="/projects/detainee-case-management" replace />
            }
          />
          <Route
            path="/it-fiber-infrastructure"
            element={
              <Navigate to="/projects/it-fiber-infrastructure" replace />
            }
          />
          <Route
            path="/data-center-infrastructure"
            element={
              <Navigate to="/projects/data-center-infrastructure" replace />
            }
          />
          <Route
            path="/central-database-registration"
            element={
              <Navigate to="/projects/central-database-registration" replace />
            }
          />
          <Route
            path="/hrm-biometric-system"
            element={<Navigate to="/projects/hrm-biometric-system" replace />}
          />
          <Route
            path="/safe-city-management"
            element={<Navigate to="/projects/safe-city-management" replace />}
          />
          <Route
            path="/county-hrm-system"
            element={<Navigate to="/projects/county-hrm-system" replace />}
          />
          <Route
            path="/county-revenue-collection"
            element={
              <Navigate to="/projects/county-revenue-collection" replace />
            }
          />
          <Route
            path="/microfinance-management"
            element={
              <Navigate to="/projects/microfinance-management" replace />
            }
          />
          <Route
            path="/digital-loans-mobile"
            element={<Navigate to="/projects/digital-loans-mobile" replace />}
          />
          <Route
            path="/my-accountant-app"
            element={<Navigate to="/projects/my-accountant-app" replace />}
          />

          {/* 404 fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

// Admin Section Layout with improved error handling
function AdminSection() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Routes>
        <Route
          path="/admin/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/admin/dashboard/*"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        />
        <Route path="/admin" element={<Navigate to="/admin/login" replace />} />
        <Route
          path="/admin/*"
          element={<Navigate to="/admin/login" replace />}
        />
      </Routes>
    </div>
  );
}

// Root App Component
export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AppRouter />
      </div>
    </BrowserRouter>
  );
}

// Main Router Logic
function AppRouter() {
  const isAdmin = useIsAdminRoute();

  return isAdmin ? <AdminSection /> : <PublicSite />;
}
