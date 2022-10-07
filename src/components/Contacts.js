import './Contacts.css'

const Contacts = ({toContactPage, contactList}) => {
  return (
    <div className="contacts">
      {contactList.map((contact, index) => {
        return (
          <div key={index} className='contactDivs'><div onClick={toContactPage} className={contact.id}>{contact.name}: {contact.phone}</div></div>
        )
      })}
    </div>
  )
}

export default Contacts