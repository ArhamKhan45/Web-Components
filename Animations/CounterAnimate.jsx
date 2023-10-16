import React, { useEffect } from "react";

function CounterAnimate(props) {
  function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }

  useEffect(() => {
    let count = document.getElementById(props.id);
    console.log(count);
    animateValue(count, props.start, props.end, 3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <p id={props.id}>0</p>;
}

export default CounterAnimate;
