import Image from "next/image"
import styles from "./hero.module.css"

export default function Hero() {
  return (
    <div name="home" className={`${styles.hero} bg-light`}>
      <div className={`${styles.heading}`}>
        <Image 
          src="/startupLogo.svg"
          alt="startup logo"
          width={100}
          height={100}
        />

        <h1 className="fs-700 fw-700 text-center text-dark-blue">
          Create beautiful landing page in few minutes
        </h1>

        <Image 
          className={styles.puzzle}
          src="/puzzle.svg"
          alt=""
          width={42}
          height={47}
        />

        <Image 
          className={styles.chat_box}
          src="/chat.svg"
          alt=""
          width={53}
          height={43}
        />
      </div>

      <div className={`${styles.images}`}>
        <div className={`${styles.mockup}`}>
          <Image 
            className={styles.mockup_image}
            src="/mockup.png"
            alt="mockup"
            fill
          />

          <Image 
            className={styles.wavy}
            src="/wavy.png"
            alt=""
            width={194}
            height={122}
          />
          <Image 
            className={styles.dotted_patterns_1}
            src="/dotted-patterns.png"
            alt=""
            width={302}
            height={346}
          />
          <Image 
            className={styles.dotted_patterns_2}
            src="/dotted-patterns-2.png"
            alt=""
            width={170}
            height={170}
          />
          <Image 
            className={styles.line_1}
            src="/line-1.png"
            alt=""
            width={400}
            height={300}
          />
          <Image 
            className={styles.line_2}
            src="/line-2.png"
            alt=""
            width={280}
            height={500}
          />
        </div>
      </div>
    </div>
  )
}