import { useLocation } from 'react-router-dom'
import React from 'react';

const ContactPage = () => {
  const location = useLocation();
  const contact = location.state
  console.log(contact)
  return (
    <div className="contactPage">
      <h1>{contact.name}</h1>

      <div className='actionBtnsContact'><div className='box'>Message</div><div className='box'>Call</div><div className='box'>Facetime</div><div className='box'>Mail</div></div>
      <div className='contactOptions'>Phone: {contact.phone}</div>
      <div className='contactOptions'>Email: <a id="emailThem" href={'mailto:' + contact.email}>{contact.email}</a></div>
      <div className='contactOptions'>Company: {contact.company.name}</div>
      <div className='contactOptions'>Website: <a if='websiteThem' href={'http://' + contact.website}>{contact.website}</a></div>
      <div className='contactOptions'>Lives at <a href={'https://www.google.com/maps/place/'+ contact.address.suite.replace(' ', '+') + '+' + contact.address.street.replace(' ', '+') + '+' + contact.address.city.replace(' ', '+')}>{contact.address.suite}, {contact.address.street}, {contact.address.city}, {contact.address.zipcode}</a></div>

    </div>
  )
}

export default ContactPage



//lat: '29.4572', lng: '-164.2990
//https://www.google.com/maps/place/41%C2%B024'12.2%22N+2%C2%B010'26.5%22E/
//https://www.google.com/maps/@29.4572,-164.2990,17z

//41.40338, 2.17403