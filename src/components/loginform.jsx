import React from "react";
import Input from "./input.jsx";
function Form(props) {
  return (
    <form className="form">
      <Input placeHolder1="Username" type="text" />
      <Input type="password" placeHolder1="Password" />

      <button type="submit">Login</button>
    </form>
  );
}
export default Form;
