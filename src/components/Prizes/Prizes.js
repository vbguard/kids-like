import React from 'react';
// import Icon from '../Icon/Icon';
import styles from './Prizes.module.css';
import kinder from '../../assets/images/kinder.jpg';
import macdonalds from '../../assets/images/macdonalds.jpg';

const Prizes = () => (
  <div className={styles.prizeConteiner}>
    <p className={styles.text}>15 балів</p>
    <img src={kinder} width="14" height="16" alt="kinder" className={styles.image} />
    <p className={styles.text}>25 балів</p>
    <img src={macdonalds} width="16" height="16" alt="macdonalds" className={styles.image} />
  </div>
);

export default Prizes;