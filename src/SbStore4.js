import React from "react";

const Store4 = (props) => {
  return (
    <div>
      {" "}
      <section>
        <div className="box-container">
          <div className="flex-wrapper-four">
            <div className="poster-four">
              <h2>Our latest collection</h2>
              <p>
                Damon Brown celebrates Black culture and his take on community
                using surprising color palettes, angles, and shapes in this
                artist series.
              </p>
              <a href="/">Meet Damon</a>
            </div>

            <div className="duck">
              <img src={props.sb4dataObj.imgSrc} alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Store4;
