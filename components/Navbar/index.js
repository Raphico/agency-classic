"use client"

import { navItems } from "@/components/constants"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { HiOutlineMenuAlt1 } from "react-icons/hi"
import { IoMdClose } from "react-icons/io"
import styles from "./navbar.module.css"

export default function Navbar() {
  const [nav, setNav] = useState(false)
  const toggleNav = () => setNav(prevNav => !prevNav)

  const mobileMenuProps = {
    size: 30,
    onClick: toggleNav,
    color: "#02073E",
    className: styles.mobile_menu_toggle
  }

  const [active, setActive] = useState("Home")

  const navElements = navItems.map(({ name, link }) => 
    <li key={name}>
      <Link
        className={`${styles.nav_link} text-dark-blue fs-300 ${
          active === name ? styles.active : ""
        }`} 
        href={link} 
        scroll
        onClick={() => {
          setActive(name)
          toggleNav()
        }}
      >
        {name}
      </Link>
    </li>
  )

  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, []) 

  return ( 
    <nav className={`${styles.nav} ${isScrolled ? styles.scrolled : ""} bg-light`}>
      <div className={`${styles.nav_content} container flex`}>
        <Image 
          src="/startupLanding.svg"
          alt="startupLanding logo"
          width={195}
          height={40}
        />

        {
          nav ? 
          <IoMdClose {...mobileMenuProps} /> :
          <HiOutlineMenuAlt1 {...mobileMenuProps} />
        }

        <ul 
          id="primary-navigation"
          role="navigation"
          className={styles.primary_navigation}
          aria-expanded={nav}
        >
          {navElements}
        </ul>
      </div>
    </nav>
  )
}