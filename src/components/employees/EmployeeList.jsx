/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import { getStaffUsers } from "../../services/UserService";
import { User } from "../../users/User";
import "./Employees.css";

export const EmployeeList = () => {
  const [employees, setEmployee] = useState([]);

  useEffect(() => {
    getStaffUsers().then((employeeArray) => {
      setEmployee(employeeArray);
    });
  }, []);

  return (
    <div className="employees">
      {employees.map((employeeObj) => {
        return <User user={employeeObj} />;
      })}
    </div>
  );
};
