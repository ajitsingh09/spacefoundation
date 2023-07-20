import React from "react";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { images } from "../dummydata";

const Imageslider = () => {
  const [width, setwidth] = useState(0);
  const carousel = useRef();
  useEffect(() => {
    console.log(carousel.current);
    setwidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div className="app">
      <motion.div
        ref={carousel}
        className="carousel"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-carousel"
        >
          {images.map((val) => (
            <motion.div className="item" key={val.img}>
              <div>{val.img}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Imageslider;
