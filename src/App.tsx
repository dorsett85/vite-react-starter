import { useState } from 'react';
import reactLogo from './assets/img/react.svg';
import viteLogo from '/vite.svg';
import styles from './App.module.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className={styles.logo} alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className={`${styles.logo} ${styles.react}`} alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className={styles.card}>
        <div>
          <button
            onClick={() => {
              setCount((count) => count + 1);
            }}
            className={styles.incrementBtn}
          >
            Increment
          </button>
          <span>count is: {count}</span>
        </div>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className={styles['read-the-docs']}>Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
