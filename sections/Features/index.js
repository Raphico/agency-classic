import { Feature } from "@/components/components"
import { features } from "@/components/constants"
import styles from "./features.module.css"

export default function Features() {
  const featureElements = features.map(({ img, name, description }) =>
    <Feature 
      key={name} 
      img={img} 
      name={name} 
      description={description} 
    />
  )

  return (
    <div name="features" className="container mb">
      <div>
        <h3 className="fs-600 fw-700 text-dark-slate-blue text-center">
          Features of the product
        </h3>
        <p className="text-gray text-center">
          Features are highlighted here
        </p>
      </div>

      <div className={`${styles.features} grid`}>
        {featureElements}
      </div>
    </div>
  )
}