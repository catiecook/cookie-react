import React from 'react';
import ReactBodymovin from 'react-bodymovin';
import animation from '../animations/shape-wave.json';

import './Animation.css';

const ShapeWave = () => {

  const bodymovinOptions = {
    loop: true,
    autoplay: true,
    prerender: true,
    animationData: animation
  }

  return (
    <div id="Animation" className="Animation">
      <ReactBodymovin options={bodymovinOptions} />
    </div>
  )
}

export default ShapeWave;
