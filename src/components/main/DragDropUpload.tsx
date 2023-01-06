import React, { DragEvent, useState } from 'react';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { postTaskId } from '@/apis/postTaskId';

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
      let res = await postTaskId(formData);
      console.log(res);
    })();
  };
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',

          width: 'auto',
          height: '100vh',
          background: '#F5F5F5',
          margin: '10rem',

          boxSizing: 'border-box',

          border: '10px solid',
          borderStyle: 'dashed dashed',
        }}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        {/* <UploadFileIcon fontSize="large"></UploadFileIcon> */}
        <img
          style={{ width: '10em', userSelect: 'none' }}
          src="/public/Upload.png"
          alt="Upload"
        />
      </div>
    </>
  );
};

export default DragDropUpload;
