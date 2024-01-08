import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Logout from "../Auth/Logout";
import Userdetails from "../Auth/Userdetails";
import { auth } from '../Auth/firebase';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';




const StickyAppBar = styled(AppBar)({
  position: 'sticky',
  top: 0,
  zIndex: 1000, // Adjust the z-index as needed
});

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userData, setUserData] = useState({})

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (result) => {
      if (result) {

        const {displayName, email, photoURL} = result
        setUserData({ displayName, email, photoURL })

        setIsLoggedIn(true)
      } else {
        setIsLoggedIn(false)
      }

    })

    return () => unsubscribe();
  },[])


  return (
    <StickyAppBar position="static" sx={{
      backgroundColor:"darkgreen"
    }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'cursive',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Blink.
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              
            <MenuItem onClick={handleCloseNavMenu}>
             <Link to="/" sx={{textDecoration:"none"}}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'green', display: 'block', fontWeight:"bold"}}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M12.707 2.293a1 1 0 0 0-1.414 0l-7 7l-2 2a1 1 0 1 0 1.414 1.414L4 12.414V19a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-6.586l.293.293a1 1 0 0 0 1.414-1.414z" clip-rule="evenodd"/></svg>
              </Button>
            </Link>
            <Link to="/" sx={{textDecoration:"none"}}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'green', display: 'block', fontWeight:"bold"}}
              >
               <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M4.95 17.05q-1.425-1.425-2.187-3.238T2 10q0-2 .763-3.812T4.95 2.95l1.2 1.2Q4.975 5.325 4.338 6.838T3.7 10q0 1.65.638 3.163T6.15 15.85zm2.3-2.3q-.95-.95-1.45-2.175T5.3 10q0-1.35.5-2.575T7.25 5.25l1.2 1.2q-.725.725-1.088 1.638T7 10q0 1 .363 1.913T8.45 13.55zM11 21v-8.7q-.675-.3-1.088-.925T9.5 10q0-1.05.725-1.775T12 7.5q1.05 0 1.775.725T14.5 10q0 .75-.413 1.375T13 12.3V21zm5.75-6.25l-1.2-1.2q.725-.725 1.088-1.638T17 10q0-1-.363-1.912T15.55 6.45l1.2-1.2q.95.95 1.45 2.175T18.7 10q0 1.35-.5 2.575t-1.45 2.175m2.3 2.3l-1.2-1.2q1.175-1.175 1.813-2.687T20.3 10q0-1.65-.638-3.162T17.85 4.15l1.2-1.2q1.425 1.425 2.188 3.238T22 10q0 2-.763 3.813T19.05 17.05"/></svg>
              </Button>
            </Link>
            <Link to="/" sx={{textDecoration:"none"}}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'green', display: 'block', fontWeight:"bold"}}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M7 20h4c0 1.1-.9 2-2 2s-2-.9-2-2m-2-1h8v-2H5zm11.5-9.5c0 3.82-2.66 5.86-3.77 6.5H5.27c-1.11-.64-3.77-2.68-3.77-6.5C1.5 5.36 4.86 2 9 2s7.5 3.36 7.5 7.5m4.87-2.13L20 8l1.37.63L22 10l.63-1.37L24 8l-1.37-.63L22 6zM19 6l.94-2.06L22 3l-2.06-.94L19 0l-.94 2.06L16 3l2.06.94z"/></svg>
              </Button>
            </Link>
            <Link to="/" sx={{textDecoration:"none"}}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'green', display: 'block', fontWeight:"bold"}}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M13.5 4A1.5 1.5 0 0 0 12 5.5A1.5 1.5 0 0 0 13.5 7A1.5 1.5 0 0 0 15 5.5A1.5 1.5 0 0 0 13.5 4m-.36 4.77c-1.19.1-4.44 2.69-4.44 2.69c-.2.15-.14.14.02.42c.16.27.14.29.33.16c.2-.13.53-.34 1.08-.68c2.12-1.36.34 1.78-.57 7.07c-.36 2.62 2 1.27 2.61.87c.6-.39 2.21-1.5 2.37-1.61c.22-.15.06-.27-.11-.52c-.12-.17-.24-.05-.24-.05c-.65.43-1.84 1.33-2 .76c-.19-.57 1.03-4.48 1.7-7.17c.11-.64.41-2.04-.75-1.94"/></svg>
              </Button>
            </Link>
            
                </MenuItem>
            
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'cursive',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Blink.
          </Typography>
          <Box  
            sx={{ flexGrow: 1,
            alignItems: 'center',
            justifyContent: 'center',  
            display: { xs: 'none', md: 'flex' } }}>
            <Link to="/" sx={{textDecoration:"none"}}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block', fontWeight:"bold"}}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M12.707 2.293a1 1 0 0 0-1.414 0l-7 7l-2 2a1 1 0 1 0 1.414 1.414L4 12.414V19a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-6.586l.293.293a1 1 0 0 0 1.414-1.414z" clip-rule="evenodd"/></svg>
              </Button>
            </Link>
            <Link to="/" sx={{textDecoration:"none"}}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block', fontWeight:"bold"}}
              >
               <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M4.95 17.05q-1.425-1.425-2.187-3.238T2 10q0-2 .763-3.812T4.95 2.95l1.2 1.2Q4.975 5.325 4.338 6.838T3.7 10q0 1.65.638 3.163T6.15 15.85zm2.3-2.3q-.95-.95-1.45-2.175T5.3 10q0-1.35.5-2.575T7.25 5.25l1.2 1.2q-.725.725-1.088 1.638T7 10q0 1 .363 1.913T8.45 13.55zM11 21v-8.7q-.675-.3-1.088-.925T9.5 10q0-1.05.725-1.775T12 7.5q1.05 0 1.775.725T14.5 10q0 .75-.413 1.375T13 12.3V21zm5.75-6.25l-1.2-1.2q.725-.725 1.088-1.638T17 10q0-1-.363-1.912T15.55 6.45l1.2-1.2q.95.95 1.45 2.175T18.7 10q0 1.35-.5 2.575t-1.45 2.175m2.3 2.3l-1.2-1.2q1.175-1.175 1.813-2.687T20.3 10q0-1.65-.638-3.162T17.85 4.15l1.2-1.2q1.425 1.425 2.188 3.238T22 10q0 2-.763 3.813T19.05 17.05"/></svg>
              </Button>
            </Link>
            <Link to="/" sx={{textDecoration:"none"}}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block', fontWeight:"bold"}}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M7 20h4c0 1.1-.9 2-2 2s-2-.9-2-2m-2-1h8v-2H5zm11.5-9.5c0 3.82-2.66 5.86-3.77 6.5H5.27c-1.11-.64-3.77-2.68-3.77-6.5C1.5 5.36 4.86 2 9 2s7.5 3.36 7.5 7.5m4.87-2.13L20 8l1.37.63L22 10l.63-1.37L24 8l-1.37-.63L22 6zM19 6l.94-2.06L22 3l-2.06-.94L19 0l-.94 2.06L16 3l2.06.94z"/></svg>
              </Button>
            </Link>
            <Link to="/" sx={{textDecoration:"none"}}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block', fontWeight:"bold"}}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M13.5 4A1.5 1.5 0 0 0 12 5.5A1.5 1.5 0 0 0 13.5 7A1.5 1.5 0 0 0 15 5.5A1.5 1.5 0 0 0 13.5 4m-.36 4.77c-1.19.1-4.44 2.69-4.44 2.69c-.2.15-.14.14.02.42c.16.27.14.29.33.16c.2-.13.53-.34 1.08-.68c2.12-1.36.34 1.78-.57 7.07c-.36 2.62 2 1.27 2.61.87c.6-.39 2.21-1.5 2.37-1.61c.22-.15.06-.27-.11-.52c-.12-.17-.24-.05-.24-.05c-.65.43-1.84 1.33-2 .76c-.19-.57 1.03-4.48 1.7-7.17c.11-.64.41-2.04-.75-1.94"/></svg>
              </Button>
            </Link>
            
          </Box >

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt={userData.displayName} src={userData.photoURL} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
                <MenuItem onClick={handleCloseUserMenu}>
                <Link to="/profile">
                  <Button sx={{color:"white", background:"green", '&:hover': {backgroundColor:"red"}}}>Profile</Button>
                  </Link>
                </MenuItem>
                    
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center"><Logout/></Typography>
                </MenuItem>
            
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </StickyAppBar>
  );
}
export default Header;
