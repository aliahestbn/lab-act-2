import React from "react";

const Store = (props) => {
  return (
    <div className="box-container">
      <div className="flex-wrapper">
        <div class="coffee-image">
          <img src={props.sbdataObj.imgSrc} alt="props" />
        </div>

        <div className="poster-four">
          <h2>{props.sbdataObj.title}</h2>
          <p>{props.sbdataObj.description}</p>
          <a href={props.link}>Order now</a>
        </div>
      </div>
    </div>
  );
};

export default Store;
