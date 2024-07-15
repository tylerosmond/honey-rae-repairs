/* eslint-disable react/jsx-key */
import { useState, useEffect } from "react";
import { getNonStaffUsers } from "../../services/UserService";
import { User } from "../../users/User";
import "./Customers.css";

export const CustomerList = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    getNonStaffUsers().then((customerArray) => {
      setCustomers(customerArray);
    });
  }, []);

  return (
    <div className="customers">
      {customers.map((customerObj) => {
        return <User user={customerObj} />;
      })}
    </div>
  );
};
