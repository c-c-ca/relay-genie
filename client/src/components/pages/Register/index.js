import React, { Component } from 'react';
import './Register.scss';
import { connect } from 'react-redux';
import axios from 'axios';

import history from '../../../history';

import RegisterForm from './RegisterForm';
import Success from '../../Success';

import { HappyIcon, ChatIcon, CompassIcon } from '../../ui/icons';
import Logo from '../../ui/Logo';

const renderFeature = ({ icon, title, description }, key) => (
  <div className="register__feature" key={key}>
    <div className="register__feature-header">
      <div className="register__feature-icon">{icon}</div>
      <h2 className="register__feature-title">{title}</h2>
    </div>
    <p className="register__feature-description">{description}</p>
  </div>
);

const renderFeatureSection = () => {
  const features = [
    {
      icon: <HappyIcon />,
      title: 'Free account',
      description:
        'Creating a new account is completely free! Start learning and making new connections today.',
    },
    {
      icon: <ChatIcon />,
      title: 'Join the conversation',
      description:
        'Meet others who share your passion for adventure and discuss your favorite topics.',
    },
    {
      icon: <CompassIcon />,
      title: 'Discover new places',
      description:
        'Find new trails to explore!  Read, comment, and ask questions about the most popular hiking destinations.',
    },
  ];

  return (
    <div className="register__feature-section">
      {features.map((props, i) => renderFeature(props, i))}
    </div>
  );
};

class Register extends Component {
  state = { registrationComplete: false };

  componentDidMount() {
    if (this.props.auth) {
      // history.push('/');
    }
  }

  componentDidUpdate() {
    if (this.props.auth) {
      // history.push('/');
    }
  }

  onRegisterHandler = async email => {
    await axios.post('/api/register', { email });

    this.setState({ registrationComplete: true });
  };

  renderForm() {
    return (
      <>
        <h1 className="register__header">
          Join for free today and start exploring
        </h1>
        <div className="register__content">
          {renderFeatureSection()}
          <RegisterForm onRegister={this.onRegisterHandler} />
        </div>
        {this.state.registrationComplete && (
          <Success
            title="Thank You"
            message="We just sent you a confirmation email. Please check your inbox."
            onDismiss={() => history.push('/')}
          />
        )}
      </>
    );
  }

  renderContent() {
    // DELETE ME
    return this.renderForm();

    // switch (this.props.auth) {
    //   case null:
    //     return <Loader />;
    //   case false:
    //     return this.renderForm();
    //   default:
    //     return;
    // }
  }

  render() {
    return (
      <div className="register">
        <div className="register__logo">
          <Logo />
        </div>
        {this.renderContent()}
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps)(Register);
