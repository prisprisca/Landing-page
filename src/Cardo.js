import React from 'react'
import Card from './Card'

function Cardo() {
    return (
        <div>
     <Card head='About Us' text='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.' icon={[<i className='far fa-building fa-3x'></i>]}/>
      <Card head='Our Values' text='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.' icon={[<i class='fas fa-globe-africa fa-3x'></i>]} color='lightgray'/>
      <Card head='Our Mission' text='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.' icon={[<i class='fas fa-landmark fa-3x'></i>]}/>   
        </div>
    )
}

export default Cardo
