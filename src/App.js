import React from "react";
import Header from "./SbHeader";
import "./App.css";
import sbdata from "./sbdata";
import sb2data from "./sbdata2";
import sb3data from "./sbdata3";
import sb4data from "./sbdata4";
import sb5data from "./sbdata5";
import sb6data from "./sbdata6";
import Store from "./SbStore";
import Store2 from "./SbStore2";
import Store3 from "./SbStore3";
import Store4 from "./SbStore4";
import Store5 from "./SbStore5";
import Store6 from "./SbStore6";
import SbFooter from "./SbFooter";

const App = () => {
  const headerProps = {
    logoSrc: "./images/sblogo.png",
    menuItems: ["MENU", "REWARDS", "GIFT CARDS"],
    showLocationIcon: true,
    findStoreText: "Find a store",
    signInLink: "#",
    joinNowLink: "#",
  };

  return (
    <div>
      <Header {...headerProps} />
      {sbdata.map((item) => (
        <Store sbdataObj={item} />
      ))}
      {sb2data.map((item) => (
        <Store2 sb2dataObj={item} />
      ))}
      {sb3data.map((item) => (
        <Store3 sb3dataObj={item} />
      ))}
      {sb4data.map((item) => (
        <Store4 sb4dataObj={item} />
      ))}
      {sb5data.map((item) => (
        <Store5 sb5dataObj={item} />
      ))}
      {sb6data.map((item) => (
        <Store6 sb6dataObj={item} />
      ))}
      <SbFooter />
    </div>
  );
};

export default App;
