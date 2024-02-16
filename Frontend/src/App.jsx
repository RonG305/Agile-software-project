import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/authentication/login";
import RegisterPage from "./pages/authentication/register";
import ForgotPassword from "./pages/authentication/forgotpassword";
import DashboardPage from "./pages/Dashboard";
// import NavbarHeader from "./components/Navbar";
import ThemeWrapper from "./components/ThemeWrapper";

export default function App() {
  return (
    <>
      {/* <NavbarHeader /> */}
      <Router>
        <Routes>
          <Route element={<ThemeWrapper />}>
            <Route index element={<DashboardPage />} />
            <Route path="/authentication/sign-in" element={<LoginPage />} />
            <Route path="/authentication/sign-up" element={<RegisterPage />} />
            <Route
              path="/authentication/forgot-password"
              element={<ForgotPassword />}
            />
          </Route>
        </Routes>
      </Router>
    </>
  );
}
