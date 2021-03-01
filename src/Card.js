import React from "react";
import './Card.css'

function Card(props) {
  return (
    <div className="card" style={{backgroundColor: `${props.color}`}}>
      <div>{props.icon}</div>
      <div className='my-text'>
        <h2>{props.head}</h2>
        <p>{props.text}</p>
      </div>
    </div>
  );
};
//  Card.defaultProps = {
//    head: "About Us", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna", icon:<i className='far fa-building fa-3x'></i>,
// //   // head:"Our Values", text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.', icon:[<i class='fas fa-globe-africa fa-3x'></i>], color:'lightgray'

//  }

export default Card;
