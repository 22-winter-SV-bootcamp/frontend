import getRecentImgs from '@/apis/getRecentImgs';
import { convertLength } from '@mui/material/styles/cssUtils';
import { breakpoints, maxWidth, styled } from '@mui/system';
import { Box } from '@mui/material';
import { theme } from '@/utils/mui/breakpoints';
import { url } from 'inspector';
import './recentImgs.css';
const RecentImgs = ({ cards }: any) => {
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
    top: 0,
    left: 0,

    position: 'absolute',
    zIndex: -1,
    overflow: 'hidden',
    height: '100vh',
    width: '100%',
    background: `linear-gradient(160deg, #C5E8FF 40%, #dde9f1 50%, rgba(179,139,99,1) 50%, #dfdad5 100%)`,
    [theme.breakpoints.down('tablet')]: {},
    [theme.breakpoints.between('tablet', 'desktop')]: {
      width: 700,
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
    [theme.breakpoints.up('desktop')]: {
      width: 700,
      position: 'relative',
      //     width: 270,
      //     height: '100vh',
      background: `linear-gradient(160deg, #FFE3C6 40%, #f5eee7 50%, rgba(179,139,99,1) 50%, #dfdad5 100%)`,
    },
  }));

  const Card = styled('img')(({ theme }) => ({
    position: 'absolute',
    [theme.breakpoints.down('tablet')]: {
      width: 200,
      height: 350,
    },
    [theme.breakpoints.between('tablet', 'desktop')]: {
      width: 300,
      height: 450,
    },

    [theme.breakpoints.up('desktop')]: {
      width: 250,
      height: 400,
    },
  }));

  const Triangle = styled('div')(({ theme }) => ({}));

  return (
    <Box1 theme={theme}>
      {cards?.map((card: any, i: number) => (
        <Card
          className={`card${i}`}
          theme={theme}
          key={i}
          sx={{
            ...p[i],
          }}
          src={card.link}
        ></Card>
      ))}
    </Box1>
  );
};

export default RecentImgs;
