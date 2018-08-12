import React from 'react';
import { I18n } from 'react-redux-i18n';

const HomePageView = props => {
  return (
    <div className="app">
      <div className="title">{I18n.t('app.title')}</div>
    </div>
  );
};

export default HomePageView;
