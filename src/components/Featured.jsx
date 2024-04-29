import React from "react";
import HomepageImage from "../assets/stranger-things.jpg";
import { BiSolidRightArrow } from "react-icons/bi";
import { IoInformationCircleOutline } from "react-icons/io5";

const Featured = () => {
  return (
    <>
      <div className="featuredPicturePage">
        <div className="featuredMovie">
          <img src={HomepageImage} alt="Stranger Things Image" />
        </div>
        <div className="featuredText">
          <div className="title">
            <h1>Stranger Things</h1>
          </div>
          <div className="description">
            <p>
              When a young boy vanishes, a small town uncovers a mystery
              involving secret experiments, terrifying supernatural forces and
              one strange little girl.
            </p>
          </div>
          <div className="cta">
            <div className="playBtn">
              <button className="buttonIcon">
                <BiSolidRightArrow />
                <h1>Play</h1>
              </button>
            </div>
            <div className="infoBtn">
              <button className="buttonIcon">
                <IoInformationCircleOutline />
                <h1>More Info</h1>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Featured;
