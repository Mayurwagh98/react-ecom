import React from "react";

let Toppicks = (props) => {

    return(
        <>
        <div className="top_img">
            <img src={props.imgsrc} alt="kurta" />
            <br />
            <h3>{props.title}</h3>
        </div>
        </>
    )
}

export {Toppicks}