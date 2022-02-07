import React from 'react';

const ProgressBar = (props) => {
    const {completed } = props;
  
    const containerStyles = {
      height: 30,
      width: '40%',
      backgroundColor: "#d5d7fb",
      borderRadius: 50,
      margin: 50, 
      boxShadow: "2px 2px 5px 0px black"
    }
  
    const fillerStyles = {
      height: '100%',
      width: `${completed}%`,
      transition: 'width 1s ease-in-out',
      backgroundColor: "#f4fbff",
      borderRadius: 'inherit',
      textAlign: 'right',
      boxShadow: "1px 1px 1px 0px black",
    }
  
    return (
      <div style={containerStyles}>
        <div style={fillerStyles}>
          <span>{`${completed}%`}</span>
        </div>
      </div>
    );
  };
  
  export default ProgressBar;