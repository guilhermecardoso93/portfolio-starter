import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

function Card() {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[250px]">
          <img
            src={img}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl bg-zinc-800"
          />

          <div className="absolute inset-0 flex flex-col justify-end m-3 card-img_hover gap-3">
            <div
              onClick={() => window.open(repo, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
            <div
              onClick={() => window.open(url, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={website}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{title}</h3>
        </div>
      </Tilt>
    </motion.div>
  );
}
