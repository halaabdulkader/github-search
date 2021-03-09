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
                <img src={user.avatar_url} width='25px' style={{borderRadius: '50%', marginRight: '5px'}}/>
                <a href={user.html_url}>{user.login}</a>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Fragment>
      }
    </Fragment>
  )
}

export default ListUsers
