import Search from './Search'
import Contacts from './Contacts'


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