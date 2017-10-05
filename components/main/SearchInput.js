import React, {Component} from 'react'
import { Col, FormGroup, InputGroup, FormControl, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { inputChange } from '../../actions'

const styles = {
  buttonBackground: {
    backgroundColor: '#00CC66',
    color: 'white'
  }
}

class Input extends Component {
  constructor(props) {
    super(props);
    
    this.inputChange = this.inputChange.bind(this)
  }

  inputChange(e) {
    const { inputChange, title, name } = this.props
    inputChange(title, name, e.target.value)
  }

  render() {
    return (
      <div>
        <Col lg={4} lgOffset={4}>
          <FormGroup>
            <InputGroup>
              <FormControl 
                disabled={this.props.disabled}
                type={this.props.type}
                placeholder={this.props.placeholder}
                onChange={this.inputChange}
                value={this.props.val}
                componentClass={this.props.componentClass}
              />
              <InputGroup.Button>
                <Button onClick={this.props.action} style={styles.buttonBackground} >
                  <span className="glyphicon glyphicon-search"></span>
                </Button>
              </InputGroup.Button>
            </InputGroup>
          </FormGroup>
        </Col>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    inputChange: bindActionCreators(inputChange, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(Input)
