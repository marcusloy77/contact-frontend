import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
const Search = ({ handleContentChange }) => {
  return (
    <div className='searchBar'>
      <Form id='search'>
          <Form.Group className="mb-3">
            <Form.Label className='subTitle'>Search</Form.Label>
            <Form.Control onChange={handleContentChange} type="text" name='searchReq' placeholder="e.g. John ,0435... etc" />
          </Form.Group>
      </Form>
    </div>
  )
}

export default Search