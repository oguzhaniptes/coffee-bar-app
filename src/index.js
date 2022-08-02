import React from 'react';
import ReactDOM from 'react-dom/client';
// import Welcomepage from './welcomepage/welcomepage';
 import SignupPage from './SignUp/signupPage';
import SigninPage from './SignIn/signinPage';
// import Basic from './component/Form'
import HomePage from './homePage/homePage';
import { ChakraProvider } from '@chakra-ui/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      {/* <SigninPage></SigninPage> */}
      {/* <SignupPage></SignupPage> */}
      <HomePage></HomePage>
    </ChakraProvider>
  </React.StrictMode>
);