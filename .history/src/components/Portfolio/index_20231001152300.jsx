import { Card } from "./Card";
import { projects } from "../../data/infos";

import "./styles.css";

export function Portfolio() {
  return (
    <div className="port-wrapper">
      <span className="port-subtitle"> Projetos Recentes </span>
      <span className="port-title"> Portfolio </span>

      <div className="card-wrapper">
        {projects.map((project, index) => (
          <Card key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </div>
  );
}
