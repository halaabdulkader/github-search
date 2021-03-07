import {Fragment, useState} from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import {Header, Sidebar} from './../Base'
import {ListRepos, ListUsers} from './../List'

const ListScreen = () => {
  const [repos, setRepos] = useState({})
  const [users, setUsers] = useState({})
  const [loading, setLoading] = useState(true)

  const handleStateChange = (repoState, userstate) => {
    setRepos(repoState)
    setUsers(userstate)
  }

  const handleLoadingChange = () => {
    setLoading(false)
  }

  return (
    <Fragment>
      <Header handleStateChange={handleStateChange} handleLoadingChange={handleLoadingChange} />
      <Container fluid={true}>
        <Row>
          <Col className='border-right border-bottom'>
            {!loading && <Sidebar reposCount={repos.data.total_count} usersCount={users.data.total_count} />}
          </Col>
          <Col xs={9}>
            {/* <ListRepos repos={repos} loading={loading} /> */}
            <ListUsers users={users} loading={loading} />
          </Col>
        </Row>
      </Container>
    </Fragment>
  )
}

export default ListScreen
