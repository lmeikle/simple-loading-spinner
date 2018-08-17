import React from 'react';
import logo from './loadingSpinner.svg';
import './Loading.css';

/**
 * Simple stateless component to render a loading spinner
 */
const LoadingComponent = () => (
  <div>
    <img src={logo} className="loading-spinner" alt="logo" />
  </div>
);

export default LoadingComponent;
