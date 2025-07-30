import { BrowserRouter } from "react-router-dom";
import UserRoutes from "./routes/UserRoutes";

export function App() {
  return (
    <>
      <BrowserRouter>
          <UserRoutes />
      </BrowserRouter>
    </>
  );
}
