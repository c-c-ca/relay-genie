import React from 'react';
import './Footer.scss';
import Container from '../layout/Container';
import FooterGroup from './FooterGroup';
import FooterContact from './FooterContact';
import {
  DirectionIcon,
  PhoneIcon,
  GooglePlusIcon,
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '../ui/icons';

const footerLinks = [
  {
    text: 'Home',
    path: '/',
  },
  {
    text: 'About',
    path: '/about',
  },
  {
    text: 'Contact',
    path: '/contact',
  },
  {
    text: 'Privacy Policy',
    path: '/privacy',
  },
  {
    text: 'Terms',
    path: '/terms',
  },
];

const socialButtons = [
  {
    text: 'Google',
    icon: <GooglePlusIcon />,
  },
  {
    text: 'Facebook',
    icon: <FacebookIcon />,
  },
  {
    text: 'Github',
    icon: <GithubIcon />,
  },
  {
    text: 'Instagram',
    icon: <InstagramIcon />,
  },
  {
    text: 'LinkedIn',
    icon: <LinkedInIcon />,
  },
  {
    text: 'Twitter',
    icon: <TwitterIcon />,
  },
];

const Footer = () => (
  <footer className="footer">
    <Container>
      <div className="footer__content">
        <FooterGroup title="Find us">
          {() => (
            <div className="footer__find-us">
              <div className="footer__about">
                RelayMe is created and maintained by Adam.
              </div>
              <div className="footer__contact-container">
                <FooterContact icon={<PhoneIcon />} text="+91-9999878398" />
                <FooterContact
                  icon={<DirectionIcon />}
                  text="admin@relayhero.io"
                />
              </div>
            </div>
          )}
        </FooterGroup>
        <FooterGroup title="Explore">
          {() => (
            <div>
              <ul className="footer__link-list">
                {footerLinks.map(({ text, path }) => (
                  <li className="footer__link-item">
                    <a href={path} className="footer__link">
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </FooterGroup>
        <FooterGroup title="Social Links">
          {() => (
            <div className="footer__button-container">
              {socialButtons.map(({ text, icon }) => (
                <button className="footer__button">
                  <div className="footer__button-icon">{icon}</div>
                  {text}
                </button>
              ))}
            </div>
          )}
        </FooterGroup>
      </div>
    </Container>
  </footer>
);

export default Footer;
