import { Images } from "./slideshowData";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";

// let data = JSON.parse(localStorage.getItem("images"));

const slideImages = [
  {
    url: "https://assets.ajio.com/medias/sys_master/images/images/h36/h49/47512411963422/22022022-D-Unisex-topbannercarousel-p1-5090.jpg",
    caption: "Slide 1",
  },
  {
    url: "https://assets.ajio.com/medias/sys_master/images/images/h21/h1b/47512412160030/22022022-D-Unisex-topbannercarousel-p2-ethnicwear-min50.jpg",
    caption: "Slide 2",
  },
  {
    url: "https://assets.ajio.com/medias/sys_master/images/images/hf8/h1d/47512412356638/22022022-D-Unisex-topbannercarousel-p5-premiumbrands-3060.jpg",
    caption: "Slide 3",
  },
];

let SlideShow = () => {
  //   let i = 0;
  //   let slideShow = document.getElementsByClassName("slide_show");
  //   setInterval(() => {
  //     if (i == Images.length) {
  //       i = 0;
  //     }
  //     slideShow.src = Images[i].image;
  //     i = i + 1;
  //   }, 2000);

  return (
    <div className="slide-container">
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div className="each-slide" key={index}>
            <div
              style={{
                backgroundImage: `url(${slideImage.url})`,
                height: "400px",
                width: "95%",
                // border: "2px solid red",
                margin:"auto"
              }}
            >
              {/* <span>{slideImage.caption}</span> */}
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export { SlideShow };
