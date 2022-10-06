import Search from './Search'
import Contacts from './Contacts'
import './Home.css'

const Home = ({handleContentChange, toContactPage, contactList} ) => {
  return (
  <>
    <div className='title'>
          <h1>Contacts</h1>
          <Search handleContentChange={handleContentChange}></Search>
        </div>
        <main>
          <Contacts toContactPage={toContactPage} contactList={contactList}></Contacts>
        </main>
    </>
  )
}

export default Home