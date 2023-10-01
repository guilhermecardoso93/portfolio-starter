import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";

import "./styles.css";

export function Works() {
  return (
    <div className="works-wrapper">
      <div className="works-left">
        <div className="awesome">
          <span>Works</span>
          <span>Services</span>
          <span>
            Lorem ispum is simpley dummy text of printing of printing Lorem
            <br />
            ispum is simpley dummy text of printing
          </span>
          <div className="blur s-blur1" style={{ background: "#63bcf2" }}></div>
        </div>
      </div>
      <div className="work-right"></div>
    </div>
  );
}
