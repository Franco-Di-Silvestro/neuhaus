"use client"

import { useEffect } from "react"

export function ScrollToHash() {
  useEffect(() => {
    const scrollToHash = () => {
      if (window.location.hash) {
        setTimeout(() => {
          const element = document.querySelector(window.location.hash)
          if (element) element.scrollIntoView({ behavior: "smooth" })
        }, 100)
      }
    }

    scrollToHash()
    window.addEventListener("hashchange", scrollToHash)
    return () => window.removeEventListener("hashchange", scrollToHash)
  }, [])

  return null
}
