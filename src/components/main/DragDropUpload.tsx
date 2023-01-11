import React, { DragEvent, useState } from 'react';
import UploadPng from '/Upload.png';
import { postTaskId } from '@/apis/postTaskId';

import { Box } from '@mui/material';

const DragDropUpload = () => {
  const UploadFileStyle = {};
  let [taskId, setTaskId] = useState('');

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };
  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    let formData = new FormData();
    let f = e.dataTransfer.files[0];
    formData.append('file', f);

    (async () => {
      // let res = await postTaskId(formData);
      // console.log(res);
    })();
  };
  return (
    <>
      <Box onDragOver={handleDragOver} onDrop={handleDrop}>
        <Box>
          <Box component="img" src={UploadPng} alt="Upload" />
        </Box>
      </Box>
    </>
  );
};

export default DragDropUpload;
