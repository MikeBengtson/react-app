import './index.css';

import { DisplayMessages } from './components/DisplayMessages'
import { Provider } from 'react-redux'
import React from 'react';
import ReactDOM from 'react-dom';
import { store } from './store'

class AppWrapper extends React.Component {
  // Render the Provider below this line
  render() { return (
<Provider store={store}>
  <DisplayMessages/>
</Provider>
  )};
  // Change code above this line
};

ReactDOM.render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>,
  document.getElementById('root')
);