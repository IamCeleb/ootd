import * as React from 'react';
import type { NextPage } from 'next';
import {
  Container,
  Typography,
  Box
} from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import { authApi } from '../api/authApi';


const Home: NextPage = () => {
  const [apiTest, setApiTest] = useState('');

  const getAPIExample = useCallback(async () => {
    try {
      const response = await authApi.hello();
      const data = await response.json();
      console.log(data)
      setApiTest(data.Hello);
    } catch (err) {
      console.log(err)
    }
  }, [])

  useEffect(()=>{
    getAPIExample();
  }, [getAPIExample])

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
          API test: {apiTest} (If the message is 'World', API connection is success)
        </Typography>
      </Box>
    </Container>
  );
};

export default Home;