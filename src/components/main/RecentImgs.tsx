import getRecentImgs from '@/apis/getRecentImgs';
import { convertLength } from '@mui/material/styles/cssUtils';
import { breakpoints, maxWidth, styled } from '@mui/system';
import { Box } from '@mui/material';
import { theme } from '@/utils/mui/breakpoints';
import { url } from 'inspector';
import './recentImgs.css';
import './re.css';
const RecentImgs = ({ cards, animation }: any) => {
  const p = [
    {
      left: '60%',
      top: '-15%',
      transform: `rotateX(50deg) rotateY(-15deg)  rotateZ(25deg)`,
    },
    {
      left: '15%',
      top: '20%',
      transform: `rotateX(55deg) rotateY(15deg) rotateZ(-25deg)`,
    },
    {
      left: '60%',
      top: '40%',
      transform: `rotateX(65deg) rotateY(-5deg) rotateZ(10deg)`,
    },
    { left: '0', top: '60%', transform: `rotateX(45deg) rotateZ(-40deg)` },
    { left: '65%', top: '75%', transform: `rotateX(55deg) rotateZ(25deg)` },
  ];

  const Box1 = styled('div')(({ theme }) => ({
    position: 'absolute',
    zIndex: -1,
    overflow: 'hidden',
    height: '100vh',
    width: '100%',
    // display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
    // top: '50%',
    // left: '50%',
    // transform: 'translate(-50%,-50%)',

    // backgroundImage:
    //   "url('https://i.pinimg.com/564x/b8/e4/11/b8e4117f92711c7d299dd34527b42821.jpg')",
    // background: `linear-gradient(160deg, #C5E8FF 40%, #dde9f1 50%, rgba(179,139,99,1) 50%, #dfdad5 100%)`,
    [theme.breakpoints.down('tablet')]: {
      // top: '50%',
      // left: '50%',
      // transform: 'translate(-50%, -50%)',
    },
    [theme.breakpoints.between('tablet', 'desktop')]: {
      width: 700,
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      // fontSize: '12px',
    },
    [theme.breakpoints.up('desktop')]: {
      width: 700,
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContents: 'center',
      //     width: 270,
      //     height: '100vh',
      // background: `linear-gradient(160deg, #FFE3C6 40%, #f5eee7 50%, rgba(179,139,99,1) 50%, #dfdad5 100%)`,
    },
  }));

  const Box2 = styled('div')(({ theme }) => ({
    [theme.breakpoints.down('tablet')]: {
      width: '100%',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%,-50%)',
      fontSize: '3px',
    },
    [theme.breakpoints.between('tablet', 'desktop')]: {
      width: '100%',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%,-50%)',
      fontSize: '11px',
    },
    [theme.breakpoints.up('desktop')]: {},
  }));

  // const Card = styled('img')(({ theme }) => ({
  //   position: 'absolute',
  //   [theme.breakpoints.down('tablet')]: {
  //     width: 200,
  //     height: 350,
  //   },
  //   [theme.breakpoints.between('tablet', 'desktop')]: {
  //     width: 300,
  //     height: 450,
  //   },

  //   [theme.breakpoints.up('desktop')]: {
  //     width: 250,
  //     height: 400,
  //   },
  // }));

  // const Triangle = styled('div')(({ theme }) => ({}));

  return (
    <Box1 className="recentImageLayout" theme={theme}>
      {/* {cards?.map((card: any, i: number) => (
        <Card
          className={`card${i}`}
          theme={theme}
          key={i}
          sx={{
            ...p[i],
          }}
          src={card.link}
        ></Card>
      ))} */}
      <Box2 className="wrapper" sx={{ fontSize: 'inherit' }} theme={theme}>
        {cards?.map((card: any) => (
          <>
            <Box className="item" sx={{ fontSize: 'inherit' }}>
              <Box className="polaroid" sx={{ fontSize: 'inherit' }}>
                <Box
                  component="img"
                  className="image"
                  src={card.link}
                  sx={{ width: '25em' }}
                />
              </Box>
            </Box>
          </>
        ))}
      </Box2>
    </Box1>
  );
};

export default RecentImgs;
