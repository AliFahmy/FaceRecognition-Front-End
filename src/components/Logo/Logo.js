import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import face from './face.png';
function Logo() {
  return (
    <div className='ma4 mt0'>
      <Tilt
        className='Tilt br2 shadow-2'
        options={{ max: 35 }}
        style={{ height: 150, width: 150 }}
      >
        <div className='Tilt-inner pa3'>
          {' '}
          <img src={face} alt='face' />{' '}
        </div>
      </Tilt>
    </div>
  );
}

export default Logo;
