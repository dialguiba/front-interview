import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
import Card from "../Card";

function ListContacts() {
  const [contacts, setContacts] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:3001/api/contact").then((res) => {
      console.log(res.data);
      setContacts(res.data);
    });
  }, []);

  return (
    <div>
      {contacts.map((contact) => (
        <Card key={contact._id} name={contact.name} phone={contact.phone} email={contact.email} type={contact.type} />
      ))}
    </div>
  );
}

export default ListContacts;
