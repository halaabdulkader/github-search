import {Fragment} from 'react'
import {Header} from './../Base'
import {Container} from 'react-bootstrap'

const HomeScreen = () => {
  return (
    <Fragment>
      <Header />
      <Container className='text-center mt-5'>
        <i className="fas fa-search fa-5x"></i>
        <h1>Welcome to Github Search</h1>
      </Container>
    </Fragment>
  )
}

export default HomeScreen
