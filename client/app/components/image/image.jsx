import React from 'react';
import styles from './image.scss';

const Image = ({ src }) => (
  <div className={styles.image}>
    <img src={src} alt="" />
  </div>
);

export default Image;
