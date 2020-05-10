import React from 'react';
import { useSpring, animated } from 'react-spring';
import '../styles.css';

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

function Card() {
  const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
  return (
    <animated.div
      className="content-card col-md-3"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans) }}
    />
  )
}

const Content = () => {

  return (
    <section id='content' style={{ backgroundColor: '#4c4646' }} >
      <h1 style={{ color: '#fff', textAlign: "center", paddingTop: '5rem' }} >Look us services</h1>
      <div className='container' style={{  }} >
        <div className='row col-md-12' style={{ justifyContent: 'center' }}>
          <Card />
          <Card />
          <Card />
        </div>

        <div className='row col-md-12' style={{ justifyContent: 'center' }}>
          <Card />
          <Card />
          <Card />
        </div>

        <div className='row col-md-12' style={{ justifyContent: 'center' }}>
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </section>
  );
}

export default Content;