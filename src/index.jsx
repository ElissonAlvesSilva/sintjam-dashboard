import React from 'react';
import ReactDOM from 'react-dom';

import './scss/dashboard.scss';

import App from './components/App';

const Root = () => {
  return (
    <>
      <App/>
    </>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));
