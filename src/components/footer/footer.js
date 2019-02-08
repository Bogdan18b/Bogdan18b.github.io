import React from 'react';
import FooterStyle from './footerStyle';

const Footer = () => (
  <FooterStyle>
    <p>© {new Date().getFullYear()} Bogdan Bobletec. All Rights Reserved.</p>
  </FooterStyle>
);

export default Footer;
