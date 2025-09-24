import React, { useState, useEffect } from "react";
import styles from "./Guestbook.module.scss";
import { db } from "../firebaseConfig";
import {
  collection,
  addDoc,
  onSnapshot,
  deleteDoc,
  doc,
  serverTimestamp,
  query,
  orderBy,
} from "firebase/firestore";
import PasswordModal from "./PasswordModal"; // Import the modal component

const Guestbook = () => {
  const [messages, setMessages] = useState([]);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  // State for modal management
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentItemToDelete, setCurrentItemToDelete] = useState(null);

  useEffect(() => {
    const q = query(collection(db, "guestbook"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messagesData = [];
      querySnapshot.forEach((doc) => {
        messagesData.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messagesData);
    });

    return () => unsubscribe();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !message || !password) {
      alert("이름, 비밀번호, 메시지를 모두 입력해주세요.");
      return;
    }
    try {
      await addDoc(collection(db, "guestbook"), {
        name: name,
        message: message,
        password: password, // NOTE: Storing passwords in plaintext is not secure for production apps.
        createdAt: serverTimestamp(),
      });
      setName("");
      setMessage("");
      setPassword("");
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("방명록 등록에 실패했습니다.");
    }
  };

  // Opens the modal and sets the item to be deleted
  const openDeleteModal = (id, password) => {
    setCurrentItemToDelete({ id, password });
    setIsModalOpen(true);
  };

  // Called when the modal's confirm button is clicked
  const handleConfirmDelete = async (inputPassword) => {
    if (!currentItemToDelete) return;

    const { id, password: correctPassword } = currentItemToDelete;

    if (inputPassword === correctPassword) {
      try {
        await deleteDoc(doc(db, "guestbook", id));
      } catch (error) {
        console.error("Error removing document: ", error);
        alert("삭제에 실패했습니다.");
      }
    } else {
      alert("비밀번호가 일치하지 않습니다.");
    }

    // Close modal and reset state
    setIsModalOpen(false);
    setCurrentItemToDelete(null);
  };

  const formatDate = (timestamp) => {
    if (!timestamp) return "";
    const date = timestamp.toDate();
    return date.toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
  };

  return (
    <div className={styles.guestbookSection}>
      <div className={styles.guestbookTitle}>
        <span>GUESTBOOK</span>
        <h2 className={styles.guestbookHead}>축하의 마음을 전해주세요</h2>
      </div>
      <form className={styles.guestbookForm} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <input
            type="text"
            placeholder="이름"
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength="20"
          />
          <input
            type="password"
            placeholder="비밀번호 (삭제 시 필요)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            maxLength="20"
          />
        </div>
        <div className={styles.formGroup}>
          <textarea
            placeholder="축하 메시지를 남겨주세요."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            maxLength="200"
          ></textarea>
        </div>
        <button type="submit">글 남기기</button>
      </form>

      <div className={styles.guestbookList}>
        {messages.map((msg) => (
          <div key={msg.id} className={styles.guestbookEntry}>
            <div className={styles.entryHeader}>
              <span className={styles.entryName}>{msg.name}</span>
              <div className={styles.headerRight}>
                <span className={styles.entryDate}>
                  {formatDate(msg.createdAt)}
                </span>
                <button
                  className={styles.deleteButton}
                  onClick={() => openDeleteModal(msg.id, msg.password)}
                >
                  삭제
                </button>
              </div>
            </div>
            <p className={styles.entryMessage}>{msg.message}</p>
          </div>
        ))}
      </div>

      <PasswordModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleConfirmDelete}
      />
    </div>
  );
};

export default Guestbook;
