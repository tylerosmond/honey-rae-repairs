import { Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import { CustomerList } from "./components/customers/CustomersList";
import { EmployeeList } from "./components/employees/EmployeeList";
import { TicketList } from "./components/tickets/TicketList";
import { NavBar } from "./components/nav/NavBar";
import { Welcome } from "./components/welcome/welcome";
import { CustomerDetails } from "./components/customers/CustomerDetails";

export const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <NavBar />
            <Outlet />
          </>
        }
      >
        <Route index element={<Welcome />} />
        <Route path="tickets" element={<TicketList />} />
        <Route path="employees" element={<EmployeeList />} />
        <Route path="customers">
          <Route index element={<CustomerList />} />
          <Route path=":customerId" element={<CustomerDetails />} />
        </Route>
      </Route>
    </Routes>
  );
};
