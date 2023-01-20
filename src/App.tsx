import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { RouterProvider } from 'react-router-dom';
import { EasterEgg } from './components/user/EasterEgg';
import Simpson from './assets/Simpson.png';
import Simpson2 from './assets/Simpson2.png';
import Simpson3 from './assets/Simpson3.png';

import router from './router/router';

function App() {
  return (
    <>
      <EasterEgg img1={Simpson} img2={Simpson2} img3={Simpson3} />
      {/* <RouterProvider router={router}></RouterProvider> */}
    </>
  );
}
export default App;
