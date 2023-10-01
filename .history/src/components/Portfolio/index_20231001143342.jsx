import { Swiper, SwiperSlide } from "swiper/react";
import { Card } from './Card'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { projects } from "../../data/infos";
import "swiper/css";
import "./styles.css";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

export function Portfolio() {
  return (
    <div className="port-wrappper">
      <span> Projetos Recentes </span>
      <span> Portfolio </span>

      <Swiper>
        {projects.map((proj) => {
          return (
            <SwiperSlide>
              <div key={proj.url}>
                <img src={proj.img} alt={proj.title} />
                <span>{proj.title}</span>
                <div>
                  <a href={proj.url} target="_blank" rel="noreferrer">
                    <FontAwesomeIcon
                      icon={faHouse}
                      style={{ color: "#070bf0" }}
                      size="2xl"
                    />
                  </a>
                  <a href={proj.repo} target="_blank" rel="noreferrer">
                    <FontAwesomeIcon
                      icon={faGithub}
                      style={{ color: "#070bf0" }}
                      size="2xl"
                    />
                  </a>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      {projects.map((proj) => {
        return (
          <div className="mt-10 flex flex-wrap gap-7 justify-center">
            {projects.map((project, index) => (
              <Card
                key={`project-${index}`}
                index={index}
                {...project}
              />
            ))}
          </div>
        );
      })}
    </div>
  );
}
