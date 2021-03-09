import {Fragment, useState, useEffect} from 'react'
import {ListGroup} from 'react-bootstrap'
import {BookmarkIcon} from './../Base'

const ListBookmarks = (props) => {
  const [repos, setRepos] = useState(null)

  useEffect(() => {
    const storageRepos = JSON.parse( localStorage.getItem('bookmarks'))
    if(storageRepos) {
      let reposList = []

      props.repos.forEach((repo) => {
        if (storageRepos[repo.id]) {
          reposList.push(repo)
        }
      })
      setRepos(reposList)
    }
  }, [])

  return (
    <Fragment>
      <ListGroup variant="flush">
        {repos && repos.filter(repo => (
          <ListGroup.Item key={repo.id}>
            <BookmarkIcon repo={repo} />
            <a href={repo.html_url}>{repo.name}</a>
            <p>{repo.description}</p>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Fragment>
  )
}

export default ListBookmarks
