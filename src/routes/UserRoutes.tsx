import { Routes as Switch, Route } from "react-router-dom";
import { Login } from "../pages/Login";
import { Home } from "../pages/Home";

export default function UserRoutes() {
  return (
    <>
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Switch>
    </>
  );
}
