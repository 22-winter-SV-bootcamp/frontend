import React, { DragEvent, useState } from 'react';
import UploadPng from '/Upload.png';
<<<<<<< Updated upstream
import { postTaskId } from '@/apis/postTaskId';
=======

import { Box } from '@mui/material';
>>>>>>> Stashed changes

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
      <div onDragOver={handleDragOver} onDrop={handleDrop}>
        <div>
          <img src={UploadPng} alt="Upload" />
        </div>
      </div>
    </>
  );
};

export default DragDropUpload;
