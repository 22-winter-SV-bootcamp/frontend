import { Box } from '@mui/system';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import { EasterEgg } from './components/user/EasterEgg';

import router from './router/router';

function App() {
  return (
    <Box sx={{width:1,height:1}}>
      <RouterProvider router={router}></RouterProvider>
    </Box>
  );
}
export default App;
