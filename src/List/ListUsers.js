import {Fragment} from 'react'
import {ListGroup} from 'react-bootstrap'

const ListUsers = ({users, loading}) => {
  return (
    <Fragment>
      {!loading &&
        <Fragment>
          <h1>{users.data.total_count} User Result</h1>
          <ListGroup variant="flush">
            {users.data.items.map(user => (
              <ListGroup.Item key={user.id}>
                {user.login}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Fragment>
      }
    </Fragment>
  )
}

export default ListUsers
