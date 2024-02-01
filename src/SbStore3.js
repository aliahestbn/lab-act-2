import React from "react";

const Store = (props) => {
  return (
    <div className="box-container">
      <div className="flex-wrapper-two">
        <div class="coffee-image">
          <img src={props.sb3dataObj.imgSrc} alt="props" />
        </div>

        <div className="poster-two">
          <h2>{props.sb3dataObj.title}</h2>
          <p>{props.sb3dataObj.description}</p>
          <a href={props.link}>Join for free</a>
        </div>
      </div>
    </div>
  );
};

export default Store;
