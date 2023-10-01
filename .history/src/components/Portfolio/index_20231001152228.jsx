import { Swiper, SwiperSlide } from "swiper/react";
import { Card } from "./Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { projects } from "../../data/infos";
import "swiper/css";
import "./styles.css";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

export function Portfolio() {
  return (
    <div className="port-wrapper">
      <span className='port-title'> Projetos Recentes </span>
      <span className='port-subtitle'> Portfolio </span>

      <div className="card-wrapper">
        {projects.map((project, index) => (
          <Card key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </div>
  );
}
