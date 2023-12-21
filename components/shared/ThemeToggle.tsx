'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { DarkModeSwitch } from 'react-toggle-dark-mode'

function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <DarkModeSwitch
      checked={resolvedTheme === 'dark'}
      onChange={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      size={32}
    />
  )
}

export default ThemeToggle
