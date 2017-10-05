import React, {Component} from 'react'
import { Col, Row, Media, Button } from 'react-bootstrap';
import SearchInput from './SearchInput'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getFeaturedCourses } from '../../actions'
import { IMAGE_URL } from '../../constants'

const styles = {
  page: {
    backgroundColor: '#F3F3F3'
  },
  subtitle: {
    padding: '20px 0 0 0',
    color: '#777'
  },
  coursesRow: {
    marginTop: 20
  },
  courses: {
    backgroundColor: '#FCFCFC',
    boxShadow: '1px 1px 1px rgba(0, 0, 0, .5)',
    padding: 0
  },
  title: {
    marginTop: 10
  },
  description: {
    color: '#777'
  },
  detail: {
    paddingBottom: 30,
    marginRight: 10,
    borderBottom: '2px solid #F7F7F7'
  },
  button: {
    backgroundColor: '#00CC66',
    color: 'white',
    padding: '3px 10px',
    fontWeight: 500
  }
}

class Featured extends Component {
  componentWillMount() {
    this.props.getFeaturedCourses()
  }

  render() {
    const { mainReducer } = this.props
    return (
      <div style={styles.page}>
        <Row>
          <Col lg={10} lgOffset={1} style={styles.subtitle}>
            <p>Featured Courses</p>
          </Col>
        </Row>
        {
          mainReducer.featuredCourses.map(course => 
            <Row style={styles.coursesRow} key={course.id} >
              <Col lg={10} lgOffset={1} style={styles.courses}>
                <Media>
                  <Media.Left>
                    <img 
                      width={300} 
                      height={200} 
                      src={IMAGE_URL + course.coursePublication.course.featuredBanner} 
                      alt="Image"
                    />
                  </Media.Left>
                  <Media.Body>
                    <Media.Heading style={styles.title} >
                      {course.coursePublication.course.name}
                    </Media.Heading>
                    <br />
                    <p style={styles.description} >
                      {course.coursePublication.course.provider.name}
                    </p>
                    <br />
                    <p style={styles.detail} >
                      {course.coursePublication.course.totalHours || 26} Hrs · Computer-Based Training
                    </p>
                    <Button style={styles.button} >
                      $ {course.coursePublication.course.price || '30.00'}
                    </Button>
                  </Media.Body>
                </Media>
              </Col>
            </Row>
          )
        }
      </div>
    )
  }
}

const mapStateToProps = ({ mainReducer }) => {
  return {
    mainReducer
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getFeaturedCourses: bindActionCreators(getFeaturedCourses, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Featured)
