import CustomInfo from '@/components/user/CustomInfo';
import CustomSelectModal from '@/components/user/CustomSelectModal';
import CustomSVG from '@/components/user/CustomSVG';
import { SettingsInputAntennaTwoTone } from '@mui/icons-material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

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
  console.log(location.state.result);

  useEffect(() => {
    const { top, bottom } = location.state.result[0];
    setInfo((pre: any) => ({ ...pre, top, bottom }));
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
      <CustomSVG info={info}></CustomSVG>

      <CustomInfo info={info} setInfo={setInfo}></CustomInfo>
    </Box>
  );
};

export default Custom;
