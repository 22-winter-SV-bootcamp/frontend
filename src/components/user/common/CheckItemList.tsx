import SVGFemaleDenim from '@/svgComponents/female/bottom/SVGFemaleDenim';
import SVGFemaleHalf_shortpants from '@/svgComponents/female/bottom/SVGFemaleHalf_shortpants';
import SVGFemaleLeggings from '@/svgComponents/female/bottom/SVGFemaleLeggings';
import SVGFemaleSkirt from '@/svgComponents/female/bottom/SVGFemaleSkirt';
import SVGFemaleSlacks from '@/svgComponents/female/bottom/SVGFemaleSlacks';
import SVGFemaleSweatpants from '@/svgComponents/female/bottom/SVGFemaleSweatpants';
import SVGFemaleLong from '@/svgComponents/female/hair/SVGFemaleLong';
import SVGFemaleMiddle from '@/svgComponents/female/hair/SVGFemaleMiddle';
import SVGFemaleShort from '@/svgComponents/female/hair/SVGFemaleShort';
import SVGFemaleBasic_Nasi from '@/svgComponents/female/inner/SVGFemaleBasic_Nasi';
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
import SVGMaleLong from '@/svgComponents/male/hair/SVGMaleLong';
import SVGMaleShort from '@/svgComponents/male/hair/SVGMaleShort';
import SVGMaleMiddle from '@/svgComponents/male/hair/SVGMaleShort';
import SVGMaleBasic_Nasi from '@/svgComponents/male/inner/SVGMaleBasic_Nasi';
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
import { setuid } from 'process';
import React, { useState } from 'react';
import CheckColorList from './CheckColorList';

type ColorArrType = {
  [key: string]: string;
};
type SVGComponentsType = {
  [key: string]: { [key: string]: { [key: string]: JSX.Element } };
};

const CheckItemList = ({ setInfo, select, setTitleIconBtn }: any) => {
  let styles: any = {
    inner: ['basic_t_shirts', 'basic_neck_pole', 'basic_nasi'],
    hair: ['short', 'middle', 'long'],
    top: [
      'blazer',
      'blouse',
      'cardigan',
      'coat',
      'hoodi',
      'jumper',
      'mustang',
      'onepiece',
      'pkshirts',
      'shirts',
      'sweater',
      'sweatshirts',
      't_shirts',
    ],
    bottom: [
      'denim',
      'half_shortpants',
      'leggings',
      'skirt',
      'slacks',
      'sweatpants',
    ],
    background: [],
  };
  let sub = 85;
  let detail = 70;
  const viewBoxFemaleInner = '105 405 270 270';
  const viewBoxFemaleTop = '100 395 285 285';
  const viewBoxFemaleBottom = '135 540 200 200';
  const viewBoxFemaleHair = '105 175 300 300';
  const viewBoxMaleTop = '100 395 285 285';
  const viewBoxMaleInner = '95 390 300 300';
  const viewBoxMaleBottom = '135 540 200 200';
  const viewBoxMaleHair = '95 150 300 300';
  // let { hairColor, topColor, bottomColor, innerColor } = info;
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
  // let sub = 85;
  // let detail = 70;
  // const viewBoxFemaleInner = '105 405 270 270';
  // const viewBoxFemaleTop = '100 395 285 285';
  // const viewBoxFemaleBottom = '135 540 200 200';
  // const viewBoxFemaleHair = '10 140 450 450';
  // const viewBoxMaleTop = '100 395 285 285';
  // const viewBoxMaleInner = '95 390 300 300';
  // const viewBoxMaleBottom = '135 540 200 200';
  // const viewBoxMaleHair = '-40 80 550 550';
  // let { hairColor, topColor, bottomColor, innerColor } = info;
  // const colorArr: ColorArrType = {
  //   white: '#FFFFFF',
  //   melangeGrey: '#D4D4D4',
  //   grey: '#A6A6A6',
  //   coolGrey: '#4B5053',
  //   charcoal: '#444444',
  //   black: '#2B2929',
  //   ivory: '#F5EFEF',
  //   lightBeige: '#DED3AA',
  //   beige: '#D6BB87',
  //   peachBeige: '#DBBC97',
  //   deepBeige: '#BEA78C',
  //   darkBeige: '#A3907B',
  //   beigeBrown: '#7B6146',
  //   deepbrown: '#4A3A2A',
  //   darkBrown: '#362710',
  //   blond: '#FFECAE',
  //   lightBrown: '#A36B3E',
  //   brickBrown: '#854809',
  //   brown: '#54310A',
  //   khaki: '#3C492A',
  //   dustyGreen: '#76A973',
  //   lightBlue: '#CCE7FF',
  //   middleBlue: '#417797',
  //   deepBlue: '#165690',
  //   indigoBlue: '#1A2B47',
  //   burgundy: '#740E21',
  //   orange: '#D98200',
  //   black2: '#FFCB00',
  //   navy: '#2C376F',
  //   purple: '#8A00AC',
  //   skyBlue: '#9CB0FF',
  //   sora: '#5C71C9',
  //   blue: '#0088D4',
  //   pink: '#FFB6B6',
  //   magentaPink: '#EE6989',
  //   red: '#A40707',
  //   pastelGreen: '#87B24A',
  //   lightGreen: '#629021',
  //   green: '#0A7C00',
  //   neonBlue: '#02ABCF',
  //   coral: '#DF5353',
  //   skin: '#FFD521',
  // };
  // const SVGComponents: SVGComponentsType = {
  //   female: {
  //     inner: {
  //       basic_neck_pole: (
  //         <SVGFemaleBasic_neck_pole
  //           main={colorArr[innerColor]}
  //           sub={sub}
  //           detail={detail}
  //           viewBox={viewBoxFemaleInner}
  //         ></SVGFemaleBasic_neck_pole>
  //       ),
  //       basic_t_shirts: (
  //         <SVGFemaleBasic_t_shirts
  //           main={colorArr[innerColor]}
  //           sub={sub}
  //           detail={detail}
  //           viewBox={viewBoxFemaleInner}
  //         ></SVGFemaleBasic_t_shirts>
  //       ),
  //       basic_nasi: (
  //         <SVGFemaleBasic_Nasi
  //           main={colorArr[innerColor]}
  //           viewBox={viewBoxFemaleInner}
  //         ></SVGFemaleBasic_Nasi>
  //       ),
  //     },
  //     top: {
  //       blouse: (
  //         <SVGFemaleBlouse
  //           main={colorArr[topColor]}
  //           sub={sub}
  //           detail={detail}
  //           viewBox={viewBoxFemaleTop}
  //         ></SVGFemaleBlouse>
  //       ),

  //       blazer: (
  //         <SVGFemaleBlazer
  //           main={colorArr[topColor]}
  //           sub={sub}
  //           detail={detail}
  //           viewBox={viewBoxFemaleTop}
  //         ></SVGFemaleBlazer>
  //       ),
  //       cardigan: (
  //         <SVGFemaleCardigan
  //           main={colorArr[topColor]}
  //           sub={sub}
  //           detail={detail}
  //           viewBox={viewBoxFemaleTop}
  //         ></SVGFemaleCardigan>
  //       ),
  //       coat: (
  //         <SVGFemaleCoat
  //           main={colorArr[topColor]}
  //           sub={sub}
  //           detail={detail}
  //           viewBox="73 412 340 340"
  //         ></SVGFemaleCoat>
  //       ),
  //       hoodi: (
  //         <SVGFemaleHoodi
  //           main={colorArr[topColor]}
  //           sub={sub}
  //           detail={detail}
  //           viewBox={viewBoxFemaleTop}
  //         ></SVGFemaleHoodi>
  //       ),
  //       jumper: (
  //         <SVGFemaleJumper
  //           main={colorArr[topColor]}
  //           sub={sub}
  //           detail={detail}
  //           viewBox={viewBoxFemaleTop}
  //         ></SVGFemaleJumper>
  //       ),
  //       mustang: (
  //         <SVGFemaleMustang
  //           main={colorArr[topColor]}
  //           sub={sub}
  //           detail={detail}
  //           viewBox={viewBoxFemaleTop}
  //         ></SVGFemaleMustang>
  //       ),
  //       onepiece: (
  //         <SVGFemaleOnepiece
  //           main={colorArr[topColor]}
  //           sub={sub}
  //           detail={detail}
  //           viewBox="73 425 340 340"
  //         ></SVGFemaleOnepiece>
  //       ),
  //       pkshirts: (
  //         <SVGFemalePkshirts
  //           main={colorArr[topColor]}
  //           sub={sub}
  //           detail={detail}
  //           viewBox={viewBoxFemaleTop}
  //         ></SVGFemalePkshirts>
  //       ),
  //       shirts: (
  //         <SVGFemaleShirts
  //           main={colorArr[topColor]}
  //           sub={sub}
  //           detail={detail}
  //           viewBox={viewBoxFemaleTop}
  //         ></SVGFemaleShirts>
  //       ),
  //       sweater: (
  //         <SVGFemaleSweater
  //           main={colorArr[topColor]}
  //           sub={sub}
  //           detail={detail}
  //           viewBox={viewBoxFemaleTop}
  //         ></SVGFemaleSweater>
  //       ),
  //       sweatshirts: (
  //         <SVGFemaleSweatshirts
  //           main={colorArr[topColor]}
  //           sub={sub}
  //           detail={detail}
  //           viewBox={viewBoxFemaleTop}
  //         ></SVGFemaleSweatshirts>
  //       ),
  //       t_shirts: (
  //         <SVGFemaleT_shirts
  //           main={colorArr[topColor]}
  //           sub={sub}
  //           detail={detail}
  //           viewBox={viewBoxFemaleTop}
  //         ></SVGFemaleT_shirts>
  //       ),
  //     },
  //     bottom: {
  //       denim: (
  //         <SVGFemaleDenim
  //           main={colorArr[bottomColor]}
  //           sub={sub}
  //           detail={detail}
  //           viewBox={viewBoxFemaleBottom}
  //         ></SVGFemaleDenim>
  //       ),
  //       half_shortpants: (
  //         <SVGFemaleHalf_shortpants
  //           main={colorArr[bottomColor]}
  //           sub={sub}
  //           detail={detail}
  //           viewBox={viewBoxFemaleBottom}
  //         ></SVGFemaleHalf_shortpants>
  //       ),
  //       leggings: (
  //         <SVGFemaleLeggings
  //           main={colorArr[bottomColor]}
  //           sub={sub}
  //           detail={detail}
  //           viewBox={viewBoxFemaleBottom}
  //         ></SVGFemaleLeggings>
  //       ),
  //       skirt: (
  //         <SVGFemaleSkirt
  //           main={colorArr[bottomColor]}
  //           sub={sub}
  //           detail={detail}
  //           viewBox={viewBoxFemaleBottom}
  //         ></SVGFemaleSkirt>
  //       ),
  //       slacks: (
  //         <SVGFemaleSlacks
  //           main={colorArr[bottomColor]}
  //           sub={sub}
  //           detail={detail}
  //           viewBox={viewBoxFemaleBottom}
  //         ></SVGFemaleSlacks>
  //       ),
  //       sweatpants: (
  //         <SVGFemaleSweatpants
  //           main={colorArr[bottomColor]}
  //           sub={sub}
  //           detail={detail}
  //           viewBox={viewBoxFemaleBottom}
  //         ></SVGFemaleSweatpants>
  //       ),
  //     },
  //     hair: {
  //       long: (
  //         <SVGFemaleLong
  //           main={colorArr[hairColor]}
  //           sub={sub}
  //           detail={detail}
  //           viewBox={viewBoxFemaleHair}
  //         ></SVGFemaleLong>
  //       ),
  //       middle: (
  //         <SVGFemaleMiddle
  //           main={colorArr[hairColor]}
  //           sub={sub}
  //           detail={detail}
  //           viewBox={viewBoxFemaleHair}
  //         ></SVGFemaleMiddle>
  //       ),
  //       short: (
  //         <SVGFemaleShort
  //           main={colorArr[hairColor]}
  //           sub={sub}
  //           detail={detail}
  //           viewBox={viewBoxFemaleHair}
  //         ></SVGFemaleShort>
  //       ),
  //     },
  //   },
  //   male: {
  //     inner: {
  //       basic_neck_pole: (
  //         <SVGMaleBasic_neck_pole
  //           main={colorArr[innerColor]}
  //           sub={sub}
  //           detail={detail}
  //           viewBox={viewBoxMaleInner}
  //         ></SVGMaleBasic_neck_pole>
  //       ),
  //       basic_t_shirts: (
  //         <SVGMaleBasic_t_shirts
  //           main={colorArr[innerColor]}
  //           sub={sub}
  //           detail={detail}
  //           viewBox={viewBoxMaleInner}
  //         ></SVGMaleBasic_t_shirts>
  //       ),
  //       basic_nasi: (
  //         <SVGMaleBasic_Nasi
  //           main={colorArr[innerColor]}
  //           viewBox={viewBoxMaleInner}
  //         ></SVGMaleBasic_Nasi>
  //       ),
  //     },
  //     top: {
  //       blouse: (
  //         <SVGMaleBlouse
  //           main={colorArr[topColor]}
  //           sub={sub}
  //           detail={detail}
  //           viewBox={viewBoxMaleTop}
  //         ></SVGMaleBlouse>
  //       ),

  //       blazer: (
  //         <SVGMaleBlazer
  //           main={colorArr[topColor]}
  //           sub={sub}
  //           detail={detail}
  //           viewBox={viewBoxMaleTop}
  //         ></SVGMaleBlazer>
  //       ),
  //       cardigan: (
  //         <SVGMaleCardigan
  //           main={colorArr[topColor]}
  //           sub={sub}
  //           detail={detail}
  //           viewBox={viewBoxMaleTop}
  //         ></SVGMaleCardigan>
  //       ),
  //       coat: (
  //         <SVGMaleCoat
  //           main={colorArr[topColor]}
  //           sub={sub}
  //           detail={detail}
  //           viewBox="75 394 330 330"
  //         ></SVGMaleCoat>
  //       ),
  //       hoodi: (
  //         <SVGMaleHoodi
  //           main={colorArr[topColor]}
  //           sub={sub}
  //           detail={detail}
  //           viewBox={viewBoxMaleTop}
  //         ></SVGMaleHoodi>
  //       ),
  //       jumper: (
  //         <SVGMaleJumper
  //           main={colorArr[topColor]}
  //           sub={sub}
  //           detail={detail}
  //           viewBox={viewBoxMaleTop}
  //         ></SVGMaleJumper>
  //       ),
  //       mustang: (
  //         <SVGMaleMustang
  //           main={colorArr[topColor]}
  //           sub={sub}
  //           detail={detail}
  //           viewBox={viewBoxMaleTop}
  //         ></SVGMaleMustang>
  //       ),
  //       onepiece: (
  //         <SVGMaleOnepiece
  //           main={colorArr[topColor]}
  //           sub={sub}
  //           detail={detail}
  //           viewBox="68 400 360 360"
  //         ></SVGMaleOnepiece>
  //       ),
  //       pkshirts: (
  //         <SVGMalePkshirts
  //           main={colorArr[topColor]}
  //           sub={sub}
  //           detail={detail}
  //           viewBox={viewBoxMaleTop}
  //         ></SVGMalePkshirts>
  //       ),
  //       shirts: (
  //         <SVGMaleShirts
  //           main={colorArr[topColor]}
  //           sub={sub}
  //           detail={detail}
  //           viewBox={viewBoxMaleTop}
  //         ></SVGMaleShirts>
  //       ),
  //       sweater: (
  //         <SVGMaleSweater
  //           main={colorArr[topColor]}
  //           sub={sub}
  //           detail={detail}
  //           viewBox={viewBoxMaleTop}
  //         ></SVGMaleSweater>
  //       ),
  //       sweatshirts: (
  //         <SVGMaleSweatshirts
  //           main={colorArr[topColor]}
  //           sub={sub}
  //           detail={detail}
  //           viewBox={viewBoxMaleTop}
  //         ></SVGMaleSweatshirts>
  //       ),
  //       t_shirts: (
  //         <SVGMaleT_shirts
  //           main={colorArr[topColor]}
  //           sub={sub}
  //           detail={detail}
  //           viewBox={viewBoxMaleTop}
  //         ></SVGMaleT_shirts>
  //       ),
  //     },
  //     bottom: {
  //       denim: (
  //         <SVGMaleDenim
  //           main={colorArr[bottomColor]}
  //           sub={sub}
  //           detail={detail}
  //           viewBox={viewBoxMaleBottom}
  //         ></SVGMaleDenim>
  //       ),
  //       half_shortpants: (
  //         <SVGMaleHalf_shortpants
  //           main={colorArr[bottomColor]}
  //           sub={sub}
  //           detail={detail}
  //           viewBox={viewBoxMaleBottom}
  //         ></SVGMaleHalf_shortpants>
  //       ),
  //       leggings: (
  //         <SVGMaleLeggings
  //           main={colorArr[bottomColor]}
  //           sub={sub}
  //           detail={detail}
  //           viewBox={viewBoxMaleBottom}
  //         ></SVGMaleLeggings>
  //       ),
  //       skirt: (
  //         <SVGMaleSkirt
  //           main={colorArr[bottomColor]}
  //           sub={sub}
  //           detail={detail}
  //           viewBox={viewBoxMaleBottom}
  //         ></SVGMaleSkirt>
  //       ),
  //       slacks: (
  //         <SVGMaleSlacks
  //           main={colorArr[bottomColor]}
  //           sub={sub}
  //           detail={detail}
  //           viewBox={viewBoxMaleBottom}
  //         ></SVGMaleSlacks>
  //       ),
  //       sweatpants: (
  //         <SVGMaleSweatpants
  //           main={colorArr[bottomColor]}
  //           sub={sub}
  //           detail={detail}
  //           viewBox={viewBoxMaleBottom}
  //         ></SVGMaleSweatpants>
  //       ),
  //     },
  //     hair: {
  //       long: (
  //         <SVGMaleLong
  //           main={colorArr[hairColor]}
  //           sub={sub}
  //           detail={detail}
  //           viewBox={viewBoxMaleHair}
  //         ></SVGMaleLong>
  //       ),
  //       middle: (
  //         <SVGMaleMiddle
  //           main={colorArr[hairColor]}
  //           sub={sub}
  //           detail={detail}
  //           viewBox={viewBoxMaleHair}
  //         ></SVGMaleMiddle>
  //       ),
  //       short: (
  //         <SVGMaleShort
  //           main={colorArr[hairColor]}
  //           sub={sub}
  //           detail={detail}
  //           viewBox={viewBoxMaleHair}
  //         ></SVGMaleShort>
  //       ),
  //     },
  //   },
  //   background: {
  //     background: {
  //       background1: (
  //         <img
  //           width="100%"
  //           height="100%"
  //           src="src/assets/custom/background/background1.png"
  //         ></img>
  //       ),
  //       background2: (
  //         <img
  //           width="100%"
  //           height="100%"
  //           src="src/assets/custom/background/background2.png"
  //         ></img>
  //       ),
  //       background3: (
  //         <img
  //           width="100%"
  //           height="100%"
  //           src="src/assets/custom/background/background3.png"
  //         ></img>
  //       ),
  //     },
  //   },
  // };

  return (
    <Box sx={{ heigth: '100%' }}>
      <Box
        sx={{
          overflowX: 'hidden',
          display: 'flex',
          flexWrap: 'wrap',
          width: '100%',
          height: '100%',
        }}
      >
        <>
          {styles[select]?.map((v: any) => (
            <Tooltip title={v}>
              <Button
                sx={{ width: '30%', margin: '10px' }}
                key={v}
                onClick={() => {
                  setInfo((pre: any) => ({ ...pre, [select]: v }));
                }}
              >
                <Box
                  component="img"
                  src={`/assets/custom/${'female'}/${select}/${v}.svg`}
                ></Box>
                {/* {SVGComponents[info.gender][select][v]} */}
              </Button>
            </Tooltip>
          ))}
        </>
      </Box>
    </Box>
  );
};

export default CheckItemList;
