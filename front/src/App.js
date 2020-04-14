import React from 'react';

import NavBar from './components/NavBar'
import './styles.css';

function App({ children }) {
  return (
    <div className="w-100">
      <NavBar />
      {children}
    </div>
  );
}

export default App;
