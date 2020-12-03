import React from 'react';

import s from './Text.module.scss';

interface IHeading {
  variant: string;
  size: string;
  className: string;
}

const Heading: React.FC<IHeading> = ({ children, variant, size, className }) => {
  return <div className={s.root}>{children}</div>;
};

export default Heading;
