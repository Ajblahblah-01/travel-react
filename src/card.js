import React from "react";

export default function Card(props){
    return (
        <>
        <div className="cards">
            <img className="left" src = {props.img} />
            <div className="main-content">
                <div className="location">
                    <img src={require('./icons/pin.png')} alt = "" />
                    <h1>{props.name}</h1>
                    <p>{props.link}</p>
                </div>
                <div className="title">{props.title}</div>
                <div className = "date"> {props.date} </div>
                <p className="description">{props.description}</p>
            </div>
        </div>
        {props.line && <div className="line"></div>}
        </>
    )
}