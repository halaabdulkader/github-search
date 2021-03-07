import {Fragment} from 'react'
import {ListGroup, Row, Col} from 'react-bootstrap'

const Sidebar = ({reposCount}) => {
  return (
    <Fragment>
      <ListGroup variant="flush">
        <ListGroup.Item>
          <Row>
            <Col>
              <i className='fas fa-file mr-2'></i>
              <h7>Repositories</h7>      
            </Col>
            <Col>
              <h7>{reposCount}</h7>
            </Col>
          </Row>
        </ListGroup.Item>
        <ListGroup.Item>
          <Row>
            <Col>
              <i class='far fa-grin mr-2'></i>
              <h7>Users</h7>      
            </Col>
            <Col>
              <h7>{50}</h7>
            </Col>
          </Row>
        </ListGroup.Item>
        <ListGroup.Item>
          <Row>
            <Col>
              <i className='far fa-bookmark mr-2'></i>
              <h7>Bookmarked</h7>      
            </Col>
            <Col>
              <h7>{12}</h7>
            </Col>
          </Row>
        </ListGroup.Item>
      </ListGroup>
    </Fragment>
  )
}

export default Sidebar
