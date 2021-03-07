import {Fragment} from 'react'
import {Container, ListGroup} from 'react-bootstrap'

const ListRepos = ({repos, loading}) => {
  return (
    <Fragment>
      {!loading &&
        <Fragment>
          <h1>{repos.data.total_count} Repository Result</h1>
          <ListGroup variant="flush">
            {repos.data.items.map(repo => (
              <ListGroup.Item key={repo.id}>
                {repo.name}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Fragment>
      }
    </Fragment>
  )
}

export default ListRepos
