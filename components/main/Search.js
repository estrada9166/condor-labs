import React, {Component} from 'react'
import { Col, Row, Jumbotron } from 'react-bootstrap';
import SearchInput from './SearchInput'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { search } from '../../actions'

const styles = {
  background: {
    backgroundImage: 'url(/static/onlinecourses.jpg)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    opacity: 0.7,
    height: 300,
    fontWeight: 300
  },
  title: {
    fontSize: '3em',
    color: 'white',
    textAlign: 'center',
    paddingTop: 40,
    marginBottom: 30
  },
  location: {
    color: 'white',
    textAlign: 'center',
    paddingTop: 10
  }
}

class Search extends Component {
  constructor(props) {
    super(props)
    this.search = this.search.bind(this)
  }

  search() {
    const { search, formReducer } = this.props
    search(formReducer.search.search)
  }

  render() {
    return (
      <div>
        <Row>
          <Col lg={12} style={styles.background} >
            <Row>
              <p style={styles.title} >Course Search</p>
            </Row>
            <Row>
              <SearchInput 
                placeholder='Search courses and providers...'
                title='search'
                name='search'
                action={this.search}
              />
            </Row>
            <Row>
              <p style={styles.location}>Florida | Registered Nurse Florida</p>
            </Row>
          </Col>
        </Row>
      </div>
    )
  }
}

const mapStateToProps = ({ formReducer }) => {
  return {
    formReducer
  }
}

const mapDispatchToProps = dispatch => {
  return {
    search: bindActionCreators(search, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
