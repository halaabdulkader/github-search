import axios from 'axios'
import {Navbar, Nav,Form, FormControl, Button} from 'react-bootstrap'


const Header = ({handleUsersChange, handleLoadingChange}) => {
  const [userName, setUserName] = useState('')

  const handleClick = (event) => {
      event.preventDefault()
      const getUser = async () => {
        try {
          const response = await axios.get(`https://cors-anywhere.herokuapp.com/https://api.github.com/users/${userName}`)
          
          if (response.status === 200) {
            handleUsersChange(response)
            handleLoadingChange()
            setUserName('')
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
        <FormControl type="text" placeholder="Search" className="mr-sm-2" value={userName} onChange={(e)=>{setUserName(e.target.value)}}/>
        <Button variant="outline-info" onClick={handleClick}>Search</Button>
      </Form>
      <Nav className="ml-5">
        <Nav.Link href="#home">Bookmarks</Nav.Link>
      </Nav>
    </Navbar>
  </>
  )
}

export default Header
