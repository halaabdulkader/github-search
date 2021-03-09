import {Container} from 'react-bootstrap'

const SearchScreen = () => {
  return (
    <Container className='text-center mt-5'>
      <i className="fas fa-search fa-5x"></i>
      <h1>Enter a string to search for repositories and usernames</h1>
    </Container>
  )
}

export default SearchScreen
