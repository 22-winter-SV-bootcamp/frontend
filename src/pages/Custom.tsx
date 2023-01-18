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
    hair: 'short',
    hairColor: 'red',
    top: 'blaser',
    topColor: 'blue',
    bottom: 'jeans',
    bottomColor: 'green',
    background: 'type1',
  });
  const location = useLocation();
  const svgRef: any = useRef();
  console.log(svgRef);
  console.log(location.state.result);

  useEffect(() => {
    let { top, bottom } = location.state.result[0];

    setInfo((pre: any) => ({ ...pre, top: top, bottom: bottom }));
  }, []);

  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div ref={svgRef}>
        <CustomSVG info={info}></CustomSVG>
      </div>

      <CustomInfo svgRef={svgRef} info={info} setInfo={setInfo}></CustomInfo>
    </Box>
  );
};

export default Custom;
