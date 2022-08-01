import React from 'react';
import ReactDOM from 'react-dom/client';
// import Welcomepage from './welcomepage/welcomepage';
import SignupPage from './SignUp/signupPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <SignupPage></SignupPage>
  </React.StrictMode>
);