import React, { useState, useEffect } from 'react';

import ArrowUp from './components/ArrowUp';
import './styles.css';

function App({ children }) {
  const [lastYPos, setLastYPos] = useState(0);
  const [el, setEl] = useState('');

  useEffect(() => {
    function handleScroll() {
      const currentYPos = window.scrollY;

      setLastYPos(currentYPos);
    }

    window.onscroll = () => handleScroll()

    function handleElement() {
      if (lastYPos >= 100) {
        setEl(
          <ArrowUp init={0} anim={1} />
        )
      } else setEl(<ArrowUp init={1} anim={0} />)
    }

    handleElement();
  }, [lastYPos]);

  return (
    <div className="w-100">
      {children}
      {el}
    </div>
  );
}

export default App;
