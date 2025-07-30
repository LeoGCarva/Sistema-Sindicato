import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export function UserLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
