import React, { memo, useRef } from 'react';
import styles from './searchBar.module.css';
import '@fortawesome/fontawesome-free/js/all.js';

const SearchBar = memo(({ onSearch }) => {
  const inputRef = useRef();
  const handleValue = () => {
    const value = inputRef.current.value;
    onSearch(value);
  };
  const onClick = () => {
    handleValue();
  };

  const onKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleValue();
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <span className={styles.img}>
          <i className="fab fa-youtube"></i>
        </span>
        <h1>YOUTUBE</h1>
      </div>
      <input
        onKeyPress={onKeyPress}
        ref={inputRef}
        className={styles.input}
        type="search"
        placeholder="Search..."
      />
      <button onClick={onClick} className={styles.btn} type="submit">
        <i className="fas fa-search"></i>
      </button>
    </header>
  );
});

export default SearchBar;
