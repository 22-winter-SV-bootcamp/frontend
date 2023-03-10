import CustomInfo from '@/components/user/CustomInfo';
import CustomSelectModal from '@/components/user/CustomSelectModal';
import CustomSVG from '@/components/user/CustomSVG';
import { SettingsInputAntennaTwoTone } from '@mui/icons-material';
import { createTheme, styled } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';
import * as htmlToImage from 'html-to-image';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';
import resultFilter from '@/utils/method/resultFilter';

const theme = createTheme({
  /* custom MediaQuery */
  breakpoints: {
    values: {
      mobile: 480,
      tablet: 768,
      laptop: 0,
      desktop: 1024,
      bigDesktop: 1400,
    },
  },
});

declare module '@mui/material/styles' {
  /* 타입 스크립트때문에 사용 */
  interface BreakpointOverrides {
    xs: false; // removes the `xs` breakpoint
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true; // adds the `mobile` breakpoint
    tablet: true;
    laptop: true;
    desktop: true;
  }
}

const Box2 = styled('div')(({ theme }) => ({
  [theme.breakpoints.down('mobile')]: {
    flexDirection: 'column',
  },
  // [theme.breakpoints.up('tablet')]: {},
  // [theme.breakpoints.up('desktop')]: {},
}));

const Custom = () => {
  const [info, setInfo] = useState({
    gender: 'female',
    hair: 'long',
    hairColor: 'white',
    top: 'blazer',
    topColor: 'white',
    bottom: 'jeans',
    bottomColor: 'white',
    background: 'background1',
    inner: 'basic_t_shirts',
    innerColor: 'white',
  });
  const location = useLocation();
  const svgRef: any = useRef();
  console.log(svgRef);
  console.log(location.state.result);

  useEffect(() => {
    // TODO: 결과값 필터링 하기
    let result = resultFilter(location.state.result);

    setInfo((pre: any) => ({ ...pre, ...result }));
  }, []);

  return (
    <Box2
      theme={theme}
      sx={{
        background: 'black',
        width: '100vw',
        height: '100vh',
        display: 'flex',

        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          minWidth: 300,
          minHeight: 300,
          maxHeight: 500,
          maxWidth: 500,
        }}
        ref={svgRef}
      >
        <CustomSVG info={info}></CustomSVG>
      </div>
      <CustomInfo svgRef={svgRef} info={info} setInfo={setInfo}></CustomInfo>
    </Box2>
  );
};

export default Custom;
