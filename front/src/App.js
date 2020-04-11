import React from 'react';

import NavBar from './views/NavBar'

function App({ children }) {
  return (
    <div className="container-fluid">
      <NavBar />
      {children}
    </div>
  );
}

export default App;
