import { ResultImg } from '@/components/result/ResultImg';
import { ResultPage } from '@/components/result/ResultPage';
import React from 'react';
import { useLocation } from 'react-router-dom';

const Result = () => {
  let location = useLocation();
  console.log('location state', location.state);

  return (
    <>
      {/* <ResultImg /> */}
      <ResultPage />
    </>
  );
};

export default Result;
