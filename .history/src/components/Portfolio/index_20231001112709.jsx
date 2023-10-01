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
                  <span>{proj.url}</span>
                  <span>{proj.repo}</span>
                </div>
              </div>
            )
          })}
        </SwiperSlide>
      </Swiper>
    </div>
  )
}