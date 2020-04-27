import React, { useState, useEffect } from 'react';

import ArrowUp from './components/ArrowUp';
import './styles.css';

function App({ children }) {
  const [lastYPos, setLastYPos] = useState(0);
  const [el, setEl] = useState('');
  // const [el1, setEl1] = useState('');
  // const [el2, setEl2] = useState('');
  // const [el3, setEl3] = useState('');

  useEffect(() => {
    function handleScroll() {
      const currentYPos = window.scrollY;
      // const isScrollingUp = currentYPos < lastYPos;
      // console.log(currentYPos, isScrollingUp, lastYPos)

      setLastYPos(currentYPos);
    }

    window.onscroll = () => handleScroll()

    function handleElement() {
    //   if (lastYPos >= 0 && lastYPos < 369) {
    //     setEl1(
    //       <Action init={0} anim={1} rotate={360} />
    //     )
    //   } else setEl1(<Action init={1} anim={0} rotate={90} />)


    //   if (lastYPos >= 370 && lastYPos < 909) {
    //     setEl2(
    //       <Action init={0} anim={1} rotate={360} />
    //     )
    //   } else setEl2(<Action init={1} anim={0} rotate={90} />)


    //   if (lastYPos >= 910) {
    //     setEl3(
    //       <Action init={0} anim={1} rotate={360} />
    //     )
    //   } else setEl3(<Action init={1} anim={0} rotate={90} />)

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
