import { Swiper, SwiperSlide } from "swiper/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { projects } from "../../data/infos";
import HouseIcon from "../../img/house-solid.svg";
import "swiper/css";
import "./styles.css";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

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
                      icon={faHouse}
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
