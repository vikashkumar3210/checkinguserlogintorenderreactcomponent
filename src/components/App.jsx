import React from "react";
import Form from "./loginform.jsx";
var isLoggedIn = false;
function Check() {
  if (isLoggedIn === true) {
    return <h1>hello user</h1>;
  } else {
    return <Form placeHolder1="Username" placeHolder2="Password" />;
  }
}
function App() {
  return (
    <div className="container">
      <Check />
    </div>
  );
}

export default App;
