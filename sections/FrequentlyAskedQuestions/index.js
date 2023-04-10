"use client"

import { frequentlyAskedQuestions } from "@/components/constants"
import styles from "./frequentlyAskedQuestions.module.css"
import { FrequentlyAskedQuestion } from "@/components/components"
import { useState } from "react"

export default function FrequentlyAskedQuestions() {
  const [active, setActive] = useState(null)

  function handleActive(clicked) {
    if (active === clicked) {
      setActive(null)
    } else {
      setActive(clicked)
    }
  }

  const frequentlyAskedQuestionElements = frequentlyAskedQuestions.map(
    ({ id, question, answer }) => 
      <FrequentlyAskedQuestion 
        key={id} 
        id={id}
        question={question} 
        answer={answer} 
        handleActive={() => handleActive(id)}
        active={active}
      />
  )

  return (
    <div name="q-a" className="mb">
      <div className={`${styles.heading}`}>
        <h2 className="fs-600 fw-700 text-dark-slate-blue text-center">
          Frequently Asked Questions
        </h2>
        <p className="text-gray text-center">
          Don&#39;t trust us? Trust our customer
        </p>
      </div>

      <div className={`${styles.frequentlyAskedQuestions} grid`}>
        {frequentlyAskedQuestionElements}
      </div>
    </div>
  )
}