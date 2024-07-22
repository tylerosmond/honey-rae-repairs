/* eslint-disable react/jsx-key */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { User } from "../../users/User";
import "./Customers.css";
import { getNonStaffUsers } from "../../services/UserService";

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
        return (
          <Link to={`/customers/${customerObj.id}`} key={customerObj.id}>
            <User user={customerObj} />
          </Link>
        );
      })}
    </div>
  );
};
