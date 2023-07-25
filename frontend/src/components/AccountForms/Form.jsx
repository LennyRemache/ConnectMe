import React, { useState } from "react";

function Form() {
  const [registered, setRegistered] = useState(false);
  return (
    <>
      <form method={!registered ? "post" : "get"} className="accountForms">
        <input type="button" value="Sign Up" />

        <div>Log In</div>
      </form>
    </>
  );
}

export default Form;
