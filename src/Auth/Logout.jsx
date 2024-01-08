import { useEffect, useState } from 'react';
import { signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from './firebase';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function Userdetails() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userData, setUserData] = useState({})


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (result) => {
      if (result) {

        const {displayName, email} = result
        setUserData({ displayName, email })

        setIsLoggedIn(true)
      } else {
        setIsLoggedIn(false)
      }

    })

    return () => unsubscribe();
  },[])
  
 

  const Logout = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      setUserData({})
      setIsLoggedIn(false)
    }).catch((error) => {
      // An error happened.
      console.log({ error });
    });
  }

  return (
    <Box>
         <Button variant="filled" sx={{border:"none", background:"red", color:"white", '&:hover': {
          backgroundColor: 'green', 
          color: 'white', 
        },}} onClick={Logout}>Log out</Button>
    </Box>
  );
}

export default Userdetails;