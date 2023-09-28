import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FloatingDiv } from '../FloatingDiv'

import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import Boy from '../../img/boy.png'
import thumbup from '../../img/thumbup.png'

import "./styles.css";

export function Intro() {
  return (
    <div className="intro-wrapper">
      <div className="intro-left">
        <div className="intro-n">
          <span>Oi! Sou o</span>
          <span>Guilherme</span>
          <span>
            Front-end Development, dashfiodashfiahsdfiuhdklfhas ndfhaksldçhfklas
            dhfklashdfkahsdkfhasdkl
          </span>
        </div>
        <button className="intro-button button">Contrata-me</button>
        <div className="intro-icons">
          <a href="/" target="_blank">
            <FontAwesomeIcon
              icon={faGithub}
              style={{ color: "#070bf0" }}
              size="2xl"
            />
          </a>
          <a href="/" target="_blank">
            <FontAwesomeIcon
              icon={faInstagram}
              style={{ color: "#070bf0" }}
              size="2xl"
            />
          </a>
          <a href="/" target="_blank">
            <FontAwesomeIcon
              icon={faLinkedin}
              style={{ color: "#070bf0" }}
              size="2xl"
            />
          </a>
        </div>
      </div>
      <div className="intro-right">
        <img src={Vector1} alt="" srcset="" />
        <img src={Vector2} alt="" srcset="" />
        <img src={Boy} alt="" srcset="" />
        <div>
          <FloatingDiv 
            text1='Guilherme'
            text2='Cardoso'
            img={thumbup}
          />
        </div>
      </div>
    </div>
  );
}
