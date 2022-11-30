import React from "react";

let Footer = () =>{
    
    let year = new Date().getFullYear()

    return(

        <>
        <h4>{year} All right reserved</h4>
        <h4>
            <hr />
        </h4>

        </>
    )
}

export {Footer}