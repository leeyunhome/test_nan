import React, { useState, useCallback } from 'react';
import { Route } from 'react-router-dom';
import MainPage from './pages/MainPage';

// import Header from './components/common/Header';
// import Contacts from './pages/Contacts';

const App = () => {
  return <Route path="/:category?" component={MainPage} />;
};

export default App;