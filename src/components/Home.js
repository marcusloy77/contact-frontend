import Search from './Search'
import Contacts from './Contacts'

//responsive notes : search bar needs to get bigger with contacts

const Home = ({handleContentChange, toContactPage, contactList} ) => {
  return (
  <>
    <div className='title'>
          <p className='titleText'>Contacts</p>
          <Search handleContentChange={handleContentChange}></Search>
        </div>
        <main>
          <Contacts toContactPage={toContactPage} contactList={contactList}></Contacts>
        </main>
    </>
  )
}

export default Home