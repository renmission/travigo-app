import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Home, PricingPage } from "./pages/client";
import { AuthLayout, BaseLayout, MainLayout } from "./layouts";
import { SignIn, SignUp } from "./pages/auth";
import { loginAPI, registerAPI } from "./data";

export default createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<BaseLayout />}>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="pricing" element={<PricingPage />} />
      </Route>
      <Route path="/auth" element={<AuthLayout />}>
        <Route index element={<SignIn {...loginAPI} />} />
        <Route path="signup" element={<SignUp {...registerAPI} />} />
      </Route>
    </Route>
  )
);
