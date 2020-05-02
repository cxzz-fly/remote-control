import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from '../components/Counter.css';
import routes from '../constants/routes.json';

const { ipcRenderer } = require('electron');
const Timer = require('timer.js');

export default function Pomodoro() {
  const [number, setNumber] = useState('0');
  function updateTime(ms: string) {
    setNumber(ms);
  }
  async function notification() {
    const res = await ipcRenderer.invoke('work-notification');
    console.log('res', res);
    if (res === 'reset') {
      setTimeout(() => {
        alert('休息');
      }, 5000);
    } else if (res === 'work') {
      startWork();
    }
  }
  function startWork() {
    const workTimer = new Timer({
      ontick: (ms: number) => {
        const s: number = +(ms / 1000).toFixed(0);
        const ss = s % 60;
        const mm = (s / 60).toFixed(0);
        const timerStr = `${mm
          .toString()
          .padStart(2, '0')} : ${ss.toString().padStart(2, '0')}`;
        updateTime(timerStr);
      },
      onend: () => {
        console.log('onend');
        notification();
      }
    });
    workTimer.start(5);
  }

  useEffect(() => {
    startWork();
  }, []);

  return (
    <div>
      <div className={styles.backButton} data-tid="backButton">
        <Link to={routes.HOME}>
          <i className="fa fa-arrow-left fa-3x" />
        </Link>
        <div>{number}</div>
      </div>
    </div>
  );
}
