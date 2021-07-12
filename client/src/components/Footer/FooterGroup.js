import React from 'react';

const FooterGroup = ({ title, children = () => {} }) => (
  <div className="footer__group">
    <h2 className="footer__group-title">{title}</h2>
    <div className="footer__group-body">{children()}</div>
  </div>
);

export default FooterGroup;
