import { useState, useEffect } from "react";
import "../../../App.css";

const initialFormValues = { fullname: "", phone_number: "" };

function Form({ addContact, contacts, clearContacts }) {
  const [form, setForm] = useState(initialFormValues);

  useEffect(() => {
    setForm(initialFormValues);
  }, [contacts]);

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value }); 
  };

  const onSubmit = (e) => {
    e.preventDefault(); //bir formun yeniden yüklenmesini (submit edilmesini) engeller

    if (form.fullname === "" || form.phone_number === "") {
      return false;
    }

    addContact([...contacts, form]);
     setForm({ fullname: "", phone_number: "" });
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <input
          name="fullname"
          placeholder="Full Name"
          value={form.fullname}
          onChange={onChangeInput}
        />
      </div>
      <br />
      <div>
        <input
          name="phone_number"
          placeholder="Phone Number"
          value={form.phone_number}
          onChange={onChangeInput}
        />
      </div>
      <br></br>
      <div className="bttn">
        <button onClick={onSubmit}>Add</button>
        <button type="button" onClick={clearContacts}>Del</button>
      </div>
    </form>
  );
}

export default Form;
