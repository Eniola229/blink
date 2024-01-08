import { useEffect, useState } from 'react';
import { sendEmailVerification } from "firebase/auth";
import { signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from './firebase';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import RoutePages from "../Pages/RoutePages";
import { styled } from '@mui/system';
import bl from "../images/bl.jpg";
import blink from "../images/blink.png";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const LoginPageContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  backgroundColor:"black"
});

const LogoImg = styled('img')({
  width: '100px', // Set the width as per your design
  height: 'auto', // Maintain aspect ratio
  marginBottom: '20px', // Add margin as needed
  borderRadius: '50%', // Apply border-radius to make it a circle (adjust as needed)
});

const SignInButton = styled(Button)({
  marginTop: '20px',
  backgroundColor: 'googleBlue',
  color: 'white',
  fontWeight: 'bold',
   border: "1px solid white",

  borderRadius: '10px',
  '&:hover': {
    backgroundColor: 'googleBlue',
    color:"white"
  },
});


function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState({});
  const [isLoading, setIsLoading] = useState(true); // Add isLoading state

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (result) => {
      setIsLoading(false); // Set loading to false when auth state changes

      if (result) {
        const { displayName, email } = result;
        setUserData({ displayName, email });
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const SignUpUsingGoogle = () => {
    setIsLoading(true); // Set loading to true when signing in

    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const { displayName, email } = result.user;
        setUserData({ displayName, email });
        sendEmailVerification(result.user);
        setIsLoggedIn(true);
        setIsLoading(false); // Set loading to false after successful sign-in
      })
      .catch((error) => {
        console.log({ error });
        setIsLoading(false); // Set loading to false after error
      });
  };

  const Logout = () => {
    setIsLoading(true); // Set loading to true when signing out

    signOut(auth)
      .then(() => {
        setUserData({});
        setIsLoggedIn(false);
        setIsLoading(false); // Set loading to false after successful sign-out
      })
      .catch((error) => {
        console.log({ error });
        setIsLoading(false); // Set loading to false after error
      });
  };

  return (
    <>

      {!isLoggedIn &&
    <LoginPageContainer>
      <LogoImg src={blink} alt="Blink Logo" />
      <Typography variant="h4" sx={{color:"white"}} gutterBottom>
        Welcome to Blink
      </Typography>
      <Typography variant="body1" style={{ marginBottom: '20px', color:"darkgreen", fontFamily:"cursive", fontWeight:"bold" }}>
        Share your thoughts on trending topics
      </Typography>
      <SignInButton onClick={SignUpUsingGoogle}>
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 48 48"><path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917"/><path fill="#FF3D00" d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691"/><path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44"/><path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917"/></svg>
        {isLoading ? ' Signing in...'  : 'Sign in with Google'}
      </SignInButton>
    </LoginPageContainer>
      }

      {isLoggedIn &&
        <>
         <RoutePages/>
        </>
      }
    </>
  );
}

export default Login;