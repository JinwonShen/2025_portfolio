'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import styles from './EmailForm.module.scss'

export default function EmailForm() {
  const [showForm, setShowForm] = useState(false)
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('입력된 이메일:', email)
    router.push('/success') // 원하는 경로로 이동
  }

  return (
    <div className={styles.wrapper}>
      {/* SVG 아이콘 */}
      <button
      onClick={() => setShowForm(!showForm)} 
      onKeyDown={(e) => {
        if(e.key === "Enter" || e.key === ' ') {
          setShowForm(!showForm)
        }
      }}
      type='button'
      tabIndex={0}
      className={styles.iconWrapper}>
        <svg className={styles.icon} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Mail</title><path d="M15.61 12c0 1.99-1.62 3.61-3.61 3.61-1.99 0-3.61-1.62-3.61-3.61 0-1.99 1.62-3.61 3.61-3.61 1.99 0 3.61 1.62 3.61 3.61M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12c2.424 0 4.761-.722 6.76-2.087l.034-.024-1.617-1.879-.027.017A9.494 9.494 0 0 1 12 21.54c-5.26 0-9.54-4.28-9.54-9.54 0-5.26 4.28-9.54 9.54-9.54 5.26 0 9.54 4.28 9.54 9.54a9.63 9.63 0 0 1-.225 2.05c-.301 1.239-1.169 1.618-1.82 1.568-.654-.053-1.42-.52-1.426-1.661V12A6.076 6.076 0 0 0 12 5.93 6.076 6.076 0 0 0 5.93 12 6.076 6.076 0 0 0 12 18.07a6.02 6.02 0 0 0 4.3-1.792 3.9 3.9 0 0 0 3.32 1.805c.874 0 1.74-.292 2.437-.821.719-.547 1.256-1.336 1.553-2.285.047-.154.135-.504.135-.507l.002-.013c.175-.76.253-1.52.253-2.457 0-6.617-5.383-12-12-12"/></svg>
      </button>

      {/* 이메일 폼 */}
      {showForm && (
        <form onSubmit={handleSubmit} className={styles.form}>
          {/* 닫기 버튼 */}
          <button
            type="button"
            className={styles.closeButton}
            onClick={() => setShowForm(false)}
          >
            <svg className={styles.icon} width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>closed</title>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M10.9393 12L6.9696 15.9697L8.03026 17.0304L12 13.0607L15.9697 17.0304L17.0304 15.9697L13.0607 12L17.0303 8.03039L15.9696 6.96973L12 10.9393L8.03038 6.96973L6.96972 8.03039L10.9393 12Z" fill="#080341"/>
            </svg>
          </button>
          
          <label htmlFor="name" className={styles.label}>
            이름
          </label>
          <input
            id="name"
            type="text"
            placeholder="이름을 입력하세요"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className={styles.input}
          />

          <label htmlFor="email" className={styles.label}>
            이메일 주소
          </label>
          <input
            id="email"
            type="email"
            placeholder="example@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={styles.input}
          />

          <label htmlFor="message" className={styles.label}>
            메시지
          </label>
          <textarea
            id="message"
            placeholder="메시지를 입력하세요"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className={styles.textarea}
          />

          <button type="submit" className={styles.submitButton}>
            제 출
          </button>
        </form>
      )}
    </div>
  )
}