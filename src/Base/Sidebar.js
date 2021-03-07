import {Fragment} from 'react'
import {ListGroup, Row, Col} from 'react-bootstrap'

const Sidebar = ({reposCount, usersCount}) => {
  return (
    <Fragment>
      <ListGroup variant="flush">
        <ListGroup.Item>
          <Row>
            <Col>
              <i className='fas fa-file mr-2'></i>
            </Col>
            <Col>
              <h6>Repositories</h6>      
            </Col>
            <Col>
              <h6>{reposCount}</h6>
            </Col>
          </Row>
        </ListGroup.Item>
        <ListGroup.Item>
          <Row>
            <Col>
              <i className='far fa-grin mr-2'></i>
            </Col>
            <Col>
              <h6>Users</h6>      
            </Col>
            <Col>
              <h6>{usersCount}</h6>
            </Col>
          </Row>
        </ListGroup.Item>
        <ListGroup.Item>
          <Row>
            <Col>
              <i className='far fa-bookmark mr-2'></i>
            </Col>
            <Col>
              <h6>Bookmarked</h6>      
            </Col>
            <Col>
              <h6>{12}</h6>
            </Col>
          </Row>
        </ListGroup.Item>
      </ListGroup>
    </Fragment>
  )
}

export default Sidebar
