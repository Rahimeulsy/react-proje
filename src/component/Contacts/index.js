import { useState, useEffect } from "react";
import List from "./List";
import Form from "./Form";

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname: "Mehmet",
      phone_number: "123123",
    },
    {
      fullname: "Ayşe",
      phone_number: "456456",
    },
    {
      fullname: "Nazlı",
      phone_number: "789785",
    },
  ]);
  const clearContacts = () => {
    setContacts(contacts.slice(0, -1));
  };

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);

  return (
    <div id="container">
      <h1>Contacts</h1>
      <List contacts={contacts} />
      <Form
        addContact={setContacts}
        contacts={contacts}
        clearContacts={clearContacts}
      />
    </div>
  );
}

export default Contacts;
