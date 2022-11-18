import * as React from 'react';
import type { NextPage } from 'next';
import {
  Container,
  Typography,
  Box
} from '@mui/material';

const Home: NextPage = () => {
  return (
    <Container maxWidth='lg'>
      <Box
        sx={{
          my: 5,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography component='h1' color='primary'>
          Material UI v5 with Next.js in TypeScript
        </Typography>
        <Typography component='h2' color='secondary'>
          Success!
        </Typography>
      </Box>
    </Container>
  );
};

export default Home;