"use client"

import { BiPlus, BiMinus } from "react-icons/bi"
import styles from "./FrequentlyAskedQuestion.module.css"
import { AnimatePresence, motion } from "framer-motion"
import { QAanimation } from "@/components/utils/motion"

export default function FrequentlyAskedQuestion(
    { question, answer, id, active, handleActive }
  ) {
  return (
    <div className={styles.frequentlyAskedQuestion}>
      <div 
        className={`${styles.question} flex text-dark-slate-blue fw-700`}
        onClick={handleActive}
      >
        {question}
        {active === id ? 
          <BiMinus size={25} color="slate blue" /> 
          : <BiPlus size={25} color="slate blue" />
        }
      </div>

      <AnimatePresence initial={false}>
        {active === id && (
          <motion.div
            {...QAanimation}
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}