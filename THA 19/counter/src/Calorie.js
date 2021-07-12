import React from 'react'
import './App.css';

export const Calorie = (props) => {

    return (
        <div className="innerContainer">
            <h3>{props.title}</h3>  
            <p>You have consumed {props.amount} cals today</p>          
            
        </div>
    )
}
