
import React, { useState } from "react";

function Rate(props) {

  const [clicked, setClicked] = useState([false, false, false, false, false]);

  const handleClick = (e, index) => {
    e.preventDefault();
    let clickStates = [...clicked];
    for (let i = 0; i < 5; i++) {
      if (i == index) clickStates[i] = true;
      else clickStates[i] = false;
    }
    setClicked(clickStates);
    props.changeValue(index+1);
  }

  return (
    <div className="rating-content">

      <label className={clicked[0] ? "circle active" : "circle"}> 1
        <input type="radio" onClick={(e) => handleClick(e, 0)} />
      </label>
      <label className={clicked[1] ? "circle active" : "circle"}> 2
        <input type="radio" onClick={(e) => handleClick(e, 1)} />
      </label>
      <label className={clicked[2] ? "circle active" : "circle"}> 3
        <input type="radio" onClick={(e) => handleClick(e, 2)} />
      </label>
      <label className={clicked[3] ? "circle active" : "circle"}> 4
        <input type="radio" onClick={(e) => handleClick(e, 3)} />
      </label>
      <label className={clicked[4] ? "circle active" : "circle"}> 5
        <input type="radio" onClick={(e) => handleClick(e, 4)} />
      </label>

    </div>
  );
}

export default Rate;