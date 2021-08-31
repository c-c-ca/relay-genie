import React from 'react';
import './Dots.scss';

const Dots = () => (
  <div className="lds-ellipsis-wrapper">
    <div className="lds-ellipsis">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
);

export default Dots;
