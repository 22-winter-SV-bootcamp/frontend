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
import { Box } from '@mui/material';
import { styled } from '@mui/material';
import { theme } from '@/utils/mui/breakpoints';

import SVGMaleShort from '@/svgComponents/male/hair/SVGMaleShort';
import SVGMaleLong from '@/svgComponents/male/hair/SVGMaleLong';
import SVGMaleBasic_Nasi from '@/svgComponents/male/inner/SVGMaleBasic_Nasi';
import SVGFemaleBasic_Nasi from '@/svgComponents/female/inner/SVGFemaleBasic_Nasi';
import SVGFemaleShort from '@/svgComponents/female/hair/SVGFemaleShort';
import SVGFemaleMiddle from '@/svgComponents/female/hair/SVGFemaleMiddle';
import triangle from '/assets/triangle.png';
import kingHatImg from '/assets/pages/main/kingHatImg.png';

type ColorArrType = {
  [key: string]: string;
};
type SVGComponentsType = {
  [key: string]: { [key: string]: { [key: string]: JSX.Element } };
};

const CustomSVG = ({
  info,
  ratioBtn,
  custom,
  kingHat,
}: {
  info: any;
  ratioBtn: boolean;
  custom: boolean;
  kingHat: boolean;
}) => {
  let {
    gender,
    hair,
    hairColor,
    top,
    topColor,
    bottom,
    bottomColor,
    background,
    inner,
    innerColor,
  } = info;

  let sub = 85;
  let detail = 70;

  let viewBox = ratioBtn ? '11 89 460 460' : undefined;

  const colorArr: ColorArrType = {
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

  const SVGComponents: SVGComponentsType = {
    female: {
      inner: {
        basic_neck_pole: (
          <SVGFemaleBasic_neck_pole
            main={colorArr[innerColor]}
            sub={sub}
            detail={detail}
            viewBox={viewBox}
          ></SVGFemaleBasic_neck_pole>
        ),
        basic_t_shirts: (
          <SVGFemaleBasic_t_shirts
            main={colorArr[innerColor]}
            sub={sub}
            detail={detail}
            viewBox={viewBox}
          ></SVGFemaleBasic_t_shirts>
        ),
        basic_nasi: (
          <SVGFemaleBasic_Nasi
            main={colorArr[innerColor]}
            sub={sub}
            detail={detail}
            viewBox={viewBox}
          ></SVGFemaleBasic_Nasi>
        ),
      },
      top: {
        blouse: (
          <SVGFemaleBlouse
            main={colorArr[topColor]}
            sub={sub}
            detail={detail}
            viewBox={viewBox}
          ></SVGFemaleBlouse>
        ),

        blazer: (
          <SVGFemaleBlazer
            main={colorArr[topColor]}
            sub={sub}
            detail={detail}
            viewBox={viewBox}
          ></SVGFemaleBlazer>
        ),
        cardigan: (
          <SVGFemaleCardigan
            main={colorArr[topColor]}
            sub={sub}
            detail={detail}
            viewBox={viewBox}
          ></SVGFemaleCardigan>
        ),
        coat: (
          <SVGFemaleCoat
            main={colorArr[topColor]}
            sub={sub}
            detail={detail}
            viewBox={viewBox}
          ></SVGFemaleCoat>
        ),
        hoodi: (
          <SVGFemaleHoodi
            main={colorArr[topColor]}
            sub={sub}
            detail={detail}
            viewBox={viewBox}
          ></SVGFemaleHoodi>
        ),
        jumper: (
          <SVGFemaleJumper
            main={colorArr[topColor]}
            sub={sub}
            detail={detail}
            viewBox={viewBox}
          ></SVGFemaleJumper>
        ),
        mustang: (
          <SVGFemaleMustang
            main={colorArr[topColor]}
            sub={sub}
            detail={detail}
            viewBox={viewBox}
          ></SVGFemaleMustang>
        ),
        onepiece: (
          <SVGFemaleOnepiece
            main={colorArr[topColor]}
            sub={sub}
            detail={detail}
            viewBox={viewBox}
          ></SVGFemaleOnepiece>
        ),
        pkshirts: (
          <SVGFemalePkshirts
            main={colorArr[topColor]}
            sub={sub}
            detail={detail}
            viewBox={viewBox}
          ></SVGFemalePkshirts>
        ),
        shirts: (
          <SVGFemaleShirts
            main={colorArr[topColor]}
            sub={sub}
            detail={detail}
            viewBox={viewBox}
          ></SVGFemaleShirts>
        ),
        sweater: (
          <SVGFemaleSweater
            main={colorArr[topColor]}
            sub={sub}
            detail={detail}
            viewBox={viewBox}
          ></SVGFemaleSweater>
        ),
        sweatshirts: (
          <SVGFemaleSweatshirts
            main={colorArr[topColor]}
            sub={sub}
            detail={detail}
            viewBox={viewBox}
          ></SVGFemaleSweatshirts>
        ),
        t_shirts: (
          <SVGFemaleT_shirts
            main={colorArr[topColor]}
            sub={sub}
            detail={detail}
            viewBox={viewBox}
          ></SVGFemaleT_shirts>
        ),
      },

      bottom: {
        denim: (
          <SVGFemaleDenim
            main={colorArr[bottomColor]}
            sub={sub}
            detail={detail}
            viewBox={viewBox}
          ></SVGFemaleDenim>
        ),
        half_shortpants: (
          <SVGFemaleHalf_shortpants
            main={colorArr[bottomColor]}
            sub={sub}
            detail={detail}
            viewBox={viewBox}
          ></SVGFemaleHalf_shortpants>
        ),
        leggings: (
          <SVGFemaleLeggings
            main={colorArr[bottomColor]}
            sub={sub}
            detail={detail}
            viewBox={viewBox}
          ></SVGFemaleLeggings>
        ),
        skirt: (
          <SVGFemaleSkirt
            main={colorArr[bottomColor]}
            sub={sub}
            detail={detail}
            viewBox={viewBox}
          ></SVGFemaleSkirt>
        ),
        slacks: (
          <SVGFemaleSlacks
            main={colorArr[bottomColor]}
            sub={sub}
            detail={detail}
            viewBox={viewBox}
          ></SVGFemaleSlacks>
        ),
        sweatpants: (
          <SVGFemaleSweatpants
            main={colorArr[bottomColor]}
            sub={sub}
            detail={detail}
            viewBox={viewBox}
          ></SVGFemaleSweatpants>
        ),
      },
      hair: {
        short: (
          <SVGFemaleShort
            main={colorArr[hairColor]}
            sub={sub}
            detail={detail}
            viewBox={viewBox}
          ></SVGFemaleShort>
        ),
        middle: (
          <SVGFemaleMiddle
            main={colorArr[hairColor]}
            sub={sub}
            detail={detail}
            viewBox={viewBox}
          ></SVGFemaleMiddle>
        ),
        long: (
          <SVGFemaleLong
            main={colorArr[hairColor]}
            sub={sub}
            detail={detail}
            viewBox={viewBox}
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
            viewBox={viewBox}
          ></SVGMaleBasic_neck_pole>
        ),
        basic_t_shirts: (
          <SVGMaleBasic_t_shirts
            main={colorArr[innerColor]}
            sub={sub}
            detail={detail}
            viewBox={viewBox}
          ></SVGMaleBasic_t_shirts>
        ),
        basic_nasi: (
          <SVGMaleBasic_Nasi
            main={colorArr[innerColor]}
            sub={sub}
            detail={detail}
            viewBox={viewBox}
          ></SVGMaleBasic_Nasi>
        ),
      },
      top: {
        blouse: (
          <SVGMaleBlouse
            main={colorArr[topColor]}
            sub={sub}
            detail={detail}
            viewBox={viewBox}
          ></SVGMaleBlouse>
        ),

        blazer: (
          <SVGMaleBlazer
            main={colorArr[topColor]}
            sub={sub}
            detail={detail}
            viewBox={viewBox}
          ></SVGMaleBlazer>
        ),
        cardigan: (
          <SVGMaleCardigan
            main={colorArr[topColor]}
            sub={sub}
            detail={detail}
            viewBox={viewBox}
          ></SVGMaleCardigan>
        ),
        coat: (
          <SVGMaleCoat
            main={colorArr[topColor]}
            sub={sub}
            detail={detail}
            viewBox={viewBox}
          ></SVGMaleCoat>
        ),
        hoodi: (
          <SVGMaleHoodi
            main={colorArr[topColor]}
            sub={sub}
            detail={detail}
            viewBox={viewBox}
          ></SVGMaleHoodi>
        ),
        jumper: (
          <SVGMaleJumper
            main={colorArr[topColor]}
            sub={sub}
            detail={detail}
            viewBox={viewBox}
          ></SVGMaleJumper>
        ),
        mustang: (
          <SVGMaleMustang
            main={colorArr[topColor]}
            sub={sub}
            detail={detail}
            viewBox={viewBox}
          ></SVGMaleMustang>
        ),
        onepiece: (
          <SVGMaleOnepiece
            main={colorArr[topColor]}
            sub={sub}
            detail={detail}
            viewBox={viewBox}
          ></SVGMaleOnepiece>
        ),
        pkshirts: (
          <SVGMalePkshirts
            main={colorArr[topColor]}
            sub={sub}
            detail={detail}
            viewBox={viewBox}
          ></SVGMalePkshirts>
        ),
        shirts: (
          <SVGMaleShirts
            main={colorArr[topColor]}
            sub={sub}
            detail={detail}
            viewBox={viewBox}
          ></SVGMaleShirts>
        ),
        sweater: (
          <SVGMaleSweater
            main={colorArr[topColor]}
            sub={sub}
            detail={detail}
            viewBox={viewBox}
          ></SVGMaleSweater>
        ),
        sweatshirts: (
          <SVGMaleSweatshirts
            main={colorArr[topColor]}
            sub={sub}
            detail={detail}
            viewBox={viewBox}
          ></SVGMaleSweatshirts>
        ),
        t_shirts: (
          <SVGMaleT_shirts
            main={colorArr[topColor]}
            sub={sub}
            detail={detail}
            viewBox={viewBox}
          ></SVGMaleT_shirts>
        ),
      },
      bottom: {
        denim: (
          <SVGMaleDenim
            main={colorArr[bottomColor]}
            sub={sub}
            detail={detail}
            viewBox={viewBox}
          ></SVGMaleDenim>
        ),
        half_shortpants: (
          <SVGMaleHalf_shortpants
            main={colorArr[bottomColor]}
            sub={sub}
            detail={detail}
            viewBox={viewBox}
          ></SVGMaleHalf_shortpants>
        ),
        leggings: (
          <SVGMaleLeggings
            main={colorArr[bottomColor]}
            sub={sub}
            detail={detail}
            viewBox={viewBox}
          ></SVGMaleLeggings>
        ),
        skirt: (
          <SVGMaleSkirt
            main={colorArr[bottomColor]}
            sub={sub}
            detail={detail}
            viewBox={viewBox}
          ></SVGMaleSkirt>
        ),
        slacks: (
          <SVGMaleSlacks
            main={colorArr[bottomColor]}
            sub={sub}
            detail={detail}
            viewBox={viewBox}
          ></SVGMaleSlacks>
        ),
        sweatpants: (
          <SVGMaleSweatpants
            main={colorArr[bottomColor]}
            sub={sub}
            detail={detail}
            viewBox={viewBox}
          ></SVGMaleSweatpants>
        ),
      },
      hair: {
        short: (
          <SVGMaleShort
            main={colorArr[hairColor]}
            sub={sub}
            detail={detail}
            viewBox={viewBox}
          ></SVGMaleShort>
        ),
        middle: (
          <SVGMaleMiddle
            main={colorArr[hairColor]}
            sub={sub}
            detail={detail}
            viewBox={viewBox}
          ></SVGMaleMiddle>
        ),
        long: (
          <SVGMaleLong
            main={colorArr[hairColor]}
            sub={sub}
            detail={detail}
            viewBox={viewBox}
          ></SVGMaleLong>
        ),
      },
    },
    background: {
      background: {
        background1: (
          <img
            width="100%"
            height="100%"
            src="/assets/custom/background/background1.png"
          ></img>
        ),
        background2: (
          <img
            width="100%"
            height="100%"
            src="/assets/custom/background/background2.png"
          ></img>
        ),
        background3: (
          <img
            width="100%"
            height="100%"
            src="/assets/custom/background/background3.png"
          ></img>
        ),
      },
    },
  };

  const Box1 = styled('div')(({ theme }) => ({
    width: '100%',
    height: '100%',
    [theme.breakpoints.down('mobile')]: {},
    [theme.breakpoints.between('mobile', 'tablet')]: {},
    [theme.breakpoints.between('tablet', 'desktop')]: {},
    [theme.breakpoints.up('desktop')]: {},
  }));

  const StyleMainImg = styled('div')(({ theme }) => ({
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'bottom',
    width: '77%',
    background: colorArr[info.backgroundColor],
    aspectRatio: ratioBtn ? '2/3' : '1/1',
    overflow: 'hidden',
    borderRadius: custom ? '0' : '10%',
    // filter: 'opacity(0.5) drop-shadow(0 0 0 #CCE7FF)',
    [theme.breakpoints.down('desktop')]: {
      maxWidth: '557px',
    },
    [theme.breakpoints.up('desktop')]: {
      maxWidth: '477px',
    },
  }));

  const styletriangle = {
    position: 'absolute',
    bottom: '0',
    height: ratioBtn ? '130%' : '140%',
    width: ratioBtn ? '90%' : '130%',
    objectFit: 'fill',
  };
  // console.log(ratioBtn, custom, kingHat);
  return (
    <StyleMainImg theme={theme}>
      <Box
        component="img"
        src={triangle}
        alt="upload Layout"
        sx={styletriangle}
      />
      <Box sx={{ position: 'absolute' }} width="100%" height="100%">
        {SVGComponents[gender]['hair'][hair]}
      </Box>

      <Box sx={{ position: 'absolute' }} width="100%" height="100%">
        {SVGComponents[gender]['inner'][inner]}
      </Box>

      <Box sx={{ position: 'absolute' }} width="100%" height="100%">
        {SVGComponents[gender]['bottom'][bottom]}
      </Box>

      <Box sx={{ position: 'absolute' }} width="100%" height="100%">
        {SVGComponents[gender]['top'][top]}
      </Box>
      {kingHat ? (
        <Box
          component="img"
          sx={{
            position: 'absolute',
            top: gender === 'male' ? '24%' : '28%',
            left: '36%',
            // transform: 'translatX(-50%)',
            width: '27%',
          }}
          src={kingHatImg}
        ></Box>
      ) : null}
    </StyleMainImg>
  );
};
CustomSVG.defaultProps = {
  kingHat: false,
  ratioBtn: false,
  custom: true,
};
export default CustomSVG;
