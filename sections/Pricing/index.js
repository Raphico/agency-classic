"use client"

import { useState } from "react"
import styles from "./pricing.module.css"
import { plansPricing } from "@/components/constants"
import Image from "next/image"
import { HiOutlineArrowNarrowRight } from "react-icons/hi"

export default function Pricing() {
  const [active, setActive] = useState("monthly")

  const pricingElements = plansPricing.map(pricing => {
    if (pricing.type !== active) return;
    return (
      <div key={pricing.id}>
        <Image 
          src={pricing.icon}
          alt=""
          width={72}
          height={64}
        />

        <p className="fs-501 fw-700 text-dark-slate-blue">
          {pricing.for}
        </p>

        {pricing.plans.map(({ id, ticked, plan }) => 
          <p key={id} className="flex text-slate-gray">
            <Image 
              src={ticked ? "/ticked.svg" : "/not-ticked.svg"}
              alt="part of the plan"
              width={20}
              height={20}
            />
            {plan}
          </p>
        )}

        <div className="flex">
          <div>
            <p className="text-slate-gray">Starting from</p>
            <p className="fs-501 text-dark-magenta">
              {pricing.price}<span className="fs-500">/mo</span>
            </p>
          </div>
          <HiOutlineArrowNarrowRight size={20} color="slate blue" />
        </div>
      </div>
    )
  })

  return (
    <div className="flow">
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

      <div className={`${styles.plans_pricing}`}>
        {pricingElements}
      </div>
    </div>
  )
}