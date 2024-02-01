import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import router from './router';

const App = () => {
  return (
    <Router>
      {router}
    </Router>
  );
}

export default App;
