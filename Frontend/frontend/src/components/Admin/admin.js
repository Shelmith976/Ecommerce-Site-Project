import React from "react";
import { Link } from "react-router-dom";

export default function Admin() {
  return( <div>
    <h3>Admin</h3>
  <Link to="/adminOrders">Orders</Link><br/>
  <Link to="/adminProducts">Products</Link><br/>
  <Link to="/adminCustomers">Customers</Link><br/>

  </div>
  );
}
