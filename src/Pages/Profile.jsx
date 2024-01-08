import React, { useEffect, useState } from 'react';
import { signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from '../Auth/firebase';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Header from "../Componenets/Header";

function Profile() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (result) => {
      if (result) {
        const { displayName, email, photoURL } = result;
        setUserData({ displayName, email, photoURL });
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const SignUpUsingGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const { displayName, email, photoURL } = result.user;
        setUserData({ displayName, email, photoURL });
        setIsLoggedIn(true);
      })
      .catch((error) => {
        console.log({ error });
      });
  }

  const Logout = () => {
    signOut(auth)
      .then(() => {
        setUserData({});
        setIsLoggedIn(false);
      })
      .catch((error) => {
        console.log({ error });
      });
  }

  return (
    <Container component="main">
    <Header/>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
        }}
      >
        {!isLoggedIn && (
          <Button
            onClick={SignUpUsingGoogle}
            type="button"
            variant="contained"
            color="primary"
          >
            Sign in with Google
          </Button>
        )}

        {isLoggedIn && (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar alt={userData.displayName} src={userData.photoURL} sx={{ width: 100, height: 100, my: 2 }} />
            <Typography variant="h5" gutterBottom>
              {userData.displayName}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {userData.email}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={Logout}
              sx={{
                backgroundColor:"red",
                '&:hover': {backgroundColor:"green"}
              }}
            >
              Log out
            </Button>
          </Box>
        )}
      </Box>
    </Container>
  );
}

export default Profile;
