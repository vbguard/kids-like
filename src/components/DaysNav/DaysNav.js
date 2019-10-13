import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './DaysNav.module.css';

const desctopDays = {
  mon: 'Понеділок',
  tues: 'Вівторок',
  wed: 'Середа',
  thurs: 'Четвер',
  fri: 'Пятниця',
  sart: 'Субота',
  sun: 'Неділя'
};

const mobileDays = {
  mon: 'Пн',
  tues: 'Вт',
  wed: 'Ср',
  thurs: 'Чт',
  fri: 'Пт',
  sart: 'Суб',
  sun: 'Нед'
};

const screenWidth = window.innerWidth;

const findTypeOfContent = width => (width >= 1280 ? desctopDays : mobileDays);

const daysContent = findTypeOfContent(screenWidth);

const DaysNav = () => (
  <ul className={styles.nav}>
    <li className={styles.item}>
      <NavLink className={styles.link} to="/dashboard/monday">
        {daysContent.mon}
      </NavLink>
    </li>
    <li className={styles.item}>
      <NavLink className={styles.link} to="/dashboard/tuesday">
        {daysContent.tues}
      </NavLink>
    </li>
    <li className={styles.item}>
      <NavLink className={styles.link} to="/dashboard/wednesday">
        {daysContent.wed}
      </NavLink>
    </li>
    <li className={styles.item}>
      <NavLink className={styles.link} to="/dashboard/thursday">
        {daysContent.thurs}
      </NavLink>
    </li>
    <li className={styles.item}>
      <NavLink className={styles.link} to="/dashboard/friday">
        {daysContent.fri}
      </NavLink>
    </li>
    <li className={styles.item}>
      <NavLink className={styles.link} to="/dashboard/sarturday">
        {daysContent.sart}
      </NavLink>
    </li>
    <li className={styles.item}>
      <NavLink className={styles.link} to="/dashboard/sunday">
        {daysContent.sun}
      </NavLink>
    </li>
  </ul>
);

export default DaysNav;
