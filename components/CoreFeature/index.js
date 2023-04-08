import Image from "next/image";
import styles from "./coreFeature.module.css"

export default function CoreFeature({ img, name, description }) {
  return (
    <div className={`${styles.core_feature} flex`}>
      <Image 
        src={img}
        alt=""
        width={60}
        height={60}
      />

      <div>
        <p className="fs-500 fw-700 text-dark-slate-blue">
          {name}
        </p>
        <p>{description}</p>
      </div>
    </div>
  )
}