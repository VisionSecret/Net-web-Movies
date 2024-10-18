import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Registration from "./pages/Registration.jsx";
import SignupForm from "./pages/SignupForm.jsx";
import LoginForm from "./pages/LoginForm.jsx";
import Errorpage from "./pages/404page.jsx";
import Contact from "./pages/Contact.jsx";

// Create the router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<App />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/signupForm" element={<SignupForm />} />
      <Route path="/loginForm" element={<LoginForm />} />
      <Route path="/404page" element={<Errorpage />} />
      <Route path="/contact" element={<Contact />} />
    </Route>
  )
);

// Render the application
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
