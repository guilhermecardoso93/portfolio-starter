import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";

import Resume from "./curriculo.pdf";
import "./styles.css";

export function Services() {
  return (
    <div className="services">
      <div className="services-left">
        <div className="awesome">
          <span>My Awesome App</span>
          <span>Services</span>
          <span>
            Lorem ispum is simpley dummy text of printing of printing Lorem
            <br />
            ispum is simpley dummy text of printing
          </span>
          <a href={Resume} download>
            <button className="button s-button">Download CV</button>
          </a>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
          <div
            className="blur s-blur2"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>

      <div className="services-right">
        <div className="cards">right siswe</div>
      </div>
    </div>
  );
}
