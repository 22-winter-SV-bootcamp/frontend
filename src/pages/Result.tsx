import { ResultImg } from '@/components/result/ResultImg';
import React from 'react';
import { useLocation } from 'react-router-dom';

const Result = () => {
  let location = useLocation();
  console.log('location state', location.state);

  return (
    <>
      <div>Result Page {location.state.link}</div>
      <ResultImg />
    </>
  );
};

export default Result;
