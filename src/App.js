import logo from './logo.svg';
import './components/App.css';
import Search from './components/Search'
import Contacts from './components/Contacts';
import { useState, useEffect } from 'react'
//plan
//Title, add contact, search bar
//You contact
//contact names, with pages for each
//icon next to contacts?

//in json we get : id, name, username, email, address, phone, website, company

function App() {

  const [typedSearch, setTypedSearch] = useState('')
  const  [initialContacts, setInitialContacts]= useState([])
  const [contacts, setContacts] = useState(initialContacts)

  const filterJson = (json) => {
    for (let i = 0; i < json.length; i++) {
      json[i].phone = json[i].phone.slice(0,json[i].phone.indexOf('x'))
      json[i].phone = json[i].phone.replace(/\.|\(|\)|\-/g, ' ')
    }
    return json
  }

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(json => {
      json = filterJson(json)
      setInitialContacts(json)
      setContacts(json)
    })
  }, []) //fetching initial list once, then keeping it and using filtered list for search function
  
  
  const handleContentChange = (event) => {
    setTypedSearch(event.target.value)
    filterContacts(event.target.value)
  }

  const filterContacts = (searchStr) => {
    searchStr = searchStr.toLowerCase()
    let newContactList = initialContacts.filter(contact =>{
      return (
        (contact.name.toLowerCase().includes(searchStr) || contact.username.toLowerCase().includes(searchStr) || contact.email.toLowerCase().includes(searchStr) || contact.phone.toLowerCase().includes(searchStr) || contact.address.city.toLowerCase().includes(searchStr) || contact.website.toLowerCase().includes(searchStr) || contact.company.name.toLowerCase().includes(searchStr))
      )
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


    </div>
  );
}

export default App;
