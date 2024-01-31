'use client'
import { useEffect, useState } from 'react'
import styles from './PageTopButton.module.css'

export const PageTopButton = () => {
  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop
    console.log(scrolled)
    if (scrolled > 100) {
      setVisible(true)
    } else if (scrolled <= 100) {
      setVisible(false)
    }
  }

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible)
    return () => {
      window.removeEventListener('scroll', toggleVisible)
      //   window.removeEventListener('click', handleClick)
    }
  }, [])

  return (
    <>
      <button
        className={`${styles['page-top-btn']} ${visible ? styles['show'] : ''}`}
        onClick={handleClick}
      >
        <i className="fas fa-arrow-up"></i>
      </button>
    </>
  )
}
