import React, { useReducer } from 'react';
import FeatureBox from './FeatureBox';

const FeatureBoxContainer = props => {
  const [isVisible, dispatch] = useReducer(isVisible => !isVisible, false);

  return <FeatureBox {...props} showText={isVisible} toggleText={dispatch} />;
};

export default FeatureBoxContainer;
