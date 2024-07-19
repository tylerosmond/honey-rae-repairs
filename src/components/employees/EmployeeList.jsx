/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import { getStaffUsers } from "../../services/UserService";
import { Link } from "react-router-dom";
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
        return (
          <Link to={`/employees/${employeeObj.id}`} key={employeeObj.id}>
            <User user={employeeObj} />;
          </Link>
        );
      })}
    </div>
  );
};
