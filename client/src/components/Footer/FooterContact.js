import React from 'react';

const FooterContact = ({ icon, text }) => (
  <div className="footer__contact">
    <div className="footer__icon">{icon}</div>
    <p className="footer__contact-text">{text}</p>
  </div>
);

export default FooterContact;
