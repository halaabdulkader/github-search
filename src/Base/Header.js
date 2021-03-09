import {NavLink, Link} from 'react-router-dom'
import {Navbar, Nav} from 'react-bootstrap'

const Header = () => {
  return (
    <>
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand><Link className='text-light' style={{textDecoration: 'none'}} to='/'>DIGIEGGS</Link></Navbar.Brand>
      <Nav className="ml-5">
        <Link to='/search' className='nav-link'>
          <i
            className='fas fa-search mr-2'
            style={{color: '#ffffff'}}
          ></i>
          Search  
        </Link>
      </Nav>
      <Nav>
        <NavLink to='/bookmarks' className='nav-link'>
          <i
            className='far fa-bookmark mr-2'
            style={{color: '#ffffff'}}
          ></i>
          Bookmarks
        </NavLink>
      </Nav>
    </Navbar>
  </>
  )
}

export default Header
