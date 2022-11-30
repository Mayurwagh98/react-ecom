import React from "react";

let TodayDelas = (props) =>{

    return(
        <div >
            <img src={props.imgsrc} alt="" />
            <br />
            <h3>{props.title}</h3>
        </div>
    )

}
export {TodayDelas}