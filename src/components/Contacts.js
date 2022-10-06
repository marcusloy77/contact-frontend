const Contacts = ({toContactPage, contactList}) => {
  return (
    <div className="contacts">
      {contactList.map((contact, index) => {
        return (
          <div key={index} onClick={toContactPage} className={contact.id}>{contact.name}: {contact.phone}</div>
        )
      })}
    </div>
  )
}

export default Contacts