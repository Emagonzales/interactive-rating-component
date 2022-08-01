import React, { useState } from 'react';
import star from './assets/icon-star.svg';
import thankyou from './assets/illustration-thank-you.svg';
import Rate from './components/rate';
import './styles/main.scss';

export default function App() {
  const [rateVal, setRateVal] = useState(0);
  const [isShown, setIsShown] = useState(false);
  

  const submit = () => {
    setIsShown(current =>!current);
  };


  return (
    <div className="App">
      {!isShown && (
        <div className="card-container">
          <div className="circle"><img src={star} alt="star"/></div>
          <div className="text-content">
            <h1>How did we do?</h1>
            <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
          </div>
          <Rate changeValue={rateVal => setRateVal(rateVal)}/>
          <button className="main-btn" onClick={submit}>SUBMIT</button>
        </div>
      )}
      {isShown && <Thankyou value={rateVal}/>}
    </div>
  );
}

function Thankyou(props) {
  return (
      <div className="card-container">
        <div className="image-content"><img src={thankyou} className="thankyou-img" alt="star"/></div>
        <div className="selected">
          <p>You selected {props.value} out of 5</p>
        </div>
        <div className="text-content thankyou">
          <h1>Thank you!</h1>
          <p>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
        </div>
      </div>
  );
}
