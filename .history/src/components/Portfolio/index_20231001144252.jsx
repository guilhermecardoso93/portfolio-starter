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
    <div className="port-wrappper">
      <span> Projetos Recentes </span>
      <span> Portfolio </span>

      <div className="">
        {projects.map((project, index) => (
          <Card key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </div>
  );
}
