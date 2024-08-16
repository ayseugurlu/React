import React from "react";
import DisplaySSS from "./styles/DisplaySSS";
import ImageSSS, { LOGOSSS } from "./styles/ImageSSS";

const Header = () => {
  return (
    <div>
      <DisplaySSS>
        <LOGOSSS src="./images/logo.png" alt="" />
        <div>
          <button>Apply Courses</button>
          <button>Talk to Adviser</button>
        </div>
      </DisplaySSS>

      <DisplaySSS>
        <div>
          <h1>The IT Career of Your Dreams Starts Here</h1>
          <p>
            Clarusway is a leading international software Bootcamp. Join a micro
            class online with other trainees and learn coding skills with a
            highly-skilled instructor.
          </p>
          <button>New Career</button>
          <button>Details</button>
        </div>

        <ImageSSS src="./images/hero.jpg" alt="" />
      </DisplaySSS>
    </div>
  );
};

export default Header;