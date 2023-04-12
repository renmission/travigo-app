import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Home } from "./pages/client";
import { AuthLayout, BaseLayout, MainLayout } from "./layouts";
import { Login, Register } from "./pages/auth";
import { loginAPI, registerAPI } from "./data";

export default createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<BaseLayout />}>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="/auth" element={<AuthLayout />}>
        <Route index element={<Login {...loginAPI} />} />
        <Route path="register" element={<Register {...registerAPI} />} />
      </Route>
    </Route>
  )
);
