"use client"

import { useState } from "react"
import styles from "./pricing.module.css"
import { plansPricing } from "@/components/constants"
import { PlanPricing } from "@/components/components"

export default function Pricing() {
  const [active, setActive] = useState("monthly")

  const pricingElements = plansPricing.map(pricing => {
    if (pricing.type !== active) return;
    return (
      <PlanPricing
        key={pricing.id}
        name={pricing.name}
        plans={pricing.plans}
        price={pricing.price}
        recommended={pricing.recommended}
        icon={pricing.icon}
      />
    )
  })

  return (
    <div name="pricing" className={`${styles.pricing} mb`}>
      <div className="text-center">
        <h2 className="fs-600 fw-700 text-dark-slate-blue">
          What deal suit you perfectly?
        </h2>
        <p className="text-gray">Meet our pricing plan</p>
      </div>

      <div className={`${styles.plans} flex`}>
        <button 
          onClick={() => setActive("monthly")}
          className={`${styles.plan} 
          ${active === "monthly" ? styles.active : ""}`}
        >
            Monthly Plan
        </button>
        <button 
          onClick={() => setActive("annual")}
          className={`${styles.plan} 
          ${active === "annual" ? styles.active : ""}`}
        >
            Annual Plan
        </button>
      </div>

      <div className={`${styles.plan_pricing} grid`}>
        {pricingElements}
      </div>
    </div>
  )
}