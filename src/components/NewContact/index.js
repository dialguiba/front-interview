import React, { useState } from "react";
import "./style.css";

function NewContact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [typeContact, setTypeContact] = useState("");

  function onValueChange(event) {
    console.log(event.target.value);
    setTypeContact(event.target.value);
  }

  return (
    <div>
      <h1>Add Contact</h1>
      <form action="">
        <input type="text" name="name" onChange={(event) => setName(event.target.value)} value={name} />
        <input type="email" name="email" onChange={(event) => setEmail(event.target.value)} value={email} />
        <input type="phone" name="phone" onChange={(event) => setPhone(event.target.value)} value={phone} />

        <label>
          <input type="radio" name="gender" value="Personal" checked={typeContact === "Personal"} onChange={(e) => onValueChange(e)} />
          Personal
        </label>
        <br />

        <label>
          <input type="radio" name="gender" value="Professional" checked={typeContact === "Professional"} onChange={(e) => onValueChange(e)} />
          Professional
        </label>
        <br />
      </form>
    </div>
  );
}

export default NewContact;
