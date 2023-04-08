import Image from "next/image";
import styles from "./techStacks.module.css"

export default function TechStacks() {
  return (
    <div className="container mb">
      <div className={`${styles.tech_stacks} grid`}>
        <div className={`${styles.info} flow`}>
          <div>
            <p className="fs-500 fw-700 text-dark-magenta">
              Behind the design
            </p>
            <h2 className="fs-600 fw-700 text-dark-slate-blue">
              Code that we used to built the website with integrating apps
            </h2>
          </div>

          <p>
            Get your tests delivered at let home collect sample from the victory of the managements that supplies best design system guidelines ever. Get your tests delivered at let home collect sample.
          </p>
        </div>

        <div className={`${styles.logos}`}>
          <Image 
            src="/logos.png"
            alt=""
            fill
          />
        </div>
      </div>
    </div>
  )
}