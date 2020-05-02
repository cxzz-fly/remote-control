import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.css';
import routes from '../constants/routes.json';

export default function Home() {
  return (
    <div className={styles.container} data-tid="container">
      <h2>Home</h2>
      <Link to={routes.COUNTER}>to Counter</Link>
      <br />
      <Link to={routes.POMODORO}>to POMODORO</Link>
    </div>
  );
}
