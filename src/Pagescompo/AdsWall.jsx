import React from 'react';
import { styled } from '@mui/system';
import { Card, CardContent, Button, Typography } from '@mui/material';

const AdsWallRoot = styled('div')({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  backgroundPosition: 'center',
  backgroundImage: 'url("https://1.bp.blogspot.com/-R5G5CCnRxYU/XaQLBVwWikI/AAAAAAAAPcs/2OGMHkmG2mYVsHiAN6J5cXEYb4EJYFTtwCLcBGAsYHQ/s1600/Pastor%2BBolaji%2BIdowu%2B-%2BBecoming%2BAttractive.jpg")',
  backgroundSize: 'cover',
});

const AdsText = styled(Typography)({
  position: 'absolute',
  top: '10px',
  left: '10px',
  color: 'white',
  fontSize: '16px',
  fontWeight: 'bold',
  background: 'rgba(0, 0, 0, 0.5)',
  padding: '5px 10px',
  borderRadius: '5px',
});

const AdsWallCard = styled(Card)({
  maxWidth: 400,
  textAlign: 'center',
  background: 'rgba(255, 255, 255, 0.5)', 
});

const AdsWallButton = styled(Button)({
  marginTop: 2, // theme.spacing(2) equivalent
});

const AdsWall = () => {
  return (
    <AdsWallRoot>
      <AdsText>Ads</AdsText>
      <AdsWallCard>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Next Level Prayer With Pst Bolaji Idowu
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Your Description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
          <AdsWallButton variant="contained" sx={{
            backgroundColor:"darkgreen",
            '&:hover': {backgroundColor:"green"}
          }}>
            Learn More
          </AdsWallButton>
        </CardContent>
      </AdsWallCard>
    </AdsWallRoot>
  );
};

export default AdsWall;
