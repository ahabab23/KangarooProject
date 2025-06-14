// import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
//   Outlet,
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

// import ProjectDetails from "./components/Projects/ProjectDetails";

// // Enhanced auth check with error handling
// function useAuth() {
//   try {
//     const token = localStorage.getItem("token");
//     return !!token;
//   } catch (error) {
//     console.error("Error accessing localStorage:", error);
//     return false;
//   }
// }

// // Protected Route Component
// function ProtectedRoute({ children }) {
//   const isAuthenticated = useAuth();
//   return isAuthenticated ? children : <Navigate to="/admin/login" replace />;
// }

// // Public Route Component (prevents admin access when logged in)
// function PublicRoute({ children }) {
//   const isAuthenticated = useAuth();
//   return isAuthenticated ? (
//     <Navigate to="/admin/dashboard/users" replace />
//   ) : (
//     children
//   );
// }

// // Public Layout Component
// function PublicLayout() {
//   return (
//     <div className="min-h-screen flex flex-col bg-gray-50">
//       <Header />
//       <main className="flex-grow">
//         <Outlet />
//       </main>
//       <Footer />
//     </div>
//   );
// }

// // Root App Component
// export default function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Routes>
//           {/* Public routes with layout */}
//           <Route element={<PublicLayout />}>
//             <Route path="/" element={<Home />} />
//             <Route path="/about-us" element={<AboutUs />} />
//             <Route path="/mission-vision" element={<MissionVision />} />
//             <Route path="/why-choose-us" element={<WhyChooseUs />} />
//             <Route path="/our-team" element={<OurTeam />} />
//             <Route path="/services/strategy" element={<Strategy />} />
//             <Route path="/services/human" element={<Human />} />
//             <Route path="/services/ict" element={<ICT />} />
//             <Route path="/services/development" element={<Development />} />
//             <Route
//               path="/strategy"
//               element={<Navigate to="/services/strategy" replace />}
//             />
//             <Route
//               path="/human"
//               element={<Navigate to="/services/human" replace />}
//             />
//             <Route
//               path="/ict"
//               element={<Navigate to="/services/ict" replace />}
//             />
//             <Route
//               path="/development"
//               element={<Navigate to="/services/development" replace />}
//             />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/projects" element={<Projects />} />
//             <Route path="/projects/:id" element={<ProjectDetails />} />
//             <Route path="*" element={<Navigate to="/" replace />} />
//           </Route>

//           {/* Admin routes */}
//           <Route
//             path="/admin/login"
//             element={
//               <PublicRoute>
//                 <Login />
//               </PublicRoute>
//             }
//           />
//           <Route
//             path="/admin/dashboard/*"
//             element={
//               <ProtectedRoute>
//                 <DashboardLayout />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/admin"
//             element={<Navigate to="/admin/login" replace />}
//           />
//           <Route
//             path="/admin/*"
//             element={<Navigate to="/admin/login" replace />}
//           />
//         </Routes>
//       </div>
//     </Router>
//   );
// }
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
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

import ProjectDetails from "./components/Projects/ProjectDetails";

// JWT Token Decoding Function
function parseJwt(token) {
  try {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
        .join("")
    );
    return JSON.parse(jsonPayload);
  } catch (e) {
    return null;
  }
}

// Enhanced auth check with expiration validation
function useAuth() {
  try {
    const token = localStorage.getItem("token");
    const tokenExpiration = localStorage.getItem("tokenExpiration");

    if (!token) return false;

    // Check expiration from storage
    if (tokenExpiration) {
      if (Date.now() >= parseInt(tokenExpiration)) {
        localStorage.removeItem("token");
        localStorage.removeItem("tokenExpiration");
        return false;
      }
      return true;
    }

    // Fallback: Decode token to get expiration
    const decoded = parseJwt(token);
    if (decoded?.exp) {
      const expirationTime = decoded.exp * 1000;
      localStorage.setItem("tokenExpiration", expirationTime.toString());

      if (Date.now() >= expirationTime) {
        localStorage.removeItem("token");
        localStorage.removeItem("tokenExpiration");
        return false;
      }
      return true;
    }

    // Token exists but no expiration info
    return true;
  } catch (error) {
    console.error("Authentication check failed:", error);
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

// Public Layout Component
function PublicLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

// Root App Component
export default function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Public routes with layout */}
          <Route element={<PublicLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/mission-vision" element={<MissionVision />} />
            <Route path="/why-choose-us" element={<WhyChooseUs />} />
            <Route path="/our-team" element={<OurTeam />} />
            <Route path="/services/strategy" element={<Strategy />} />
            <Route path="/services/human" element={<Human />} />
            <Route path="/services/ict" element={<ICT />} />
            <Route path="/services/development" element={<Development />} />
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
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetails />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>

          {/* Admin routes */}
          <Route
            path="/admin/login"
            element={
              <PublicRoute>
                <Login
                  onLoginSuccess={(token) => {
                    localStorage.setItem("token", token);
                    const decoded = parseJwt(token);
                    if (decoded?.exp) {
                      localStorage.setItem(
                        "tokenExpiration",
                        (decoded.exp * 1000).toString()
                      );
                    }
                  }}
                />
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
          <Route
            path="/admin"
            element={<Navigate to="/admin/login" replace />}
          />
          <Route
            path="/admin/*"
            element={<Navigate to="/admin/login" replace />}
          />
        </Routes>
      </div>
    </Router>
  );
}
