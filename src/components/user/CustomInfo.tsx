import { Check } from '@mui/icons-material';
import React, { useState } from 'react';
import CheckItem from './common/CheckItem';

const CustomInfo = () => {
  const colorArr = {
    red: '#ee0f0f',
    blue: '#083e73',
    green: '#34a051',
    pink: '#c53595',
  };
  const hairArr = {};
  const topArr = {};
  const bottomArr = {};
  const backgroundArr = { one: '1.png', two: '2.png', three: '3.png' };
  const [info, setInfo] = useState({
    gender: 'female',
    hair: 'short',
    hairColor: 'red',
    top: 'blaser',
    topColor: 'blue',
    bottom: 'jeans',
    bottomColor: 'green',
    background: 'type1',
  });

  return (
    <div>
      <CheckItem info={info} title="gender"></CheckItem>
      <CheckItem info={info} title="hair"></CheckItem>
      <CheckItem info={info} title="top"></CheckItem>
      <CheckItem info={info} title="bottom"></CheckItem>
      <CheckItem info={info} title="background"></CheckItem>
    </div>
  );
};

export default CustomInfo;
