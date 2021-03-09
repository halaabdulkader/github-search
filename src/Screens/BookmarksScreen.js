import {Fragment, useState, useEffect} from 'react'
import {Container, Row, Col, ListGroup} from 'react-bootstrap'
import {Header, BookmarksSidebar, BookmarkIcon} from './../Base'

const BookmarksScreen = () => {
  const [repos, setRepos] = useState(null)

  useEffect(() => {
    const storageRepos = JSON.parse( localStorage.getItem('bookmarks'))

    if(storageRepos) {
      setRepos(storageRepos)
    }

  }, [])
  return (
    <Fragment>
      <Header />
      <Container className='center-text' fluid={true}>
        <Row>
          <Col className='border-right border-bottom'>  
            <BookmarksSidebar reposCount={repos ? repos.length : 0}/>
          </Col>
          <Col xs={9}>
            <ListGroup variant="flush">
              {repos && repos.map(repo => (
                <ListGroup.Item key={repo.id}>
                  <BookmarkIcon repo={repo} />
                  <a href={repo.html_url}>{repo.name}</a>
                  <p>{repo.description}</p>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </Fragment>
  )
}

export default BookmarksScreen
