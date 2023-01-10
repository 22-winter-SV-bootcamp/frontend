import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { EasterEgg } from './components/user/EasterEgg';

import router from './router/router';

function App() {
  return (
    <>
      {/* <RouterProvider router={router}></RouterProvider> */}
      <EasterEgg />
    </>
  );
}
export default App;
