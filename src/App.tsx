import { display } from '@mui/system';
import { useQuery } from '@tanstack/react-query';
import { RouterProvider } from 'react-router-dom';

import { useRecoilState } from 'recoil';
import { EasterEgg } from './components/EasterEgg';
import Box from '@mui/material/Box';

import router from './router/router';

function App() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      {/* <RouterProvider router={router}></RouterProvider> */}
      <EasterEgg />
    </Box>
  );
}
export default App;
