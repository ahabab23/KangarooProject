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

import ProjectDetails from "./components/Projects/ProjectDetails";

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

          <Route path="/projects/:id" element={<ProjectDetails />} />

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
