import React from 'react';

import NavBar from './views/NavBar'
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
