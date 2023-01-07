import { useQuery } from '@tanstack/react-query';
import { RouterProvider } from 'react-router-dom';

import { useRecoilState } from 'recoil';
import { EasterEgg } from './components/EasterEgg';

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
