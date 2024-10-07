import React from "react";
import UseInput from "./UseInput";

function UseForm() {
  const [firstName, bindFirstName, resetFirstName] = UseInput("");
  const [LastName, bindLasteName, resetLastName] = UseInput("");

  const submitHandler = (e) => {
    e.preventDefault();
    alert(`Hello ${firstName} ${LastName}`);
    resetFirstName();
    resetLastName();
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label>First name</label>
          <input {...bindFirstName} type="text" />
        </div>
        <div>
          <label>Last Name</label>
          <input {...bindLasteName} type="text" />
        </div>

        <button>Submit</button>
      </form>
    </div>
  );
}

export default UseForm;
