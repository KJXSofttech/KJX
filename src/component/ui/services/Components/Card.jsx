import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import Styles from "./Card.module.css";

function Card({ imagen, onClick }) {
  const [show, setShown] = useState(false);

  const props3 = useSpring({
    transform: show ? "scale(1.5)" : "scale(1.3)",
    boxShadow: show ? "0 20px 25px rgb(0 0 0 / 25%)" : "0 2px 10px rgb(0 0 0 / 8%)",
  });

  function imageClick(url) {
    window.open(url, "_blank");
  }

  return (
    <animated.div
      className={Styles.card}
      style={props3}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
      onClick={() => imageClick(onClick)}
    >
      <img src={imagen} alt="" />
    </animated.div>
  );
}

export default Card;
