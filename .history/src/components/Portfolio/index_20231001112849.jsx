import { Swiper, SwiperSlide } from 'swiper/react'
import { projects } from "../../data/infos";
import 'swiper/css';
import './styles.css'

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
                  <a href={proj.url} target="_blank">{proj.url}</a>
                  <a href={proj.repo} target="_blank">{proj.repo}</a>
                </div>
              </div>
            )
          })}
        </SwiperSlide>
      </Swiper>
    </div>
  )
}