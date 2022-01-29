import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import Container from 'react-bootstrap/Container'
import { DisplayMessages } from './components/DisplayMessages'
import { Provider } from 'react-redux'
import React from 'react';
import ReactDOM from 'react-dom';
import store from './store'

class AppWrapper extends React.Component {
  // Render the Provider below this line
  render() { return (
    <Container fluid>
<Provider store={store}>
  <DisplayMessages/>
</Provider>
</Container>
  )};
  // Change code above this line
};

ReactDOM.render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>,
  document.getElementById('root')
);