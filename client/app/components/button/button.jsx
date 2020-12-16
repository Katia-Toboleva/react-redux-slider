import React from 'react';
import classnames from 'classnames/bind';
import styles from './button.scss';

const cx = classnames.bind(styles);

const Button = ({ text, type, onClick }) => (
  <div
    className={cx('button', {
      [`button--${type}`]: type,
    })}
    onClick={onClick}
  >
    {(text === 'back') && <span>&#11164;</span>}
    {(text === 'next') && <span>&#11166;</span>}
  </div>
);

export default Button;
