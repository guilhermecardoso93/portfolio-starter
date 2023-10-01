import { Swiper, SwiperSlide } from "swiper/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faBrowser,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { projects } from "../../data/infos";
import "swiper/css";
import "./styles.css";

export function Portfolio() {
  return (
    <div className="port-wrapper">
      <span> Projetos Recentes </span>
      <span> Portfolio </span>

      <Swiper>
        <SwiperSlide>
          {projects.map((proj) => {
            return (
              <div key={proj.url}>
                <img src={proj.img} alt={proj.title} />
                <span>{proj.title}</span>
                <div>
                  <a href={proj.url} target="_blank">
                    <FontAwesomeIcon
                      icon={faBrowser}
                      style={{ color: "#070bf0" }}
                      size="2xl"
                    />
                  </a>
                  <a href={proj.repo} target="_blank">
                    <FontAwesomeIcon
                      icon={faGithub}
                      style={{ color: "#070bf0" }}
                      size="2xl"
                    />
                  </a>
                </div>
              </div>
            );
          })}
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
