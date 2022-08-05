import React from 'react';
import ReactDOM from 'react-dom/client';
import Welcomepage from './welcomepage/welcomepage';
 import SignupPage from './SignUp/signupPage';
import SigninPage from './SignIn/signinPage';
import Basic from './component/Form'
import HomePage from './homePage/homePage';
import Announcement from './component/Announcement';
import Cards from './component/Cards';
import { ChakraProvider } from '@chakra-ui/react';
import NavBar from './component/NavBar';
import GiftPage from './GiftPage/GiftPage';
import ProfilePage from './ProfilePage/ProfilePage';
import MenuPage from './MenuPage/MenuPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      {/* <Welcomepage></Welcomepage> */}
      {/* <HomePage></HomePage> */}
      {/* <NavBar></NavBar> */}
      {/* <SigninPage></SigninPage> */}
      {/* <SignupPage></SignupPage> */}
      {/* <Announcement></Announcement> */}
      {/* <Cards></Cards> */}
      {/* <GiftPage></GiftPage> */}
      {/* <ProfilePage></ProfilePage> */}
      <MenuPage></MenuPage>
    </ChakraProvider>
  </React.StrictMode>
);