import logo from './logo.svg';
import './components/App.css';
import Search from './components/Search'
import Contacts from './components/Contacts';
import ContactPage from './components/ContactPage'
import { useState, useEffect } from 'react'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
//plan
//Title, add contact, search bar
//You contact
//contact names, with pages for each
//icon next to contacts?

//in json we get : id, name, username, email, address, phone, website, company

function App() {

  const [typedSearch, setTypedSearch] = useState('')
  const [initialContacts, setInitialContacts]= useState([])
  const [contacts, setContacts] = useState(initialContacts)
  const navigate = useNavigate()

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
      ) // searching through the main things people might search for, replacing spaces in phone so search works
    })
    setContacts(newContactList)
  }

  return (
    <div className="App">
      <header className='title'>
        <h1>Contacts</h1>
        <Search handleContentChange={handleContentChange}></Search>
      </header>
      <main>
        <Contacts contactList={contacts}></Contacts>
      </main>


      <Routes>
        <Route path='/:username' children={<ContactPage></ContactPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
