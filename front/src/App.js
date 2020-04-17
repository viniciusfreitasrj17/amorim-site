import React from 'react';

import NavBarMenu from './components/NavBarMenu'
import './styles.css';

function App({ children }) {
  return (
    <div className="w-100">
      <NavBarMenu />
      {children}
    </div>
  );
}

export default App;
