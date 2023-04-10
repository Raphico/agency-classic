import Image from "next/image";
import styles from "./footer.module.css"

export default function Footer() {
  return (
    <div className={`${styles.footer} bg-light`}>
      <div className="container">
        <div className={`${styles.logo} flex`}>
          <Image
            src="/startupLanding.svg"
            alt="startupLanding logo"
            width={195}
            height={40}
          />
        </div>

        <p className="text-center fs-300">Copyright by 2019 Redq, Inc</p>
      </div>
    </div>
  )
}