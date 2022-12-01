import React from "react";
import { SlideShow } from "./SlideShow";
import { TodayDelas } from "./TodayDeals";
import { Toppicks } from "./Toppicks";
import { data, today_deals_images } from "./ToppicksData";

let Home = () => {
  return (
    <>
      {/* <h1>Home</h1> */}
      {/* <Link to="/" ><Home /></Link> */}

      <div className="slide_show">
        <SlideShow />
      </div>
      <br />
      <h1>Deal of the Day</h1>
      <div className="today_deals">
        {today_deals_images.map((ele, index) => {
          return (
            <div key={index}>
              <TodayDelas imgsrc={ele.img} title={ele.title}  />
            </div>
          );
        })}
      </div>
      <h1>Top Picks</h1>
      <div className="top_picks">
        {data.map((ele, index) => {
          return (
            <div key={index}>
              <Toppicks imgsrc={ele.img}  title={ele.title} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export { Home };
