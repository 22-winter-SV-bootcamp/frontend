import CustomInfo from '@/components/user/CustomInfo';
import CustomSelectModal from '@/components/user/CustomSelectModal';
import CustomSVG from '@/components/user/CustomSVG';
import { SettingsInputAntennaTwoTone } from '@mui/icons-material';
import { Box } from '@mui/system';
import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';
import * as htmlToImage from 'html-to-image';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';
const Custom = () => {
  const [info, setInfo] = useState({
    gender: 'female',
    hair: 'long',
    hairColor: 'red',
    top: 'blaser',
    topColor: 'blue',
    bottom: 'jeans',
    bottomColor: 'green',
    background: 'background1',
  });
  const location = useLocation();
  const svgRef: any = useRef();
  console.log(svgRef);
  console.log(location.state.result);

  useEffect(() => {
    // TODO: 결과값 필터링 하기
    let { top, bottom } = location.state.result[0];

    if (top === '-blazer') top = 'blazer';
    if (top === 't-shirts') top = 't_shirts';
    if (bottom === 'Half-shortpants') top = 'half_shortpants';

    setInfo((pre: any) => ({ ...pre, top: top, bottom: bottom }));
  }, []);

  return (
    <Box
      sx={{
        background: 'black',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div style={{ width: '60%', height: '60%' }} ref={svgRef}>
        <CustomSVG ref={svgRef} info={info}></CustomSVG>
      </div>

      <CustomInfo svgRef={svgRef} info={info} setInfo={setInfo}></CustomInfo>
    </Box>
  );
};

export default Custom;
