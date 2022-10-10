import { useLocation, Link } from 'react-router-dom'
import React from 'react';
import { AiFillMail, AiFillMessage } from 'react-icons/ai'
import { FaPhoneAlt, FaVideo } from 'react-icons/fa'
const ContactPage = () => {
  const location = useLocation();
  const contact = location.state

  const placeLink = () => { // just making the structure a little cleaner to read
    return 'https://www.google.com/maps/place/'+ contact.address.suite.replace(' ', '+') + '+' + contact.address.street.replace(' ', '+') + '+' + contact.address.city.replace (' ', '+')
  }

  const longStringProcessor = (str) => {
    if (str.length > 30) {
      return str.slice(0,30) + '...'
    }
  }
  
  return (
    <div className="contactPage">
      <div className='title'><p>{contact.name}</p></div>
      <div className='actionBtnsContact'>
        <Link className='boxBtn' to={'/' + contact.username + '/message'}><div className='box'><div className='boxIcon'><AiFillMessage size='1.5em'/></div><p className='boxWord'>Msg</p></div></Link>
        <Link className='boxBtn' to={'/call?number=' + contact.phone}><div className='box'><div className='boxIcon'><FaPhoneAlt size='1.5em'/></div><p className='iconWord'>Call </p></div></Link>
        <Link className='boxBtn' to='/webcam'><div className='box'><div className='boxIcon'><FaVideo size='1.5em'/></div><p className='iconWord'>Vid</p></div></Link>
        <a className='boxBtn' href={'mailto:' + contact.email}><div className='box'><div className='boxIcon'><AiFillMail size='1.5em'/></div><p className='iconWord'>Mail</p></div></a></div>
        <Link className='contactOptions' to={'/call?number=' + contact.phone}><div>Phone: {contact.phone}</div></Link>
      <Link className='contactOptions' to={'mailto:' + contact.email}><div >Email: {contact.email}</div></Link>
      <Link className='contactOptions' to={'https://www.google.com/search?q=' + contact.company.name.replace(' ', '+')}><div >Company: {contact.company.name}</div></Link>
      <Link className='contactOptions' to={'http://' + contact.website}><div >Website: {contact.website}</div></Link>
      <Link className='contactOptions' to={placeLink()}><div>{longStringProcessor(contact.address.suite + ' ' + contact.address.street + ' ' + contact.address.city + ' ' + contact.address.zipcode)}</div></Link>

    </div>
  )
}

export default ContactPage