import React, {Component} from 'react'
import { Col, Row, Media, Button } from 'react-bootstrap';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getCourses } from '../../actions'

const styles = {
  page: {
    backgroundColor: '#F3F3F3'
  },
  subtitle: {
    padding: '40px 0 0 0',
    color: '#777'
  },
  count: {
    color: '#00CC66',
    fontWeight: 900
  },
  coursesRow: {
    paddingBottom: 50
  },
  courseContainer: {
    padding: 0
  },
  courses: {
    marginTop: 20
  },
  course: {
    backgroundColor: '#FCFCFC',
    boxShadow: '1px 1px 1px rgba(0, 0, 0, .5)',
    height: 210
  },
  body: {
    padding: '0 0 5px 10px',
  },
  title: {
    marginTop: 10,
    height: 30
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

class Courses extends Component {
  componentWillMount() {
    this.props.getCourses()
  }

  render() {
    const { mainReducer } = this.props
    return (
      <div style={styles.page}>
        <Row>
          <Col lg={10} lgOffset={1} style={styles.subtitle}>
            <p><span style={styles.count} >{mainReducer.length}</span> Results</p>
          </Col>
        </Row>
        <Row style={styles.coursesRow} >
          <Col lg={10} lgOffset={1} style={styles.courseContainer} >
            <Row>
              {
                mainReducer.courses.map(course =>
                  <Col lg={4} style={styles.courses} key={course.id}>
                    <Media style={styles.course}>
                      <Media.Body style={styles.body}>
                        <Media.Heading style={styles.title} >
                          {course.course.name}
                        </Media.Heading>
                        <br />
                        <p style={styles.description} >
                          {course.course.provider.name}
                        </p>
                        <br />
                        <p style={styles.detail} >
                          {course.totalHours} Hrs · {course.course.deliveryMethod.description}
                        </p>
                        <Button style={styles.button} >$ {course.price}</Button>
                      </Media.Body>
                    </Media>
                  </Col>
                )
              }
            </Row>
          </Col>          
        </Row>
      </div>
    )
  }
}

const mapStateToProps = ({ mainReducer, formReducer }) => {
  return {
    mainReducer
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getCourses: bindActionCreators(getCourses, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Courses)
