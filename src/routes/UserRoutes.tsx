import { Routes as Switch, Route } from "react-router-dom";
import { Login } from "../pages/Login";
import { Associate } from "../pages/Associate/Associate";
import { UserLayout } from "../layout/UserLayout";

export default function UserRoutes() {
  return (
    <>
      <Switch>
        <Route path="/" element={<UserLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/associate" element={<Associate />} />
        </Route>
      </Switch>
    </>
  );
}
