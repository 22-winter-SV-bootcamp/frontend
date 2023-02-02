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
import Test1 from './svgComponents/female/hair/SVGFemaleLong';
import Test2 from './svgComponents/female/inner/SVGFemaleBasic_neck_pole';
import Test3 from './svgComponents/female/bottom/SVGFemaleDenim';
import Test4 from './svgComponents/female/top/SVGFemaleBlazer2';

function App() {
  return <RouterProvider router={router}></RouterProvider>;
  // return (
  //   <>
  //     <Test2 viewBox="-42 114 550 550" />
  //     <Test3 />
  //     <Test4 />
  //     <Test1 main="blue" sub="50" />
  //   </>
  // );
}
export default App;
