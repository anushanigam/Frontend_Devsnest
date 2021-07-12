import React, { useState } from 'react'

export const Counter = () => {
    const [count, setCount]=useState(0);

    const handleclick = () => {
        setCount(prevCount => prevCount + 1);
    };
    const [count1, setCount1]=useState(0);

    const handleclick1 = () => {
        setCount1(prevCount => prevCount + 1);
    };
    const [count2, setCount2]=useState(0);

    const handleclick2 = () => {
        setCount2(prevCount => prevCount + 1);
    };
    const [count3, setCount3]=useState(0);

    const handleclick3 = () => {
        setCount3(prevCount => prevCount + 1);
    };

    return (
        <div className="box">
            <button className="btn btn-small btn-danger " onClick={handleclick} >{count}</button>
            <button className="btn btn-small btn-danger " onClick={handleclick1} >{count1}</button>
            <button className="btn btn-small btn-danger " onClick={handleclick2} >{count2}</button>
            <button className="btn btn-small btn-danger " onClick={handleclick3} >{count3}</button>
            

        </div>
    )
}
