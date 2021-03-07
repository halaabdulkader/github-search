import {useState} from 'react';
import axios from 'axios'
import {Navbar, Nav,Form, FormControl, Button} from 'react-bootstrap'


const Header = ({handleStateChange, handleLoadingChange}) => {
  const [repoQuery, setRepoQuery] = useState('')

  const handleClick = (event) => {
      event.preventDefault()
      const getUser = async () => {
        try {
          const response = await axios.get('https://cors-anywhere.herokuapp.com/https://api.github.com/search/repositories', {
            params: {
              q: repoQuery
            }
          })
          
          if (response.status === 200) {
            console.log(response);
            handleStateChange(response)
            handleLoadingChange()
            setRepoQuery('')
          }
        } catch (error) {
          console.error(error)
        }
      }
      getUser()
  }

  return (
    <>
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#">DIGIEGGS</Navbar.Brand>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" value={repoQuery} onChange={(e)=>{setRepoQuery(e.target.value)}}/>
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
