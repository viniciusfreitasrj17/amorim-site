import React from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-scroll';
import { BsChevronDoubleUp } from 'react-icons/bs';

import './styles.css'

const ArrowUp = ({init, anim}) => {

  return (
    <motion.div
      className='arrowUp'
      initial={{ scale: init, opacity: init }}
      whileHover={{ 
        scale: 1.2,
        transition: { duration: 0.5 }
      }}
      whileTap={{
        scale: 1
      }}
      animate={{
        scale: anim,
        opacity: anim,
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        opacity: { duration: 1.2 },
        scale: { duration: 0.5 }
      }}
    > 
      <Link 
        // className='arrowUp' 
        to="carousel" 
        spy={true} 
        smooth={true} 
        offset={50} 
        duration={1000}
        delay={100}
      >
        {/* <img className='arrowUpImg' src={imgSrc} />   */}
        <BsChevronDoubleUp size={34} color='#000' />
      </Link>
    </motion.div>
  )
}

export default ArrowUp;