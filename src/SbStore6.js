import React from "react";

const Store6 = (props) => {
  return (
    <div>
      {" "}
      <section>
        <div className="box-container">
          <div className="flex-wrapper-five">
            <div className="poster-five">
              <h2>
                “This is our community. We’re in it together.” - Olivia,
                Starbucks Partner (Employee)
              </h2>
              <p>
                Our partners uplift each other and their communities every day.
              </p>
              <a href="/">Learn more</a>
            </div>

            <div className="duck">
              <img src={props.sb6dataObj.imgSrc} alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Store6;
