import React from 'react';
import HeaderList from './headerStyle';

const Header = () => (
  <HeaderList>
    <li>
      <a href="mailto:bogdanbobletec@gmail.com"><i className="fa fa-envelope"></i></a>
    </li>
    <li>
      <a href="https://www.linkedin.com/in/bogdanbobletec/"><i className="fab fa-linkedin"></i></a>
    </li>
    <li>
      <a href="https://github.com/Bogdan18b"><i className="fab fa-github"></i></a>
    </li>
    <li>
      <a href="https://angel.co/bogdan-bobletec"><i className="fab fa-angellist"></i></a>
    </li>
  </HeaderList>
);

export default Header;
