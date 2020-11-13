import React from 'react';
import cn from 'classnames';

import s from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={cn(s.footer)}>
      <span>Make with</span> <span>Ours Team</span>
    </div>
  );
};

export default Footer;
