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
      backgroundColor: 'black',
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

  const Box2 = styled('div')(({ theme }) => ({
    display: 'flex',
    justifyContent: ' center',
    alignItems: 'center',
    backgroundColor: 'white',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: 20,
    boxShadow: '4px 4px 0px 0px #C7C7C7',

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
      fontSize: '18px',
    },

    [theme.breakpoints.up('desktop')]: {
      width: '440px',
      height: '440px',
      borderRadius: 30,
      fontSize: '15px',
    },
  }));

  const StylecommonRank = {
    position: 'relative',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <>
      {open ? (
        <Box2
          onClick={() => {
            setOpen(false);
          }}
          theme={theme}
        >
          <Box
            sx={[
              StylecommonRank,
              { height: '100%', flexDirection: 'column', paddingTop: '10px' },
            ]}
          >
            <Box
              sx={[
                StylecommonRank,
                {
                  height: '14%',
                },
              ]}
            >
              <Typography
                variant="h4"
                sx={{
                  color: '#000000',
                  fontSize: '2em',
                }}
              >
                Best Outfit of This Week
              </Typography>
            </Box>
            <Box sx={[StylecommonRank, { height: '86%' }]}>
              {rankInfo?.map((gender) => (
                <Box
                  sx={{
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '50%',
                    height: '100%',
                  }}
                >
                  <Box
                    sx={[
                      StylecommonRank,
                      {
                        height: '80%',
                      },
                    ]}
                  >
                    <CustomSVG
                      info={gender}
                      ratioBtn={true}
                      custom={true}
                      kingHat={true}
                    ></CustomSVG>
                  </Box>

                  <Box
                    sx={[
                      StylecommonRank,
                      {
                        height: '20%',
                      },
                    ]}
                  >
                    <Typography
                      variant="h3"
                      sx={{ color: '#585858', fontSize: '2em' }}
                    >
                      {gender.count}'s pick
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Box2>
      ) : null}
    </>
  );
}
