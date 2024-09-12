import { useState } from "react";
import { useEffect, useRef } from "react";
import "../../../App.css";

function List({ contacts }) {
  const [filterText, setFilterText] = useState("");

  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase() //bir string (metin) içerisindeki tüm harfleri küçük harfe dönüştürür
        .includes(filterText.toLocaleLowerCase())
    );
  });

  const listRef = useRef(null);
  useEffect(() => {
    // Yeni bir isim eklendikçe listeyi en alta kaydır
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [contacts]);

  return (
    <div className="container">
      <input
        placeholder="Filter contact"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
      <ul className="list">
        {filtered.map((contact, i) => (
          <li key={i}>
            <span>{contact.fullname}</span>
            <span>{contact.phone_number}</span>
          </li>
        ))}
      </ul>
      <p>
        {" "}
        Total contacts <b /> ({filtered.length}){" "}
      </p>{" "}
    </div> //toplam veriyi sayar
  );
}

export default List;
