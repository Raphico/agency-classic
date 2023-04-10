"use client";

import { testimonials } from "@/components/constants"
import styles from "./testimonials.module.css"
import { Testimonial } from "@/components/components"
import { HiOutlineArrowNarrowRight, HiOutlineArrowNarrowLeft } from "react-icons/hi"

export default function Testimonials() {
  const testimonialElements = testimonials.map(({
    testimonial, name, at, avatar
  }) => 
      <Testimonial
        key={testimonial}
        testimonial={testimonial}
        name={name}
        at={at}
        avatar={avatar}
      />
    )

  return (
    <div name="testimonials" className={`${styles.testimonials_section} bg-light mb`}>
      <h2 className="fs-600 fw-700 text-dark-slate-blue text-center">
        What client say about us
      </h2>
      <p className="text-gray text-center">Customer testimonials</p>

      <div className={`${styles.testimonials} grid`}>
        {testimonialElements}
      </div>

      <div className={`${styles.arrows} flex`}>
        <HiOutlineArrowNarrowLeft size={30} color="gray" />
        <HiOutlineArrowNarrowRight size={30} color="gray" />
      </div>
    </div>
  )
}
