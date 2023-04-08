import Image from "next/image"
import styles from "./Feature.module.css"
import { MdOutlineNavigateNext } from "react-icons/md"
import Link from "next/link"

export default function Feature({ img, name, description }) {
  return (
    <div className={`${styles.feature} grid`}>
      <Image
        src={img}
        alt=""
        width={88}
        height={88}
      />
      <div className={`${styles.feature_content} flex`}>
        <p className="fs-500 fw-700 text-dark-slate-blue">
          {name}
        </p>
        <p>{description}</p>
        <Link 
          href="#" 
          className={`${styles.learn_more} text-neon-blue flex`}
        >
          Learn more <MdOutlineNavigateNext color="neon blue" size={17} />
        </Link>
      </div>
    </div>
  )
}