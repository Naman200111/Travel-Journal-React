import React from "react"

export default function Component(props) {
    return (
        <div className="component">
            <div className="component-img">
                <img src={`./images/${props.item.img}`} className="component-img"></img>
            </div>
            <div className="component-content">
                <div className="comp-desc">
                    <img src="./images/Pin.png"></img>
                    <p>{props.item.country}</p>
                    <p className="view-on-google-maps">View on Google Maps</p>
                </div>
                <h1 className="component-heading">{props.item.name}</h1>
                <p className="component-duration">{props.item.duration}</p>
                <p className="component-description">{props.item.description}</p>
            </div>
        </div>
    )
}