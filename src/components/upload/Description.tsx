import { Box, Typography } from '@mui/material';

const Description = () => {
  const textStyle = {
    fontWeight: 'medium',
    fontFamily: 'Jua',
    fontSize: '1em',
    color: '#FFFFFF',
    mb: '10px',
  };
  return (
    <>
      <Typography variant="h3" sx={textStyle}>
        1. 사진을 올린다.
      </Typography>
      <Typography variant="h3" sx={textStyle}>
        2. 색상을 커스텀한다.
      </Typography>
      <Typography variant="h3" sx={textStyle}>
        3. 저장후 자랑한다.
      </Typography>
    </>
  );
};

export default Description;
