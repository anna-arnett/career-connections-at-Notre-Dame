// components/LoginPage.tsx

import React, { useState } from 'react';
import styles from "../components/index.module.css"

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = () => {
    alert(`⚠️WARNING⚠️!!!!\nPLEASE DO NOT USER A REAL PASSWORD YET!!!!!!!\nwe have yet to secure our site yet :( \n\nUsername: ${username}, Password: ${password}`);
  };

  return (
    <div className={styles.container}>
      <h1>Odyssey</h1>
      <form>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
