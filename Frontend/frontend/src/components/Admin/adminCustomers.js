import React from "react";
import'./customers.css';
function adminCustomers() {
  return (
<div>
<span className="title">New members</span>   
<form>
  <label for="fname">First name:</label><br/>
  <input type="text" id="fname" name="fname"/><br/>
  <label for="lname">Last name:</label><br/>
  <input type="text" id="lname" name="lname"/>
</form>
</div>

)
}

export default adminCustomers;
