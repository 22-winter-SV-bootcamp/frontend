<<<<<<< HEAD
import React from "react";

const Result = () => {
  return <div>Result Page</div>;
};

export default Result;
=======
import React from 'react';
import { useLocation } from 'react-router-dom';

const Result = () => {
  let location = useLocation();
  console.log('location state', location.state);

  return <div>Result Page {location.state.link}</div>;
};

export default Result;
>>>>>>> e3403ce9cef98f556be1c94cb0800098dd6ea5fb
