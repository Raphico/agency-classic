import Image from "next/image"
import styles from "./testimonial.module.css"

export default function Testimonial({ testimonial, name, at, avatar }) {
  return (
    <div className={`${styles.testimonial} flow`}>
      <p>{testimonial}</p>
      <div className="flex">
        <Image 
          src={`/testimonials${avatar}`}
          alt={`${name} avatar`}
          width={45}
          height={45}
        />
        
        <div>
          <p className="fs-300 text-slate-gray">{name}</p>
          <p className="fs-300 text-neon-blue">{at}</p>
        </div>
      </div>
    </div>
  )
}