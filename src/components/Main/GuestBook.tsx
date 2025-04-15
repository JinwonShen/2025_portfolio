'use client'

import styles from './GuestBook.module.scss'
import { useState, useEffect } from 'react'

type Guest = {
  id: string
  name: string
  message: string
  date: string
}

export default function GuestBook() {
  const [guests, setGuests] = useState<Guest[]>([])
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if(!name || !message) return

    const newGuest: Guest = {
      id: Date.now().toString(),
      name,
      message,
      date: new Date().toISOString().split('T')[0]
    }

    const updatedGuests = [newGuest, ...guests]
    setGuests(updatedGuests)
    localStorage.setItem('guestbook', JSON.stringify(updatedGuests))

    setName('')
    setMessage('')
  }

  useEffect(() => {
    const stored = localStorage.getItem('guestbook')
    if (stored) setGuests(JSON.parse(stored))
  }, [])

  return (
    <section className={styles.guestbook} id="guestbook">
      <h1>GuestBook</h1>
      <p>어떤 이야기든 좋아요 !</p>

      <form onSubmit={handleSubmit} className={styles.formContainer}>
        <input 
          type="text" 
          placeholder="Your Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
        <textarea 
          placeholder="Message" 
          value={message} 
          onChange={(e) => setMessage(e.target.value)} 
        />
        <button type="submit">Submit</button>
      </form>

      <div className={styles.guestList}>
        {guests.map((g) => (
          <div key={g.id} className={styles.card}>
            <h3>{g.name}</h3>
            <p>{g.message}</p>
            <div className={styles.meta}>
              <span>{g.date}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}