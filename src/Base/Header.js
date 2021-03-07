import {useState} from 'react';
import axios from 'axios'
import {Navbar, Nav,Form, FormControl, Button} from 'react-bootstrap'

const Header = ({handleStateChange, handleLoadingChange}) => {
  const [searchQuery, setSearchQuery] = useState('')

  const handleClick = (event) => {
    console.log('clicked');
    event.preventDefault()
    
    const getData = async () => {
      try {
        const [reposResponse, usersResponse] = await Promise.all([
          axios.get('https://cors-anywhere.herokuapp.com/https://api.github.com/search/repositories', {
              params: {
                q: searchQuery
              }
          }),
          axios.get('https://cors-anywhere.herokuapp.com/https://api.github.com/search/users', {
              params: {
                q: searchQuery
              }
          })
        ])
        
        if (reposResponse.status === 200 && usersResponse.status === 200) {
          console.log(reposResponse, usersResponse);
          handleStateChange(reposResponse, usersResponse)
          handleLoadingChange()
          setSearchQuery('')

        }
      } catch (error) {
        console.error(error)
      }
    }
    getData()
  }

  return (
    <>
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#">DIGIEGGS</Navbar.Brand>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" value={searchQuery} onChange={(e)=>{setSearchQuery(e.target.value)}}/>
        <Button variant="outline-info" onClick={handleClick}>Search</Button>
      </Form>
      <Nav className="ml-5">
        <Nav.Link href="#home">
          <i
            className='far fa-bookmark mr-2'
            style={{color: '#ffffff'}}
          ></i>
          Bookmarks
        </Nav.Link>
      </Nav>
    </Navbar>
  </>
  )
}

export default Header
