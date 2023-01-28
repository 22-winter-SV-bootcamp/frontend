import { Box, Button } from '@mui/material';
import React, { useState } from 'react';

const ButtonIcon = ({ title, setOpen }: any) => {
  return (
    <Button
      variant="contained"
      color="inherit"
      sx={{
        boxShadow: '5px 5px 0px 0px #C7C7C7',
        padding: 2,
        width: 70,
        height: 70,
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
      }}
    >
      <Box
        onClick={() => {
          if (title === 'rank') setOpen(true);
        }}
        sx={{ opacity: 0.5 }}
        component="img"
        width="100%"
        height="100%"
        src={`/assets/pages/main/${title}.png`}
      ></Box>
    </Button>
  );
};

export default ButtonIcon;
