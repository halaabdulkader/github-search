import {Fragment, useState} from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import Header from '../Base/Header'
import Sidebar from '../Base/Sidebar'
import ListRepos from '../List/ListRepos'

const ListScreen = () => {
  const [repos, setRepos] = useState({})
  const [loading, setLoading] = useState(true)

  const handleStateChange = (state) => {
    setRepos(state)
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
            {!loading && <Sidebar reposCount={repos.data.total_count} />}
          </Col>
          <Col xs={9}>
            <ListRepos repos={repos} loading={loading} />
          </Col>
        </Row>
      </Container>
    </Fragment>
  )
}

export default ListScreen
