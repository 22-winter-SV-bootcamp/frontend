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

const colorArr: Record<string, string> = {
  white: '#FFFFFF',
  melangeGrey: '#D4D4D4',
  grey: '#A6A6A6',
  coolGrey: '#4B5053',
  charcoal: '#444444',
  black: '#2B2929',
  realBlack: '#171717',
  ivory: '#F5EFEF',
  lightBeige: '#DED3AA',
  beige: '#D6BB87',
  peachBeige: '#DBBC97',
  deepBeige: '#BEA78C',
  darkBeige: '#A3907B',
  beigeBrown: '#7B6146',
  deepBrown: '#4A3A2A',
  darkBrown: '#362710',
  blond: '#FFECAE',
  lightBrown: '#A36B3E',
  brickBrown: '#854809',
  brown: '#54310A',
  khaki: '#3C492A',
  dustyGreen: '#779C74',
  lightBlue: '#CCE7FF',
  middleBlue: '#417797',
  deepBlue: '#165690',
  indigoBlue: '#1A2B47',
  burgundy: '#640013',
  orange: '#E88100',
  yellow: '#FFCB00',
  navy: '#002A58',
  purple: '#78009C',
  skyBlue: '#9CB0FF',
  vintageBlue: '#324C7E',
  blue: '#0088D4',
  pink: '#FFB6B6',
  magentaPink: '#EF5A7D',
  red: '#B50300',
  pastelGreen: '#87B24A',
  lightGreen: '#629021',
  green: '#0A7C00',
  neonBlue: '#02ABCF',
  coral: '#DF5353',
  skin: '#FFD521',
};

const CheckItemList = ({
  setInfo,
  info,
  select,
  setTitleIconBtn,
  setIsColorChange,
  isColorChange,
}: any) => {
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
        {isColorChange && (
          <>
            {Object.keys(colorArr).map((v) => {
              return (
                <Tooltip title={v}>
                  <Button
                    sx={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '32px',
                      margin: '10px',
                      bgcolor: colorArr[v],
                    }}
                    key={v}
                    onClick={() => {
                      setInfo((pre: any) => ({ ...pre, [isColorChange]: v }));
                      setIsColorChange('');
                    }}
                  ></Button>
                </Tooltip>
              );
            })}
          </>
        )}
        {!isColorChange && (
          <>
            {styles[select]?.map((v: any) => (
              <Tooltip title={v}>
                <Button
                  sx={{ width: '30%', margin: '10px' }}
                  key={v}
                  onClick={() => {
                    if (select !== 'backgroundColor') {
                      setIsColorChange(`${select}Color`);
                    }
                    setInfo((pre: any) => ({ ...pre, [select]: v }));
                  }}
                >
                  <Box
                    component="img"
                    src={`/assets/custom/${info.gender}/${select}/${v}.svg`}
                  ></Box>
                  {/* {SVGComponents[info.gender][select][v]} */}
                </Button>
              </Tooltip>
            ))}
          </>
        )}
      </Box>
    </Box>
  );
};

export default CheckItemList;
