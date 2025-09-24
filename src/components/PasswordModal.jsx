import React, { useState, useEffect } from 'react';
import styles from './PasswordModal.module.scss';

const PasswordModal = ({ isOpen, onClose, onSubmit }) => {
  const [password, setPassword] = useState('');

  useEffect(() => {
    // Clear password when modal opens
    if (isOpen) {
      setPassword('');
    }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(password);
  };

  // Handle backdrop click to close modal
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={styles.modalBackdrop} onClick={handleBackdropClick}>
      <div className={styles.modalContent}>
        <h4>비밀번호 입력</h4>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            placeholder="삭제 시 사용한 비밀번호"
            className={styles.passwordInput}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoFocus
          />
          <div className={styles.modalActions}>
            <button type="button" className={styles.cancelButton} onClick={onClose}>
              취소
            </button>
            <button type="submit" className={styles.confirmButton}>
              확인
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PasswordModal;
