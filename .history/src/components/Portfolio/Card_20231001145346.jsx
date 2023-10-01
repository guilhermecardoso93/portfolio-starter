import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { fadeIn, textVariant } from "../../utils/motion";

import "./styles.css";

export function Card({ index, title, repo, img, url }) {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="tilt-1"
      >
        <div className="tilt-image">
          <img
            src={img}
            alt="project_image"
          />

          <div className="">
            <div
              onClick={() => window.open(repo, "_blank")}
              className=""
            >
              <FontAwesomeIcon
                icon={faGithub}
                style={{ color: "#070bf0" }}
                size="2xl"
              />
            </div>
            <div
              onClick={() => window.open(url, "_blank")}
              className=""
            >
              <FontAwesomeIcon
                icon={faHouse}
                style={{ color: "#070bf0" }}
                size="2xl"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="">{title}</h3>
        </div>
      </Tilt>
    </motion.div>
  );
}
