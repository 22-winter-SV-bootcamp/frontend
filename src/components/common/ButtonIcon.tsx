import { Box, Button } from '@mui/material';
import React, { useState } from 'react';

const ButtonIcon = ({ title, setOpen, setPage }: any) => {
  return (
    <Button
      onClick={() => {
        if (title === 'rank') setOpen(true);
        else setPage((page: number) => page + 1);
      }}
      variant="contained"
      color="inherit"
      sx={{
        boxShadow: '3px 3px 0px 0px #C7C7C7',
        padding: 2,
        width: '40%',
        height: '100%',
        borderRadius: '50px',
        backgroundColor: '#FFFFFF',
        fontSize: 'inherit',
      }}
    >
      <Box
        sx={{ opacity: 0.5 }}
        component="img"
        width="3em"
        src={`/assets/pages/main/${title}.png`}
      ></Box>
    </Button>
  );
};

export default ButtonIcon;
