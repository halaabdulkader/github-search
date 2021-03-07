import {Container, ListGroup} from 'react-bootstrap'

const SearchUser = ({user, loading}) => {
  return (
    <Container>
      <h1>User results</h1>
      {!loading &&
        <ListGroup variant="flush">
          <ListGroup.Item>{user.data.login}</ListGroup.Item>
        </ListGroup>
      }
    </Container>
  )
}

export default SearchUser
