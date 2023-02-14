import React from 'react';

const Circle = ({ size, color, margin }) => (
  <div
    style={{
      width: size,
      height: size,
      borderRadius: '50%',
      backgroundColor: color,
      display: 'inline-block',
      margin: margin,
    }}
  />
);

const Background = () => (
  <div
    style={{
      backgroundColor: '',
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      marginLeft: '15vw',
      marginRight: '15vw',
    }}
  >
    <Circle size={400} color="#75B1FA" margin="10px" />
    <Circle size={480} color="#46DAB5" margin="10px" />
    <Circle size={660} color="#75B1FA" margin="10px" /> 
    <Circle size={600} color="#46DAB5" margin="10px" />
    <Circle size={450} color="#75B1FA" margin="10px" />
    
   

  </div>
);

export default Background;
