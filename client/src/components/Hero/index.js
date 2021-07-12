import React from 'react';
import './Hero.scss';
import Container from '../layout/Container';
import Button from '../ui/Button';
import { RegisterIcon } from '../ui/icons';
import { Link } from 'react-router-dom';

const titleText = 'Better Team Management';
const subtitleText =
  'RelayMe is an innovative and powerful tool to help your team stay connected when it matters most.';

const Hero = () => (
  <section className="hero">
    <Container>
      <div className="hero__content">
        <h1 className="hero__title">{titleText}</h1>
        <h2 className="hero__subtitle">{subtitleText}</h2>
        <div className="u-margin-top-medium">
          <div className="hero__button-wrapper">
            <Button
              to="/register"
              text="Register Today"
              icon={<RegisterIcon />}
            />
          </div>
        </div>
      </div>
    </Container>
  </section>
);

export default Hero;
