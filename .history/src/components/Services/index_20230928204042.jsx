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
          <div
            className="blur s-blur1"
            style={{ background: "#63bcf2" }}
          ></div>
          <div
            className="blur s-blur2"
            style={{ background: "#63bcf2" }}
          ></div>
        </div>
      </div>

      <div className="services-right">
        <div className="cards">
          <Card />
        </div>
      </div>
    </div>
  );
}
