import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { RouterProvider } from 'react-router-dom';
import { EasterEgg } from './components/user/EasterEgg';
import Simpson from './assets/Simpson.png';
import Simpson2 from './assets/Simpson2.png';
import Simpson3 from './assets/Simpson3.png';
import SimpsonDoh from './assets/SimpsonDoh.jpg';
import SimpsonDoh2 from './assets/SimpsonDoh2.png';

import router from './router/router';
import { ResultPage } from './components/result/ResultPage';
import { UploadPage } from './components/upload/UploadPage';

function App() {

  return <RouterProvider router={router}></RouterProvider>;

}
export default App;


