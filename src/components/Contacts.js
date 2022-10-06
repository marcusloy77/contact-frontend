const Contacts = ({contactList}) => {
  return (
    <div className="contacts">
      {contactList.map((contact, index) => {
        return (
          <div key={index}>{contact.name}: {contact.phone}</div>
        )
      })}
    </div>
  )
}

export default Contacts