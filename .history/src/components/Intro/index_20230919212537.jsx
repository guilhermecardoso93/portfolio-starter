import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

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
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="/" target="_blank">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="/" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
      <div className="intro-right">
        <span>ofomfoamofpma</span>
      </div>
    </div>
  );
}
