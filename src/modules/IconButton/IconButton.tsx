import React, { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';
import Button from '../Button/Button';

import styles from './IconButton.css';

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

const IconButton = ({ className, ...props }: Props) => {
  return <Button {...props} className={clsx(styles.root, className)} />;
};

export default IconButton;
