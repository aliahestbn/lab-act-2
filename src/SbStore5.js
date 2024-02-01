import React from "react";

const Store = (props) => {
  return (
    <div className="box-container">
      <div className="flex-wrapper-six">
        <div class="coffee-image">
          <img src={props.sb5dataObj.imgSrc} alt="props" />
        </div>

        <div className="poster-six">
          <h2>{props.sb5dataObj.title}</h2>
          <p>{props.sb5dataObj.description}</p>
          <a href={props.link}>Order now</a>
        </div>
      </div>
    </div>
  );
};

export default Store;
