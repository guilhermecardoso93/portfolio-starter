import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";

import Resume from "./curriculo.pdf";
import "./styles.css";
import { Card } from "../Cards";

export function Services() {
  return (
    <div className="services">
      <div className="services-left">
        <div className="awesome">
          <span>My Awesome App</span>
          <span>Services</span>
          <spane>
            Lorem ispum is simpley dummy text of printing of printing Lorem
            <br />
            ispum is simpley dummy text of printing
          </spane>
          <a href={Resume} download>
            <button className="button s-button">Download CV</button>
          </a>
          <div className="blur s-blur1" style={{ background: "#63bcf2" }}></div>
          <div className="blur s-blur2" style={{ background: "#63bcf2" }}></div>
        </div>
      </div>

      <div className="services-right">
        <div className="cards">
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"Figma, Sketch, Photoshop, Adobe Illustrator, Adobe xd"}
          />
        </div>
        {/* second card */}
        <div>
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"Html, Css, JavaScript, React, Nodejs, Express"}
          />
        </div>
        {/* 3rd */}
        <div>
          <Card
            emoji={Humble}
            heading={"UI/UX"}
            detail={
              "Lorem ispum dummy text are usually use in section where we need some random text"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
}
