// @flow
import * as React from 'react';
import Simpson from '../../public/resource/Simpson.png';
import styles from './EasterEgg.module.css';

type Props = {};
export function EasterEgg(props: Props) {
  return (
    <div className={styles.container}>
      <b className={styles.title}>Are you Homer Simpson?</b>

      <img className={styles.image} src={Simpson} alt="Loading..." />
    </div>
  );
}
