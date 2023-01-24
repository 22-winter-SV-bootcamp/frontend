import SVGFemaleDenim from '@/svgComponents/female/bottom/SVGFemaleDenim';
import SVGFemaleHalf_shortpants from '@/svgComponents/female/bottom/SVGFemaleHalf_shortpants';
import SVGFemaleLeggings from '@/svgComponents/female/bottom/SVGFemaleLeggings';
import SVGFemaleSkirt from '@/svgComponents/female/bottom/SVGFemaleSkirt';
import SVGFemaleSlacks from '@/svgComponents/female/bottom/SVGFemaleSlacks';
import SVGFemaleSweatpants from '@/svgComponents/female/bottom/SVGFemaleSweatpants';
import SVGFemaleLong from '@/svgComponents/female/hair/SVGFemaleLong';
import SVGFemaleBasic_neck_pole from '@/svgComponents/female/top/SVGFemaleBasic_neck_pole';
import SVGFemaleBasic_t_shirts from '@/svgComponents/female/top/SVGFemaleBasic_t_shirts';
import SVGFemaleBlazer from '@/svgComponents/female/top/SVGFemaleBlazer';
import SVGFemaleBlouse from '@/svgComponents/female/top/SVGFemaleBlouse';
import SVGFemaleCardigan from '@/svgComponents/female/top/SVGFemaleCardigan';
import SVGFemaleCoat from '@/svgComponents/female/top/SVGFemaleCoat';
import SVGFemaleHoodi from '@/svgComponents/female/top/SVGFemaleHoodi';
import SVGFemaleJumper from '@/svgComponents/female/top/SVGFemaleJumper';
import SVGFemaleMustang from '@/svgComponents/female/top/SVGFemaleMustang';
import SVGFemaleOnepiece from '@/svgComponents/female/top/SVGFemaleOnepiece';
import SVGFemalePkshirts from '@/svgComponents/female/top/SVGFemalePkshirts';
import SVGFemaleShirts from '@/svgComponents/female/top/SVGFemaleShirts';
import SVGFemaleSweater from '@/svgComponents/female/top/SVGFemaleSweater';
import SVGFemaleSweatshirts from '@/svgComponents/female/top/SVGFemaleSweatshirts';
import SVGFemaleT_shirts from '@/svgComponents/female/top/SVGFemaleT_shirts';
import SVGMaleDenim from '@/svgComponents/male/bottom/SVGMaleDenim';
import SVGMaleHalf_shortpants from '@/svgComponents/male/bottom/SVGMaleHalf_shortpants';
import SVGMaleLeggings from '@/svgComponents/male/bottom/SVGMaleLeggings';
import SVGMaleSkirt from '@/svgComponents/male/bottom/SVGMaleSkirt';
import SVGMaleSlacks from '@/svgComponents/male/bottom/SVGMaleSlacks';
import SVGMaleSweatpants from '@/svgComponents/male/bottom/SVGMaleSweatpants';
import SVGMaleMiddle from '@/svgComponents/male/hair/SVGMaleMiddle';
import SVGMaleBasic_neck_pole from '@/svgComponents/male/top/SVGMaleBasic_neck_pole';
import SVGMaleBasic_t_shirts from '@/svgComponents/male/top/SVGMaleBasic_t_shirts';
import SVGMaleBlazer from '@/svgComponents/male/top/SVGMaleBlazer';
import SVGMaleBlouse from '@/svgComponents/male/top/SVGMaleBlouse';
import SVGMaleCardigan from '@/svgComponents/male/top/SVGMaleCardigan';
import SVGMaleCoat from '@/svgComponents/male/top/SVGMaleCoat';
import SVGMaleHoodi from '@/svgComponents/male/top/SVGMaleHoodi';
import SVGMaleJumper from '@/svgComponents/male/top/SVGMaleJumper';
import SVGMaleMustang from '@/svgComponents/male/top/SVGMaleMustang';
import SVGMaleOnepiece from '@/svgComponents/male/top/SVGMaleOnepiece';
import SVGMalePkshirts from '@/svgComponents/male/top/SVGMalePkshirts';
import SVGMaleShirts from '@/svgComponents/male/top/SVGMaleShirts';
import SVGMaleSweater from '@/svgComponents/male/top/SVGMaleSweater';
import SVGMaleSweatshirts from '@/svgComponents/male/top/SVGMaleSweatshirts';
import SVGMaleT_shirts from '@/svgComponents/male/top/SVGMaleT_shirts';
import { Button, Tooltip, Typography } from '@mui/material';
import { Box, Stack } from '@mui/system';
import React from 'react';

type ColorArrType = {
  [key: string]: string;
};
type SVGComponentsType = {
  [key: string]: { [key: string]: { [key: string]: JSX.Element } };
};

const CheckItemList = ({ info, gender, title, setInfo, arr, select }: any) => {
  let sub = 85;
  let detail = 10;
  let viewBoxTop = '370 340 180 180';
  let viewBoxBottom = '360 440 180 180';
  let { hairColor, topColor, bottomColor } = info;
  const colorArr: ColorArrType = {
    white: '#FFFFFF',
    melangeGrey: '#D4D4D4',
    grey: '#A6A6A6',
    coolGrey: '#4B5053',
    charcoal: '#444444',
    black: '#2B2929',
    ivory: '#F5EFEF',
    lightBeige: '#DED3AA',
    beige: '#D6BB87',
    peachBeige: '#DBBC97',
    deepBeige: '#BEA78C',
    darkBeige: '#A3907B',
    beigeBrown: '#7B6146',
    deepbrown: '#4A3A2A',
    darkBrown: '#362710',
    blond: '#FFECAE',
    lightBrown: '#A36B3E',
    brickBrown: '#854809',
    brown: '#54310A',
    khaki: '#3C492A',
    dustyGreen: '#76A973',
    lightBlue: '#CCE7FF',
    middleBlue: '#417797',
    deepBlue: '#165690',
    indigoBlue: '#1A2B47',
    burgundy: '#740E21',
    orange: '#D98200',
    black2: '#FFCB00',
    navy: '#2C376F',
    purple: '#8A00AC',
    skyBlue: '#9CB0FF',
    sora: '#5C71C9',
    blue: '#0088D4',
    pink: '#FFB6B6',
    magentaPink: '#EE6989',
    red: '#A40707',
    pastelGreen: '#87B24A',
    lightGreen: '#629021',
    green: '#0A7C00',
    neonBlue: '#02ABCF',
    coral: '#DF5353',
    skin: '#FFD521',
  };
  const SVGComponents: SVGComponentsType = {
    female: {
      inner: {
        basic_neck_pole: (
          <SVGFemaleBasic_neck_pole
            main={'white'}
            sub={sub}
            detail={detail}
            viewBox={viewBoxTop}
          ></SVGFemaleBasic_neck_pole>
        ),
        basic_t_shirts: (
          <SVGFemaleBasic_t_shirts
            main={'white'}
            sub={sub}
            detail={detail}
            viewBox={viewBoxTop}
          ></SVGFemaleBasic_t_shirts>
        ),
      },
      top: {
        blouse: (
          <SVGFemaleBlouse
            main={colorArr[topColor]}
            sub={sub}
            detail={detail}
            viewBox={viewBoxTop}
          ></SVGFemaleBlouse>
        ),

        blazer: (
          <SVGFemaleBlazer
            main={colorArr[topColor]}
            sub={sub}
            detail={detail}
            viewBox={viewBoxTop}
          ></SVGFemaleBlazer>
        ),
        cardigan: (
          <SVGFemaleCardigan
            main={colorArr[topColor]}
            sub={sub}
            detail={detail}
            viewBox={viewBoxTop}
          ></SVGFemaleCardigan>
        ),
        coat: (
          <SVGFemaleCoat
            main={colorArr[topColor]}
            sub={sub}
            detail={detail}
            viewBox="330 335 250 250"
          ></SVGFemaleCoat>
        ),
        hoodi: (
          <SVGFemaleHoodi
            main={colorArr[topColor]}
            sub={sub}
            detail={detail}
            viewBox={viewBoxTop}
          ></SVGFemaleHoodi>
        ),
        jumper: (
          <SVGFemaleJumper
            main={colorArr[topColor]}
            sub={sub}
            detail={detail}
            viewBox={viewBoxTop}
          ></SVGFemaleJumper>
        ),
        mustang: (
          <SVGFemaleMustang
            main={colorArr[topColor]}
            sub={sub}
            detail={detail}
            viewBox={viewBoxTop}
          ></SVGFemaleMustang>
        ),
        onepiece: (
          <SVGFemaleOnepiece
            main={colorArr[topColor]}
            sub={sub}
            detail={detail}
            viewBox="330 335 250 250"
          ></SVGFemaleOnepiece>
        ),
        pkshirts: (
          <SVGFemalePkshirts
            main={colorArr[topColor]}
            sub={sub}
            detail={detail}
            viewBox={viewBoxTop}
          ></SVGFemalePkshirts>
        ),
        shirts: (
          <SVGFemaleShirts
            main={colorArr[topColor]}
            sub={sub}
            detail={detail}
            viewBox={viewBoxTop}
          ></SVGFemaleShirts>
        ),
        sweater: (
          <SVGFemaleSweater
            main={colorArr[topColor]}
            sub={sub}
            detail={detail}
            viewBox={viewBoxTop}
          ></SVGFemaleSweater>
        ),
        sweatshirts: (
          <SVGFemaleSweatshirts
            main={colorArr[topColor]}
            sub={sub}
            detail={detail}
            viewBox={viewBoxTop}
          ></SVGFemaleSweatshirts>
        ),
        t_shirts: (
          <SVGFemaleT_shirts
            main={colorArr[topColor]}
            sub={sub}
            detail={detail}
            viewBox={viewBoxTop}
          ></SVGFemaleT_shirts>
        ),
      },
      bottom: {
        denim: (
          <SVGFemaleDenim
            main={bottomColor}
            sub={sub}
            detail={detail}
            viewBox={viewBoxBottom}
          ></SVGFemaleDenim>
        ),
        half_shortpants: (
          <SVGFemaleHalf_shortpants
            main={bottomColor}
            sub={sub}
            detail={detail}
            viewBox={viewBoxBottom}
          ></SVGFemaleHalf_shortpants>
        ),
        leggings: (
          <SVGFemaleLeggings
            main={bottomColor}
            sub={sub}
            detail={detail}
            viewBox={viewBoxBottom}
          ></SVGFemaleLeggings>
        ),
        skirt: (
          <SVGFemaleSkirt
            main={bottomColor}
            sub={sub}
            detail={detail}
            viewBox={viewBoxBottom}
          ></SVGFemaleSkirt>
        ),
        slacks: (
          <SVGFemaleSlacks
            main={bottomColor}
            sub={sub}
            detail={detail}
            viewBox={viewBoxBottom}
          ></SVGFemaleSlacks>
        ),
        sweatpants: (
          <SVGFemaleSweatpants
            main={bottomColor}
            sub={sub}
            detail={detail}
            viewBox={viewBoxBottom}
          ></SVGFemaleSweatpants>
        ),
      },
      hair: {
        long: (
          <SVGFemaleLong
            main={hairColor}
            sub={sub}
            detail={detail}
            viewBox="300 100 300 300"
          ></SVGFemaleLong>
        ),
      },
    },
    male: {
      inner: {
        basic_neck_pole: (
          <SVGMaleBasic_neck_pole
            main={colorArr[topColor]}
            sub={sub}
            detail={detail}
            viewBox={viewBoxTop}
          ></SVGMaleBasic_neck_pole>
        ),
        basic_t_shirts: (
          <SVGMaleBasic_t_shirts
            main={colorArr[topColor]}
            sub={sub}
            detail={detail}
            viewBox={viewBoxTop}
          ></SVGMaleBasic_t_shirts>
        ),
      },
      top: {
        blouse: (
          <SVGMaleBlouse
            main={colorArr[topColor]}
            sub={sub}
            detail={detail}
            viewBox={viewBoxTop}
          ></SVGMaleBlouse>
        ),

        blazer: (
          <SVGMaleBlazer
            main={colorArr[topColor]}
            sub={sub}
            detail={detail}
            viewBox={viewBoxTop}
          ></SVGMaleBlazer>
        ),
        cardigan: (
          <SVGMaleCardigan
            main={colorArr[topColor]}
            sub={sub}
            detail={detail}
            viewBox={viewBoxTop}
          ></SVGMaleCardigan>
        ),
        coat: (
          <SVGMaleCoat
            main={colorArr[topColor]}
            sub={sub}
            detail={detail}
            viewBox={viewBoxTop}
          ></SVGMaleCoat>
        ),
        hoodi: (
          <SVGMaleHoodi
            main={colorArr[topColor]}
            sub={sub}
            detail={detail}
            viewBox={viewBoxTop}
          ></SVGMaleHoodi>
        ),
        jumper: (
          <SVGMaleJumper
            main={colorArr[topColor]}
            sub={sub}
            detail={detail}
            viewBox={viewBoxTop}
          ></SVGMaleJumper>
        ),
        mustang: (
          <SVGMaleMustang
            main={colorArr[topColor]}
            sub={sub}
            detail={detail}
            viewBox={viewBoxTop}
          ></SVGMaleMustang>
        ),
        onepiece: (
          <SVGMaleOnepiece
            main={colorArr[topColor]}
            sub={sub}
            detail={detail}
            viewBox={viewBoxTop}
          ></SVGMaleOnepiece>
        ),
        pkshirts: (
          <SVGMalePkshirts
            main={colorArr[topColor]}
            sub={sub}
            detail={detail}
            viewBox={viewBoxTop}
          ></SVGMalePkshirts>
        ),
        shirts: (
          <SVGMaleShirts
            main={colorArr[topColor]}
            sub={sub}
            detail={detail}
            viewBox={viewBoxTop}
          ></SVGMaleShirts>
        ),
        sweater: (
          <SVGMaleSweater
            main={colorArr[topColor]}
            sub={sub}
            detail={detail}
            viewBox={viewBoxTop}
          ></SVGMaleSweater>
        ),
        sweatshirts: (
          <SVGMaleSweatshirts
            main={colorArr[topColor]}
            sub={sub}
            detail={detail}
            viewBox={viewBoxTop}
          ></SVGMaleSweatshirts>
        ),
        t_shirts: (
          <SVGMaleT_shirts
            main={colorArr[topColor]}
            sub={sub}
            detail={detail}
            viewBox={viewBoxTop}
          ></SVGMaleT_shirts>
        ),
      },
      bottom: {
        denim: (
          <SVGMaleDenim
            main={colorArr[bottomColor]}
            sub={sub}
            detail={detail}
            viewBox={viewBoxBottom}
          ></SVGMaleDenim>
        ),
        half_shortpants: (
          <SVGMaleHalf_shortpants
            main={colorArr[bottomColor]}
            sub={sub}
            detail={detail}
            viewBox={viewBoxBottom}
          ></SVGMaleHalf_shortpants>
        ),
        leggings: (
          <SVGMaleLeggings
            main={colorArr[bottomColor]}
            sub={sub}
            detail={detail}
            viewBox={viewBoxBottom}
          ></SVGMaleLeggings>
        ),
        skirt: (
          <SVGMaleSkirt
            main={colorArr[bottomColor]}
            sub={sub}
            detail={detail}
            viewBox={viewBoxBottom}
          ></SVGMaleSkirt>
        ),
        slacks: (
          <SVGMaleSlacks
            main={colorArr[bottomColor]}
            sub={sub}
            detail={detail}
            viewBox={viewBoxBottom}
          ></SVGMaleSlacks>
        ),
        sweatpants: (
          <SVGMaleSweatpants
            main={colorArr[bottomColor]}
            sub={sub}
            detail={detail}
            viewBox={viewBoxBottom}
          ></SVGMaleSweatpants>
        ),
      },
      hair: {
        middle: (
          <SVGMaleMiddle
            main={colorArr[hairColor]}
            sub={sub}
            detail={detail}
            viewBox="300 100 300 300"
          ></SVGMaleMiddle>
        ),
      },
    },
    background: {
      background: {
        background1: (
          <img
            width="100%"
            height="100%"
            src="src/assets/custom/background/background1.png"
          ></img>
        ),
        background2: (
          <img
            width="100%"
            height="100%"
            src="src/assets/custom/background/background2.png"
          ></img>
        ),
        background3: (
          <img
            width="100%"
            height="100%"
            src="src/assets/custom/background/background3.png"
          ></img>
        ),
      },
    },
  };
  console.log('hair 확인', SVGComponents[gender]['hair']['long']);
  return (
    <Box>
      <Typography variant="h4">{title}</Typography>
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          height: 'auto',
          overflow: 'auto',
          overflowY: 'hidden',
        }}
      >
        {arr.map((v: any) => (
          <Tooltip title={v}>
            <Button
              sx={{ width: 'auto' }}
              key={v}
              onClick={() => {
                setInfo((pre: any) => ({ ...pre, [select]: v }));
              }}
            >
              {select === 'background' ? (
                <Box
                  width={100}
                  component="img"
                  alt={v}
                  src={`src/assets/custom/background/${v}.png`}
                />
              ) : (
                SVGComponents[gender][select][v]
              )}
            </Button>
          </Tooltip>
        ))}
      </Box>
    </Box>
  );
};

export default CheckItemList;
