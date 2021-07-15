import React from "react";
import meanMug from "../../public/mean_mug_cropped.jpg";

export default function Intro() {
  return (
    <div className="intro">
      <div className="intro-description">
        <img className="profile-picture" src={meanMug} />
        <div className="profile-description">
          <div>Gareth Rogers</div>
          <div>Full-Stack Software Engineer</div>
          <div>Tallahassee, FL</div>
        </div>
      </div>
    </div>
  );
}
