import React from "react";
import "./_video.scss";
import { AiFillEye } from "react-icons/ai";

function Video() {
  return (
    <div className="video">
      <div className="video__top">
        <img
          src="https://i.ytimg.com/vi/TDLc9AWEcFA/hqdefault.jpg?s…AFwAcABBg==&rs=AOn4CLBzKUNE1TYUO2s04eV_EHeH9E7JRg"
          alt=""
        />
        <span className="video__top__duration">05.43</span>
      </div>
      <div className="video__title">
        Create app in 5 minutes #made by Chintu
      </div>
      <div className="video__details">
        <span>
          <AiFillEye /> 5M Views •
        </span>
        <span>5 days ago</span>
      </div>
      <div className="video__channel">
        <img
          src="https://i.ytimg.com/vi/Z5KD3WTrI2A/hqdefault.jpg?s…AFwAcABBg==&rs=AOn4CLB0MD8P8xrp7tfIUsKYalbZBNeKNg"
          alt=""
        />
        <p>Rainbow Hat jr</p>
      </div>
    </div>
  );
}

export default Video;
