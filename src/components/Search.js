import Form from 'react-bootstrap/Form'

const Search = ({ handleContentChange }) => {
  return (
    <div className='searchBar'>
      <div>
            <Form.Label className='subTitle'>Search</Form.Label>
            <input className='searchBarInput' onChange={handleContentChange} type="text" name='searchReq' placeholder="e.g. John, 0435... etc" />
      </div>
    </div>
  )
}

export default Search