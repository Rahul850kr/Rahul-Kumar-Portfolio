import React from "react";
import useWindowDimensions from "../utils/dimensionHelper";

const IconCard = ({ src, skillName }) => {
  const { width } = useWindowDimensions();

  let smallImgContainer;
  if (width < 577) {
    smallImgContainer = "smallImgContainer";
  }

  return (
    <div className={`${smallImgContainer}`}>
      <div
        className="d-flex justify-content-center align-items-center m-2  skillWraper"
        style={{
          width: 190,
          height: 190,
        }}
        // style={{ background: `url(${src}) no-repeat center center`, width: 150, height: 150 }}
      >
        {/* <center> */}

        <img
          className="img-fluid skillsImg extraSmallSkillImg"
          src={src}
          alt="icon"
          title={skillName}
        />
        <p className="skillName">{skillName}</p>
        {/* </center> */}
      </div>
    </div>
  );
};

export default IconCard;
