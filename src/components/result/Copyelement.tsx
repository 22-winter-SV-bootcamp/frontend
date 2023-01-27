// @flow
import { ClickAwayListener, Fab, Fade, CircularProgress } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import { CustomTooltip } from './CustomTooltip';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Box } from '@mui/system';
import { green, orange } from '@mui/material/colors';
import CheckIcon from '@mui/icons-material/Check';
import ShareIcon from '@mui/icons-material/Share';

export const Copyelement = ({ resultImg }: { resultImg: string }) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [open, setOpen] = useState(false);
  const timer = useRef<number>();

  useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const buttonSx = {
    bgcolor: orange[500],
    ...(success && {
      bgcolor: green[500],
      '&:hover': {
        bgcolor: green[700],
      },
    }),
  };

  const handleButtonClick = () => {
    handleOpen();
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      timer.current = window.setTimeout(() => {
        setSuccess(true);
        setLoading(false);
      }, 300);
    }
    clipboard(resultImg);
  };

  const clipboard = (url: string) => {
    navigator.clipboard.writeText(url);
  };

  const handleOpen = async () => {
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 3000);
  };

  const FabResponse = {
    width: {
      laptop: '45px', //img src from 0 up to mobile
      mobile: '35px', //img src from mobile up to tablet
      tablet: '45px', //img src from tablet up to desktop
      desktop: '45px', //img src from desktop up to ~
    },
    height: {
      laptop: '45px', //img src from 0 up to mobile
      mobile: '35px', //img src from mobile up to tablet
      tablet: '45px', //img src from tablet up to desktop
      desktop: '45px', //img src from desktop up to ~
    },
  };

  return (
    <>
      <ClickAwayListener onClickAway={handleButtonClick}>
        <CustomTooltip
          arrow
          placement="top-end"
          title={
            <>
              <CheckCircleOutlineIcon
                fontSize="inherit"
                sx={{
                  mr: '10px',
                }}
              />
              <Box sx={{ display: 'inline' }}>copyed</Box>
            </>
          }
          open={open}
          disableFocusListener
          disableHoverListener
          disableTouchListener
          disableInteractive
          TransitionComponent={Fade}
          TransitionProps={{ timeout: 2200 }}
        >
          <Fab
            aria-label="copy" /* element의 id값 */
            color="primary"
            sx={buttonSx}
            onClick={handleButtonClick}
            // style={{ transform: 'scale(0.9)' }}
            style={{ width: '45px', height: '45px' }}
          >
            {success ? <CheckIcon /> : <ShareIcon />}
          </Fab>
        </CustomTooltip>
      </ClickAwayListener>
    </>
  );
};
