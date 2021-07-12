import React from 'react';
import './Features.scss';
import Container from '../layout/Container';
import FeatureBoxContainer from './FeatureBoxContainer';
import FireIcon from '../ui/icons/FireIcon';
import LabIcon from '../ui/icons/LabIcon';
import BankNoteIcon from '../ui/icons/BankNoteIcon';

const featureItems = [
  {
    title: 'Get Changes Out Fast',
    icon: <FireIcon />,
    description: `RelayMe provides you with the tools to get relay information out to your parents and swimmers as fast as possible.`, //  By having a centralized location, anyone who has the app can view any immediate changes that you make.`,
  },
  {
    title: 'Completely Free',
    icon: <BankNoteIcon />,
    description:
      'Changing relays has never been easier!  Did someone just leave the meet? No problem!', // RelayMe allows you to easily move your swimmers around and can even do the work for you.',
  },
  {
    title: 'Customize Your Relays',
    icon: <LabIcon />,
    description:
      'Swimmers and parents can keep you informed by updating their status.',
  },
];

const Features = () => (
  <div className="features">
    <Container>
      <div className="features__content">
        {featureItems.map((featureProps, i) => (
          <FeatureBoxContainer key={i} id={i + 1} {...featureProps} />
        ))}
      </div>
    </Container>
  </div>
);

export default Features;
