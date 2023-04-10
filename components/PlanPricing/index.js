"use client"

import Image from "next/image"
import { HiOutlineArrowNarrowRight } from "react-icons/hi"
import styles from "./planPricing.module.css"
import { motion } from "framer-motion"
import { pricingAnimation } from "@/components/utils/motion"

export default function PlanPricing({ icon, name, plans, price, recommended }) {
  return (
    <motion.div className={`${styles.plan_pricing} ${
      recommended ? styles.recommended : ""
    }`}
      {...pricingAnimation}
    >
      <div className={`${styles.plan_content} flow`}>
        <Image 
          src={icon}
          alt=""
          width={72}
          height={64}
        />

        <p className={`${styles.plan_for} fs-501 fw-700 text-dark-slate-blue`}>
          {name}
        </p>

        {plans.map(({ id, ticked, plan }) => 
          <p key={id} className={`${styles.plan} flex fs-300 text-slate-gray`}>
            <Image 
              src={ticked ? "/ticked.svg" : "/not-ticked.svg"}
              alt="part of the plan"
              width={20}
              height={20}
            />
            {plan}
          </p>
        )}
      </div>

      <div className={`${styles.price} flex`}>
        <div>
          <p className="text-slate-gray">Starting from</p>
          <p className="fs-501 text-dark-magenta">
            {price}<span className="fs-500">/mo</span>
          </p>
        </div>
        <HiOutlineArrowNarrowRight size={20} color="slate blue" />
      </div>
    </motion.div>
  )
}