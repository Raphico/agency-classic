import Image from "next/image"
import styles from "./Feature.module.css"

export default function Feature({ img, name, description }) {
  return (
    <div className={`${styles.feature} flex`}>
      <Image
        src={img}
        alt=""
        width={88}
        height={88}
      />
      <div className={`${styles.feature_content}`}>
        <p className="fs-500 fw-700 text-dark-slate-blue">
          {name}
        </p>
        <p>{description}</p>
      </div>
    </div>
  )
}