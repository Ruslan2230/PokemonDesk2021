import React from 'react';

import s from './Button.module.scss';

interface Ibutton {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<Ibutton> = ({ children, onClick }) => {
  return (
    <button type="button" className={s.root} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
