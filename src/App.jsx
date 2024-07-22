import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Login } from "./components/auth/Login";
import { Register } from "./components/auth/Register";
import { Authorized } from "./views/Authorized";
import { ApplicationViews } from "./views/ApplicationViews";

export const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route
        path="*"
        element={
          // check if user is Authorized
          <Authorized>
            {/* ApplicationViews is the CHILD component of Authorized*/}
            <ApplicationViews />
          </Authorized>
        }
      />
    </Routes>
  );
};
