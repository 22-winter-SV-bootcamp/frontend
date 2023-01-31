import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@/components/common/ButtonIcon';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { useQuery } from '@tanstack/react-query';
import { getBestStyle } from '@/apis/getBestStyle';
import CustomSVG from '../user/CustomSVG';
import { Box } from '@mui/system';
import ButtonIcon from '@/components/common/ButtonIcon';
import { theme } from '@/utils/mui/breakpoints';
import { Translate } from '@mui/icons-material';
import { prependListener } from 'process';

export default function RankModal({ open, setOpen }: any) {
  const [rankInfo, setRankInfo] = React.useState([
    {
      gender: 'male',
      top: 'shirts',
      top_color: 'white',
      bottom: 'slacks',
      bottom_color: 'white',
      hair: 'middle',
      hairColor: 'black',
      inner: 'basic_t_shirts',
      innerColor: 'white',
      backgroundColor: 'pink',
      count: '1',
    },
    {
      gender: 'female',
      top: 'shirts',
      top_color: 'white',
      bottom: 'slacks',
      bottom_color: 'white',
      hair: 'long',
      hairColor: 'black',
      inner: 'basic_t_shirts',
      innerColor: 'white',
      backgroundColor: 'pink',
      count: '1',
    },
  ]);

  const { data: male } = useQuery(
    ['maleRank'],
    async () => await getBestStyle('male'),
    {
      onSuccess(data) {
        console.log('male', data);
        setRankInfo((pre: any) => [{ ...pre[0], ...data }, { ...pre[1] }]);
      },
    },
  );
  const { data: female } = useQuery(
    ['femaleRank'],
    async () => await getBestStyle('female'),
    {
      onSuccess(data) {
        console.log('female', data);
        setRankInfo((pre: any) => [{ ...pre[0] }, { ...pre[1], ...data }]);
      },
    },
  );

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const Box1 = styled('div')(({ theme }) => ({
    backgroundColor: 'white',
    opacity: 0.7,
    zIndex: 10,
    width: '100vw',
    height: '100vh',
    position: 'absolute',

    [theme.breakpoints.down('tablet')]: {},
    [theme.breakpoints.between('tablet', 'desktop')]: {},
    [theme.breakpoints.between('desktop', 'bigDesktop')]: {},
    [theme.breakpoints.up('bigDesktop')]: {},
  }));

  const Box2 = styled('div')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    position: 'absolute',

    top: 0,
    left: 0,
    padding: 20,
    boxShadow: '4px 4px 0px 0px #C7C7C7',

    // transform: `translate(-50%,-50%)`,
    zIndex: 20,
    [theme.breakpoints.down('tablet')]: {
      width: '276px',
      height: '276px',
      borderRadius: 30,
    },
    [theme.breakpoints.between('tablet', 'desktop')]: {
      width: '500px',
      height: '500px',
      borderRadius: 30,
    },

    [theme.breakpoints.up('desktop')]: {
      width: '440px',
      height: '440px',
      left: '50%',
      transform: 'translateX(-50%)',
      top: '-600px',
      borderRadius: 30,
    },
  }));

  return (
    <>
      {open ? (
        <Box2
          onClick={() => {
            setOpen(false);
          }}
          theme={theme}
          sx={{ display: 'flex' }}
        >
          {rankInfo?.map((gender) => (
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Typography variant="h4">1st</Typography>
              <CustomSVG info={gender}></CustomSVG>
              <Typography variant="h3">{gender.count}'s pick</Typography>
            </Box>
          ))}
        </Box2>
      ) : null}
    </>
  );
}
