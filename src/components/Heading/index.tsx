import React from 'react';

import s from './Text.module.scss';

interface IHeading {
  variant: string;
}

const Heading: React.FC<IHeading> = ({ children, variant }) => {
  return <div className={s.root}>{children}</div>;
};

export default Heading;
