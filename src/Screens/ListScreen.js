import {Fragment, useState} from 'react'
import {Switch, Route} from 'react-router-dom'
import {Container, Row, Col} from 'react-bootstrap'
import SearchScreen from './SearchScreen'
import {SearchHeader, Sidebar} from './../Base'
import {ListRepos, ListUsers, ListBookmarks} from './../List'

const ListScreen = () => {
  const [repos, setRepos] = useState(null)
  const [users, setUsers] = useState(null)
  const [loading, setLoading] = useState(true)

  const handleStateChange = (repoState, userState) => {
    setRepos(repoState)
    setUsers(userState)
  }

  const handleLoadingChange = () => {
    setLoading(false)
  }

  return (
    <Fragment>
      <SearchHeader handleStateChange={handleStateChange} handleLoadingChange={handleLoadingChange} />
      <Container fluid={true}>
        <Row>
          <Switch>
            <Route exact path='/search'>
              <SearchScreen />
            </Route>
            <Route exact path='/search/repositories'>
              <Col className='border-right border-bottom'>
                {!loading && <Sidebar reposCount={repos.data.total_count} usersCount={users.data.total_count} />}
              </Col>
              <Col xl={9} md={7} sm={6} xs={0}>
                <ListRepos repos={repos} loading={loading} />
              </Col>
            </Route>
            <Route exact path='/search/users'>
              <Col className='border-right border-bottom'>
                {!loading && <Sidebar reposCount={repos.data.total_count} usersCount={users.data.total_count} />}
              </Col>
              <Col xl={9} md={7} sm={6} xs={0}>
                <ListUsers users={users} loading={loading} />
              </Col>
            </Route>
            <Route exact path='/search/bookmarks'>
              <Col className='border-right border-bottom'>
                {!loading && <Sidebar reposCount={repos.data.total_count} usersCount={users.data.total_count} />}
              </Col>
              <Col xl={9} md={7} sm={6} xs={0}>
                <ListBookmarks repos={repos} />
              </Col>
            </Route>
            <Route>
              <Container className='text-center mt-5'>
                <h1>404 NOT FOUND</h1>
              </Container>
            </Route> 
          </Switch>
        </Row>
      </Container>
    </Fragment>
  )
}

export default ListScreen
