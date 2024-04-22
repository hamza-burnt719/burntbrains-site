import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import box1 from '../../../assets/images/box1.png';
import box2 from '../../../assets/images/box2.png';
import box3 from '../../../assets/images/box3.png';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const GridImages = () => {
  return (
    <Box sx={{ flexGrow: 1 , marginX:"165px"}}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {Array.from(Array(3)).map((_, index) => (
          <Grid xs={2} sm={4} md={4} key={index}>
            {index === 0 &&  <img className="w-full h-full" src={box1} />}
            {index === 1 &&  <img className="w-full h-full" src={box2} />}
            {index === 2 &&  <img className="w-full h-full" src={box3} />}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default GridImages;
