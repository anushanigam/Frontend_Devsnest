import React from 'react'
import memes from "./meme.jpg";
import './App.css';


export const Meme = () => {
    return (
        <div className="card">
            <img className="card-img-top" src={memes} alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">Meme Card</h5>
                <p className="card-text"></p>
                <a href="https://www.google.com/search?q=memes+related+to+online+classes&tbm=isch&ved=2ahUKEwj1seKm-NjxAhXun0sFHaUTBGMQ2-cCegQIABAA&oq=memes+related+to&gs_lcp=CgNpbWcQARgBMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADoECCMQJzoHCAAQsQMQQzoECAAQQzoFCAAQsQM6CAgAELEDEIMBUP0pWOVLYKJaaABwAHgBgAGqBIgB7CaSAQoyLTExLjQuMC4xmAEAoAEBqgELZ3dzLXdpei1pbWfAAQE&sclient=img&ei=Cc3pYLWJCO6_rtoPpaeQmAY&bih=657&biw=1366" className="btn btn-primary">Click for more memes</a>
            </div>
        </div>
    )
}
