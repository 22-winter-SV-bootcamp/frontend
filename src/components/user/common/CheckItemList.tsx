import SVGFemaleDenim from '@/svgComponents/female/bottom/SVGFemaleDenim';
import SVGFemaleHalf_shortpants from '@/svgComponents/female/bottom/SVGFemaleHalf_shortpants';
import SVGFemaleLeggings from '@/svgComponents/female/bottom/SVGFemaleLeggings';
import SVGFemaleSkirt from '@/svgComponents/female/bottom/SVGFemaleSkirt';
import SVGFemaleSlacks from '@/svgComponents/female/bottom/SVGFemaleSlacks';
import SVGFemaleSweatpants from '@/svgComponents/female/bottom/SVGFemaleSweatpants';
import SVGFemaleLong from '@/svgComponents/female/hair/SVGFemaleLong';
import SVGFemaleBasic_neck_pole from '@/svgComponents/female/inner/SVGFemaleBasic_neck_pole';
import SVGFemaleBasic_t_shirts from '@/svgComponents/female/inner/SVGFemaleBasic_t_shirts';
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
import SVGMaleBasic_neck_pole from '@/svgComponents/male/inner/SVGMaleBasic_neck_pole';
import SVGMaleBasic_t_shirts from '@/svgComponents/male/inner/SVGMaleBasic_t_shirts';
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
import { Box, Stack } from '@mui/material';
import React from 'react';

type ColorArrType = {
  [key: string]: string;
};
type SVGComponentsType = {
  [key: string]: { [key: string]: { [key: string]: JSX.Element } };
};

const CheckItemList = ({ info, gender, title, setInfo, arr, select }: any) => {
  let sub = 85;
  let detail = 70;
  let viewBoxFemailTop = '370 340 180 180';
  let viewBoxMailTop = '350 305 230 230';
  let viewBoxFemailBottom = '360 440 180 180';
  let viewBoxMailBottom = '370 440 180 180';
  let viewBoxInner = '355 320 220 220';
  let { hairColor, topColor, bottomColor, innerColor } = info;
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
            main={colorArr[innerColor]}
            sub={sub}
            detail={detail}
            viewBox={viewBoxFemailTop}
          ></SVGFemaleBasic_neck_pole>
        ),
        basic_t_shirts: (
          <SVGFemaleBasic_t_shirts
            main={colorArr[innerColor]}
            sub={sub}
            detail={detail}
            viewBox={viewBoxFemailTop}
          ></SVGFemaleBasic_t_shirts>
        ),
      },
      top: {
        blouse: (
          <SVGFemaleBlouse
            main={colorArr[topColor]}
            sub={sub}
            detail={detail}
            viewBox={viewBoxFemailTop}
          ></SVGFemaleBlouse>
        ),

        blazer: (
          <SVGFemaleBlazer
            main={colorArr[topColor]}
            sub={sub}
            detail={detail}
            viewBox={viewBoxFemailTop}
          ></SVGFemaleBlazer>
        ),
        cardigan: (
          <SVGFemaleCardigan
            main={colorArr[topColor]}
            sub={sub}
            detail={detail}
            viewBox={viewBoxFemailTop}
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
            viewBox={viewBoxFemailTop}
          ></SVGFemaleHoodi>
        ),
        jumper: (
          <SVGFemaleJumper
            main={colorArr[topColor]}
            sub={sub}
            detail={detail}
            viewBox={viewBoxFemailTop}
          ></SVGFemaleJumper>
        ),
        mustang: (
          <SVGFemaleMustang
            main={colorArr[topColor]}
            sub={sub}
            detail={detail}
            viewBox={viewBoxFemailTop}
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
            viewBox={viewBoxFemailTop}
          ></SVGFemalePkshirts>
        ),
        shirts: (
          <SVGFemaleShirts
            main={colorArr[topColor]}
            sub={sub}
            detail={detail}
            viewBox={viewBoxFemailTop}
          ></SVGFemaleShirts>
        ),
        sweater: (
          <SVGFemaleSweater
            main={colorArr[topColor]}
            sub={sub}
            detail={detail}
            viewBox={viewBoxFemailTop}
          ></SVGFemaleSweater>
        ),
        sweatshirts: (
          <SVGFemaleSweatshirts
            main={colorArr[topColor]}
            sub={sub}
            detail={detail}
            viewBox={viewBoxFemailTop}
          ></SVGFemaleSweatshirts>
        ),
        t_shirts: (
          <SVGFemaleT_shirts
            main={colorArr[topColor]}
            sub={sub}
            detail={detail}
            viewBox={viewBoxFemailTop}
          ></SVGFemaleT_shirts>
        ),
      },
      bottom: {
        denim: (
          <SVGFemaleDenim
            main={colorArr[bottomColor]}
            sub={sub}
            detail={detail}
            viewBox={viewBoxFemailBottom}
          ></SVGFemaleDenim>
        ),
        half_shortpants: (
          <SVGFemaleHalf_shortpants
            main={colorArr[bottomColor]}
            sub={sub}
            detail={detail}
            viewBox={viewBoxFemailBottom}
          ></SVGFemaleHalf_shortpants>
        ),
        leggings: (
          <SVGFemaleLeggings
            main={colorArr[bottomColor]}
            sub={sub}
            detail={detail}
            viewBox={viewBoxFemailBottom}
          ></SVGFemaleLeggings>
        ),
        skirt: (
          <SVGFemaleSkirt
            main={colorArr[bottomColor]}
            sub={sub}
            detail={detail}
            viewBox={viewBoxFemailBottom}
          ></SVGFemaleSkirt>
        ),
        slacks: (
          <SVGFemaleSlacks
            main={colorArr[bottomColor]}
            sub={sub}
            detail={detail}
            viewBox={viewBoxFemailBottom}
          ></SVGFemaleSlacks>
        ),
        sweatpants: (
          <SVGFemaleSweatpants
            main={colorArr[bottomColor]}
            sub={sub}
            detail={detail}
            viewBox={viewBoxFemailBottom}
          ></SVGFemaleSweatpants>
        ),
      },
      hair: {
        long: (
          <SVGFemaleLong
            main={colorArr[hairColor]}
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
            main={colorArr[innerColor]}
            sub={sub}
            detail={detail}
            viewBox={viewBoxInner}
          ></SVGMaleBasic_neck_pole>
        ),
        basic_t_shirts: (
          <SVGMaleBasic_t_shirts
            main={colorArr[innerColor]}
            sub={sub}
            detail={detail}
            viewBox={viewBoxInner}
          ></SVGMaleBasic_t_shirts>
        ),
      },
      top: {
        blouse: (
          <SVGMaleBlouse
            main={colorArr[topColor]}
            sub={sub}
            detail={detail}
            viewBox={viewBoxMailTop}
          ></SVGMaleBlouse>
        ),

        blazer: (
          <SVGMaleBlazer
            main={colorArr[topColor]}
            sub={sub}
            detail={detail}
            viewBox={viewBoxMailTop}
          ></SVGMaleBlazer>
        ),
        cardigan: (
          <SVGMaleCardigan
            main={colorArr[topColor]}
            sub={sub}
            detail={detail}
            viewBox={viewBoxMailTop}
          ></SVGMaleCardigan>
        ),
        coat: (
          <SVGMaleCoat
            main={colorArr[topColor]}
            sub={sub}
            detail={detail}
            viewBox="340 315 250 250"
          ></SVGMaleCoat>
        ),
        hoodi: (
          <SVGMaleHoodi
            main={colorArr[topColor]}
            sub={sub}
            detail={detail}
            viewBox={viewBoxMailTop}
          ></SVGMaleHoodi>
        ),
        jumper: (
          <SVGMaleJumper
            main={colorArr[topColor]}
            sub={sub}
            detail={detail}
            viewBox={viewBoxMailTop}
          ></SVGMaleJumper>
        ),
        mustang: (
          <SVGMaleMustang
            main={colorArr[topColor]}
            sub={sub}
            detail={detail}
            viewBox={viewBoxMailTop}
          ></SVGMaleMustang>
        ),
        onepiece: (
          <SVGMaleOnepiece
            main={colorArr[topColor]}
            sub={sub}
            detail={detail}
            viewBox="340 325 255 255"
          ></SVGMaleOnepiece>
        ),
        pkshirts: (
          <SVGMalePkshirts
            main={colorArr[topColor]}
            sub={sub}
            detail={detail}
            viewBox={viewBoxMailTop}
          ></SVGMalePkshirts>
        ),
        shirts: (
          <SVGMaleShirts
            main={colorArr[topColor]}
            sub={sub}
            detail={detail}
            viewBox={viewBoxMailTop}
          ></SVGMaleShirts>
        ),
        sweater: (
          <SVGMaleSweater
            main={colorArr[topColor]}
            sub={sub}
            detail={detail}
            viewBox={viewBoxMailTop}
          ></SVGMaleSweater>
        ),
        sweatshirts: (
          <SVGMaleSweatshirts
            main={colorArr[topColor]}
            sub={sub}
            detail={detail}
            viewBox={viewBoxMailTop}
          ></SVGMaleSweatshirts>
        ),
        t_shirts: (
          <SVGMaleT_shirts
            main={colorArr[topColor]}
            sub={sub}
            detail={detail}
            viewBox={viewBoxMailTop}
          ></SVGMaleT_shirts>
        ),
      },
      bottom: {
        denim: (
          <SVGMaleDenim
            main={colorArr[bottomColor]}
            sub={sub}
            detail={detail}
            viewBox={viewBoxMailBottom}
          ></SVGMaleDenim>
        ),
        half_shortpants: (
          <SVGMaleHalf_shortpants
            main={colorArr[bottomColor]}
            sub={sub}
            detail={detail}
            viewBox={viewBoxMailBottom}
          ></SVGMaleHalf_shortpants>
        ),
        leggings: (
          <SVGMaleLeggings
            main={colorArr[bottomColor]}
            sub={sub}
            detail={detail}
            viewBox={viewBoxMailBottom}
          ></SVGMaleLeggings>
        ),
        skirt: (
          <SVGMaleSkirt
            main={colorArr[bottomColor]}
            sub={sub}
            detail={detail}
            viewBox={viewBoxMailBottom}
          ></SVGMaleSkirt>
        ),
        slacks: (
          <SVGMaleSlacks
            main={colorArr[bottomColor]}
            sub={sub}
            detail={detail}
            viewBox={viewBoxMailBottom}
          ></SVGMaleSlacks>
        ),
        sweatpants: (
          <SVGMaleSweatpants
            main={colorArr[bottomColor]}
            sub={sub}
            detail={detail}
            viewBox={viewBoxMailBottom}
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
                  src={`/assets/custom/background/${v}.png`}
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
