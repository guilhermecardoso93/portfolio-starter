import { Card } from "./Card";
import { projects } from "../../data/infos";

import "./styles.css";

export function Portfolio() {
  return (
    <div className="port-wrapper">
      <span className="port-subtitle"> Projetos Recentes </span>
      <span className="port-title"> Portfolio </span>
      <div className="blur s-blur1" style={{ background: "#63bcf2" }}></div>
          <div className="blur s-blur2" style={{ background: "#63bcf2" }}></div>
      <div className="card-wrapper">
        {projects.map((project, index) => (
          <Card key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </div>
  );
}
