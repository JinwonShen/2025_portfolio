"use client";

import { Timestamp, addDoc, collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../lib/firebase";
import styles from "./GuestBook.module.scss";

type Guest = {
	id: string;
	name: string;
	message: string;
	date: string;
};

const loadGuestbook = async (
	setGuests: React.Dispatch<React.SetStateAction<Guest[]>>,
) => {
	const snapshot = await getDocs(collection(db, "guestbook"));
	const data: Guest[] = snapshot.docs.map((doc) => ({
		id: doc.id,
		...doc.data(),
	})) as Guest[];

	const formatted = data.map((d) => {
		const rawDate = d.date as unknown;
		return {
			...d,
			date:
				rawDate instanceof Timestamp
					? rawDate.toDate().toISOString().split("T")[0]
					: String(rawDate),
		};
	}) as Guest[];

	setGuests(formatted.reverse()); // 최신순으로 정렬
};

export default function GuestBook() {
	const [guests, setGuests] = useState<Guest[]>([]);
	const [name, setName] = useState("");
	const [message, setMessage] = useState("");

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!name || !message) return;

		const docRef = await addDoc(collection(db, "guestbook"), {
			name,
			message,
			date: Timestamp.now(),
		});
		console.log("Document written with ID: ", docRef.id);

		setName("");
		setMessage("");
		loadGuestbook(setGuests);
	};

	useEffect(() => {
		loadGuestbook(setGuests);
	}, []);

	return (
		<section
			className={styles.guestbook}
			id="guestbook"
			aria-labelledby="guestbook-heading"
		>
			<h2 id="guestbook-heading">GuestBook</h2>
			<p>어떤 이야기든 좋아요 !</p>

			<form
				onSubmit={handleSubmit}
				className={styles.formContainer}
				aria-label="방명록 작성 폼"
			>
				<label htmlFor="guest-name" className="sr-only">
					이름
				</label>
				<input
					id="guest-name"
					type="text"
					placeholder="Your Name"
					value={name}
					onChange={(e) => setName(e.target.value)}
					aria-required="true"
					aria-label="방문자 이름"
				/>
				<label htmlFor="guest-message" className="sr-only">
					메시지
				</label>
				<textarea
					id="guest-message"
					placeholder="Message"
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					aria-required="true"
					aria-label="방명록 메시지"
				/>
				<button type="submit" aria-label="방명록 작성 완료">
					Submit
				</button>
			</form>

			<ul className={styles.guestList} aria-label="방명록 목록">
				{guests.map((g) => (
					<li key={g.id} className={styles.card}>
						<h3>{g.name}</h3>
						<p>{g.message}</p>
						<div className={styles.meta}>
							<time dateTime={g.date}>{g.date}</time>
						</div>
					</li>
				))}
			</ul>
		</section>
	);
}
