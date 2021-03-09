import {useState} from 'react';
import {NavLink, Link, useHistory} from 'react-router-dom'
import axios from 'axios'
import {Navbar, Nav,Form, FormControl, Button} from 'react-bootstrap'

const SearchHeader = ({handleStateChange, handleLoadingChange}) => {
  const [searchQuery, setSearchQuery] = useState('')
  const history = useHistory()
 
  const handleClick = (event) => {
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
          handleStateChange(reposResponse, usersResponse)
          handleLoadingChange()
          setSearchQuery('')
          history.push('/search/repositories')

        }
      } catch (error) {
        console.error(error)
      }
    }
    getData()
  }

  return (
    <>
    <Navbar bg="dark" variant="dark" expand='md'>
      <Navbar.Brand><Link className='text-light' style={{textDecoration: 'none'}} to='/'>DIGIEGGS</Link></Navbar.Brand>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Form inline>
          <Nav>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" value={searchQuery} onChange={(e)=>{setSearchQuery(e.target.value)}}/>
          </Nav>
          <Nav>
          <Button className='mr-3 ml-3' variant="outline-info" onClick={handleClick}>Search</Button>
          </Nav>
            
        </Form>
        <Nav>
          <NavLink to='/bookmarks' className='nav-link'>
            <i
              className='far fa-bookmark mr-2'
              style={{color: '#ffffff'}}
              ></i>
            Bookmarks
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </>
  )
}

export default SearchHeader
