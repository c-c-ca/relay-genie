import React from 'react';
import './FeatureBox.scss';
import { Collapse } from 'react-collapse';
import CollapseButton from '../../ui/CollapseButton';

const FeatureBox = ({ title, id, icon, description, showText, toggleText }) => {
  console.log('visibility', showText);
  return (
    <div className="feature-box">
      <div className="feature-box__header">
        <div className={`feature-box__icon feature-box__icon--${id}`}>
          {icon}
        </div>
        <h2 className="feature-box__title">{title}</h2>
        <div className="feature-box__button-wrapper">
          <CollapseButton onClick={toggleText} isOpen={showText} />
        </div>
        <div
          className={`feature-box__title-bar feature-box__title-bar--${id}`}
        ></div>
      </div>
      <div className="feature-box__text feature-box__text--desktop">
        <p>{description}</p>
      </div>
      <Collapse
        isOpened={showText}
        initialStyle={{ height: 0, overflow: 'hidden' }}
      >
        <div
          style={{ height: 'auto' }}
          className="feature-box__text feature-box__text--mobile"
        >
          <p>{description}</p>
        </div>
      </Collapse>
    </div>
  );
};

export default FeatureBox;
