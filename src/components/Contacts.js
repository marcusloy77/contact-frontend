import './Contacts.css'
import { FaPhoneAlt } from 'react-icons/fa'
import { AiFillMail, AiFillMessage } from 'react-icons/ai'

const Contacts = ({toContactPage, contactList}) => {

  const toMail = (event) => {
    console.log(event.target)
  }

  const toCall = (event) => {
    console.log(event.target)
  }

  const toMessage = (event) => {
    console.log(event.target)
  }
  return (
    <div className="contacts" >
      {contactList.map((contact, index) => {
        return (
          <div key={index} className='contactDivs' onClick={toContactPage} id={contact.id}><div className='contact'><p className='contactText'>{contact.name}</p> <div className='icons'><div className='iconMain' onClick={toMail}><AiFillMail size='1.4em'/></div><div className='iconMain' onClick={toMessage}><AiFillMessage size='1.4em'/></div><div className='iconMain' onClick={toCall}><FaPhoneAlt size='1.4em'/></div></div></div></div>
        )
      })}
    </div>
  )
}

export default Contacts