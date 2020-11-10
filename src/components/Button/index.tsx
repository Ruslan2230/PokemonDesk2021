import React from 'react';

import s from './Button.module.scss';

interface Ibutton {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  color: string;
}

const Button: React.FC<Ibutton> = ({ children, onClick, color }) => {
  return (
    <button type="button" className={s.root} onClick={onClick} style={{ backgroundColor: color }}>
      {children}
    </button>
  );
};

export default Button;
