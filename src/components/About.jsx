import React from "react";
import { AboutSildeshow } from "./slider_for_about";

let About = () => {
  return (
    <>
      <div className="main_about">
        <div className="heading">
          <h1 className="get_about_heading">
            Some popular brands on our webite
          </h1>
        </div>
        <div className="about_slide">
          <AboutSildeshow />
        </div>
      </div>
    </>
  );
};

export { About };
