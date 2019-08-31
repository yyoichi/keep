import React, { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

import styles from './Button.css';

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ className, ...props }: Props) => {
  return <button {...props} className={clsx(styles.root, className)} />;
};

export default Button;
