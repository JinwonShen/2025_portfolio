'use client'

import styles from './GuestBook.module.scss'
import { useState, useEffect } from 'react'
import { collection, addDoc, getDocs, Timestamp } from 'firebase/firestore'
import { db } from '../../lib/firebase'

type Guest = {
  id: string
  name: string
  message: string
  date: string
}

const loadGuestbook = async (setGuests: React.Dispatch<React.SetStateAction<Guest[]>>) => {
  const snapshot = await getDocs(collection(db, 'guestbook'))
  const data: Guest[] = snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  })) as Guest[]

  const formatted = data.map(d => {
    const rawDate = d.date as unknown
    return {
      ...d,
      date: rawDate instanceof Timestamp
        ? rawDate.toDate().toISOString().split('T')[0]
        : String(rawDate),
    }
  }) as Guest[]

  setGuests(formatted.reverse()) // 최신순으로 정렬
}

export default function GuestBook() {
  const [guests, setGuests] = useState<Guest[]>([])
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name || !message) return

    const docRef = await addDoc(collection(db, 'guestbook'), {
      name,
      message,
      date: Timestamp.now(),
    })
    console.log("Document written with ID: ", docRef.id)

    setName('')
    setMessage('')
    loadGuestbook(setGuests)
  }

  useEffect(() => {
    loadGuestbook(setGuests)
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