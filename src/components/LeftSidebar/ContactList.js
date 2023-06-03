import React from "react";
import ContactTab from "./ContactTab";

function ContactList({ contacts }) {
  // need contact tab component
  return (
    <>
      <div className="contactscreen">
        {contacts.map((contact, index) => (
          <ContactTab contact={contact} key={index} />
        ))}
      </div>
    </>
  );
}
const styles = {
  contactList: {
    overflowY: "scroll",
    height: "80vh",
    zIndex: "2",
    backgroundColor: "#fff",
  },
};
export default ContactList;
