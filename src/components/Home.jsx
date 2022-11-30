import React from "react";
import { SlideShow } from "./SlideShow";

let Home = () => {
  return (
    <>
      {/* <h1>Home</h1> */}
      {/* <Link to="/" ><Home /></Link> */}
      <div className="slide_show">
        <SlideShow />
      </div>
      <br />
      <h1>Today's Deals</h1>
      <div className="today_deals">
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyUVWJ645_SI5LWf_okXWIKKuokeq2MvOF1A&usqp=CAU"
            alt=""
          />
          <br />
          Summer Wears
        </div>
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJQW9naFiEn04gZabBDDXwzBywZO_erYIb3A&usqp=CAU"
            alt=""
          />
          <br />
          Winter Wear
        </div>
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYJ00qWQLEZWw3p3M21RqguSRfMRlqfiB2_w&usqp=CAU"
            alt=""
          />
          <br />
          Monsoon Wear
        </div>
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8UOLTOFrKSuTGrCPCYE6cXDmUzJVV_lN9XQ&usqp=CAU"
            />
          <br />
          Casual Wear
        </div>
      </div>
    </>
  );
};

export { Home };
