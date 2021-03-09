import {Fragment} from 'react'
import {ListGroup} from 'react-bootstrap'
import {BookmarkIcon} from './../Base'

const ListRepos = ({repos, loading}) => {
  return (
    <Fragment>
      {!loading &&
        <Fragment>
          <ListGroup variant="flush">
            {repos && repos.data.items.map(repo => (
              <ListGroup.Item key={repo.id}>
                <BookmarkIcon repo={repo} />
                <a href={repo.html_url}>{repo.name}</a>
                <p>{repo.description}</p>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Fragment>
      }
    </Fragment>
  )
}

export default ListRepos
