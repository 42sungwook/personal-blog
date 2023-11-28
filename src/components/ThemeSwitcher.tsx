'use client'

import { useTheme } from 'next-themes'
import LightThemeButton from '../assets/sun.svg'
import DarkThemeButton from '../assets/moon.svg'
import { useEffect, useState } from 'react'

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleThemeChange = () => {
    if (theme === 'light') setTheme('dark')
    else setTheme('light')
  }

  if (!mounted) return null

  return (
    <div
      className="bg-none"
      onClick={handleThemeChange}
    >
      {theme === 'light' ? (
        <LightThemeButton
          width={30}
          height={30}
        />
      ) : (
        <DarkThemeButton
          width={30}
          height={30}
          fill="white"
        />
      )}
    </div>
  )
}
