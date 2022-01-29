import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import React from 'react';
import Row from 'react-bootstrap/Row';

export class DisplayMessages extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: '',
        messages: []
      }
      this.handleChange = this.handleChange.bind(this);
      this.submitMessage = this.submitMessage.bind(this);
    }
    handleChange(event) {
      this.setState({
        input: event.target.value
      });
    }
    submitMessage(event) {  
      this.setState((state) => {
        const currentMessage = state.input;
        event.preventDefault(); 
        return {
          input: '',
          messages: state.messages.concat(currentMessage)
        };
      });
    }
    render() {
      return (
        <div>
          <h2>Enter text to add to list:</h2>
          <Form onSubmit={this.submitMessage}>
          <Row>
            <Col sm={8}>
          <Form.Control type="input"
            value={this.state.input}
            onChange={this.handleChange}
        /><br/>
            </Col>
            <Col sm={4}>
          <Button variant="primary" type="submit" onKeyPress={event => {
              if (event.key === "Enter") {
                this.submitMessage();
              }
            }}>Submit</Button>
          </Col>
          </Row>
          </Form>
          <Row>
          <Col sm={8}>
          <ListGroup as="ul">
            {this.state.messages.map( (message, idx) => {
                return (
                   <ListGroup.Item as="li" key={idx}>{message}</ListGroup.Item>
                )
              })
            }
          </ListGroup>
          </Col>
          </Row>
        </div>
      );
    }
  };