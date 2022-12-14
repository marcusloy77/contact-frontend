
import { FaPhoneAlt } from 'react-icons/fa'
import { AiFillMail, AiFillMessage } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Contacts = ({toContactPage, contactList}) => {

  return (
    <div className="contacts" >
      {contactList.map((contact, index) => {
        return (
          <div key={index} className='contactDivs' onClick={toContactPage} id={contact.id}>
            <div className='contact'>
              <p className='contactText'>{contact.name}</p> 
              <div className='icons'>
                <a className='iconMain' href={'mailto:' + contact.email}><AiFillMail size='1.4em'/></a>
                <Link className='iconMain' to={'/' + contact.username + '/message'}><AiFillMessage size='1.4em'/></Link>
                <Link className='iconMain' to={'/call?number=' + contact.phone}><FaPhoneAlt size='1.4em'/></Link>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Contacts