import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
const Search = ({ handleContentChange }) => {
  return (
    <div className='searchBar'>
      <div><Form>
          <Form.Group>
            <Form.Label className='subTitle'>Search</Form.Label>
            <Form.Control className='searchBarInput' onChange={handleContentChange} type="text" name='searchReq' placeholder="e.g. John ,0435... etc" />
          </Form.Group>
      </Form></div>
    </div>
  )
}

export default Search