import { Box } from '@mui/system';
import React from 'react';
import CheckItemList from './common/CheckItemList';

const CustomSelectModal = () => {
  return (
    <Box>
      <CheckItemList></CheckItemList>
      <CheckItemList></CheckItemList>
      <Box>Done</Box>
    </Box>
  );
};

export default CustomSelectModal;
