
import './styles/App.css';
import './styles/Call.css';
import './styles/ContactPage.css';
import './styles/Contacts.css';
import './styles/Home.css'
import WebcamCapture from './components/Webcam'
import Home from './components/Home'
import ContactPage from './components/ContactPage'
import Call from './components/Call'
import Message from './components/Message'
import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, Link } from 'react-router-dom'
//todo : add a nav, fix the location point in the contact page


function App() {

  const [typedSearch, setTypedSearch] = useState('') // didn't use this in the end, but left it in for possible future use
  const [initialContacts, setInitialContacts]= useState([]) // saving the first contact list
  const [contactList, setContacts] = useState(initialContacts) // creating a second contact list to filter, change etc
  const navigate = useNavigate()
  const themes = {resonate: 'App resonateTheme', dark: 'App darkTheme', light: 'App lightTheme'}
  
  const cleanJson = (json) => {
    for (let i = 0; i < json.length; i++) {
      json[i].phone = json[i].phone.slice(0,json[i].phone.indexOf('x')) // weird x... ending to phone numbers - i assume that isn't wanted, never seen it before
      json[i].phone = json[i].phone.replace(/\.|\(|\)|\-/g, ' ') // a little regex to remove the noise from the phone numbers
    }
    json = json.sort((a,b) => a.name < b.name? -1 : 1) // sorting list by alphabetical first name

    return json
  }

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(json => {
      json = cleanJson(json)
      setInitialContacts(json)
      setContacts(json)
    })
  }, []) //fetching initial list once, then keeping it and using filtered list for search function
  
  
  const handleContentChange = (event) => {
    setTypedSearch(event.target.value)
    filterContacts(event.target.value) //making the search immediate as its typed
  }

  const filterContacts = (searchStr) => {
    searchStr = searchStr.toLowerCase() //making our search case non-sensitive
    let newContactList = initialContacts.filter(contact =>{
      return (
        (contact.name.toLowerCase().includes(searchStr) || contact.username.toLowerCase().includes(searchStr) || 
        contact.email.toLowerCase().includes(searchStr) || contact.phone.replace(' ', '').includes(searchStr) || 
        contact.address.city.toLowerCase().includes(searchStr) || contact.website.toLowerCase().includes(searchStr) || 
        contact.company.name.toLowerCase().includes(searchStr))
      ) // searching through the main things people might search for, replacing spaces in phoneNum so search works
    })
    setContacts(newContactList)
  }

  const toContactPage = (event) => {
    if (event.target.closest('.iconMain')) {
      return // this is just to prevent parent propagation if an icon is clicked, probably better practice somewhere but it works, so eh
    }
    const contact = contactList.filter(cont => (cont.id) == (event.target.closest('.contactDivs').id))[0]
    navigate(`/${contact.username}`, {state : contact}) //passing the clicked contact into its page with usenavigate, uselocation hooks
  }

  return (
    <div className={themes.resonate}>
      
      <Routes>
        <Route path='/' element={<Home handleContentChange={handleContentChange} toContactPage={toContactPage} contactList={contactList}></Home>}></Route>
        <Route path='/:username' element={<ContactPage></ContactPage>}></Route>
        <Route path='/call' element={<Call/>}></Route>
        <Route path='/:username/message' element={<Message />}></Route>
        <Route path='/webcam' element={<WebcamCapture />}></Route>
      </Routes>
      <div className='nav'>
        <div className='nav-elem'><a href='/'><span className='nav-word'>Home</span></a></div>
        <div className='nav-elem'><a href='/call'><span className='nav-word'>Dial</span></a></div>
        <div className='nav-elem res-pop'><div><span className='nav-word'>Themes </span></div></div>
      </div>
    </div>
  );
}

export default App;
