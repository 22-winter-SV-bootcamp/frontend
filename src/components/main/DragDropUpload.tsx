import React, { DragEvent, useState } from 'react';
import UploadPng from '/Upload.png';
import bart from '../../assets/bart.png';
import titleone from '../../assets/titleone.png';
import titletwo from '../../assets/titletwo.png';
import { postTaskId } from '@/apis/postTaskId';

import { Box, Hidden } from '@mui/material';
import { display, height, padding, positions } from '@mui/system';

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
    <Box
      sx={{
        backgroundColor: '#F8CD24',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          width: '100%',
          minWidth: 400,
          maxWidth: 600,
          height: '100%',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            width: '100%',
            height: '25%',
          }}
        >
          <Box
            component="img"
            src={titleone}
            alt="titleone"
            sx={{ width: 250, marginRight: 13 }}
          />
          <Box
            component="img"
            src={titletwo}
            alt="titletwo"
            sx={{ width: 200, marginLeft: 18 }}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '55%',
            marginTop: -6,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '50%',
              height: '70%',

              borderRadius: '10%',
              backgroundColor: 'rgba(255,255,255,0.7)',
              border: '3px dashed black',
            }}
          >
            <Box
              component="img"
              src={UploadPng}
              alt="UploadIcon"
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            />
          </Box>
        </Box>

        <Box
          component="img"
          src={bart}
          sx={{
            right: 0,
            bottom: 0,

            position: 'absolute',
            maxWidth: 300,
            maxHeight: 300,
          }}
        ></Box>
      </Box>
    </Box>
  );
};

export default DragDropUpload;
