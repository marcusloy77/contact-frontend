import Search from './Search'
import Contacts from './Contacts'

const Home = ({handleContentChange, toContactPage, contactList} ) => {
  return (
  <>
    <header className='title'>
          <h1>Contacts</h1>
          <Search handleContentChange={handleContentChange}></Search>
        </header>
        <main>
          <Contacts toContactPage={toContactPage} contactList={contactList}></Contacts>
        </main>
    </>
  )
}

export default Home