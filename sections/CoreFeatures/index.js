import { CoreFeature } from "@/components/components";
import { coreFeatures } from "@/components/constants";
import Image from "next/image";
import styles from "./coreFeatures.module.css"

export default function CoreFeatures() {
  const coreFeatureElements = coreFeatures.map(({ img, name, description }) =>
    <CoreFeature key={name} img={img} name={name} description={description} />
  )

  return (
    <div className="container mb">
      <div className={`${styles.coreFeatures} grid`}>
        <div className={styles.browser}>
          <Image 
            src="/browser.png"
            alt=""
            fill
          />
        </div>

        <div>
          <div className={`${styles.heading}`}>
            <p className="fs-500 fw-700 text-dark-magenta">
              Core features
            </p>
            <h2 className="fs-600 fw-700 text-dark-slate-blue">
              Smart Jackpots that you may love this
            </h2>
          </div>

          <div className={`${styles.features} grid`}>
            {coreFeatureElements}
          </div>
        </div>
      </div>
    </div>
  )
}