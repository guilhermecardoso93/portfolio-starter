import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";

import "./styles.css";

export function Services() {
  return (
    <div className="services">
      <div className="services-left">
        <div className="awesome">
          <span>My Awesome App</span>
          <span>Services</span>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga
            accusantium dolores dignissimos tempore quae debitis, quibusdam
            maxime animi omnis. <br /> Ratione corrupti deleniti cupiditate
            molestias deserunt facilis dignissimos ipsam perferendis eaque.
          </p>
          <button className='button cv-button'>Download CV</button>
        </div>
      </div>

      <div className="services-right">
        <div className="cards"></div>
      </div>
    </div>
  );
}
