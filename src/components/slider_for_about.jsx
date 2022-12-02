import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import {slideImages} from "./ToppicksData"

let AboutSildeshow = () => {
  return (
    <div className="slide-container">
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div className="about_each_slide" key={index}>
            <div
              style={{
                backgroundImage: `url(${slideImage.url})`,
                height: "300px",
                margin: "auto",
                objectFit: "contain"
              }}
            > 
            </div>
            <h1>{slideImage.caption}</h1>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export { AboutSildeshow };
