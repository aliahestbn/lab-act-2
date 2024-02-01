import React from "react";

const Store2 = (props) => {
  return (
    <div>
      {" "}
      <section>
        <div className="box-container">
          <div className="flex-wrapper-three">
            <div className="poster-three">
              <h2>Savory and satisfying</h2>
              <p>
                Grab a subtly sweet Chicken, Maple Butter & Egg Sandwich on the
                way.
              </p>
              <a href="#">Order now</a>
            </div>

            <div className="duck">
              <img src={props.sb2dataObj.imgSrc} alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Store2;
