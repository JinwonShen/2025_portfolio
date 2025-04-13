'use client'

import { useEffect, useRef } from 'react'
import styles from './AnimatedGradient.module.scss'


export const AnimatedGradient = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let pointer = { x: window.innerWidth / 2, y: window.innerHeight / 2 }

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', resize)
    resize()

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const gradient = ctx.createRadialGradient(pointer.x, pointer.y, 100, pointer.x, pointer.y, 600)
      gradient.addColorStop(0, '#bac8e0')
      gradient.addColorStop(1, '#6a85b6')

      /**
       * bac8e0
       * 6a85b6
      */

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      requestAnimationFrame(render)
    }

    render()

    window.addEventListener('mousemove', (e) => {
      pointer = { x: e.clientX, y: e.clientY }
    })

    return () => {
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.glassyOverlay} />
      <canvas ref={canvasRef} />
    </div>
  )
}