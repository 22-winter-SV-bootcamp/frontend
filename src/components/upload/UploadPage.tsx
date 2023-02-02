import React, { DragEvent, useEffect, useState } from 'react';
import { Box, Button, styled, Typography, Zoom } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQuery } from '@tanstack/react-query';
import getAiResult from '@/apis/getAiResult';
import { postUploadImage } from '@/apis/postUploadImage';
import triangle from '/assets/triangle.png';
import { theme } from '@/utils/mui/breakpoints';
import CircularProgress from '@mui/material/CircularProgress';
import uploadIcon from '/assets/pages/upload/uploadIcon.png';

export const UploadPage = () => {
  let [taskId, setTaskId] = useState('');
  let [gender, setGender] = useState('female');
  let [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  let {
    data,
    refetch,
    isSuccess: Success,
  } = useQuery(['AiResult'], async () => await getAiResult(taskId), {
    enabled: false,
    staleTime: 1000 * 60 ** 60,
    refetchOnWindowFocus: false,

    onSuccess: (data: any) => {
      if (data?.status === 'not yet') setTimeout(refetch, 5000);
      else {
        setIsLoading(false);
        console.log('aaa', { ...data.result, gender: gender });
        navigate('/result', {
          state: { ...data, result: { ...data, gender: gender } },
        });
      }
    },
  });

  const { mutate, data: task_id } = useMutation(postUploadImage);

  const styleContainer = {
    height: '100%',
    // background: 'linear-gradient(to bottom, #FFE3C5, #FFF3E5 90%)',
    background: 'linear-gradient(to bottom, #C5E8FF 80%, #FFFFFF 100%)',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
  };

  const FilmLayout = styled('div')(({ theme }) => ({
    height: '100%',
    width: '100%',
    maxWidth: '760px',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    background: '#FFFFFF',
    // TODO: 두 가지 버전 확인 받기
    boxShadow:
      'rgba(0, 0, 0, 0.15) 0px 20px 30px, rgba(0, 0, 0, 0.05) 0px 10px 15px',

    // boxShadow: 'rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px',
    [theme.breakpoints.down('desktop')]: {
      maxWidth: '760px',
      fontSize: '34px',
    },
    [theme.breakpoints.down('tablet')]: {
      fontSize: '20px',
    },
    [theme.breakpoints.up('desktop')]: {
      maxWidth: '652px',
      fontSize: '32px',
    },
  }));

  const headerLayout = {
    // height: '',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const styleTitle = {
    fontWeight: 'medium',
    fontSize: '1em',

    // alignSelf: 'center',
    // FontFamily: "'Indie Flower', cursive",
  };

  const mainLayout = {
    // height: '62%',

    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    overflow: 'hidden',
  };

  const StyleMainImg = styled('div')(({ theme }) => ({
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    // maxWidth: '450px' /* 화면에 따라 수정 예정 */,
    background: isLoading ? '#FFE2C5' : '#C7C7C7',
    aspectRatio: '1/1',
    fontSize: 'inherit',
    [theme.breakpoints.down('desktop')]: {
      // maxWidth: '557px',
    },
    [theme.breakpoints.up('desktop')]: {
      // maxWidth: '477px',
    },
  }));

  const styletriangle = {
    position: 'absolute',
    bottom: '0',
    height: '125%',
    width: '100%',
    objectFit: 'fill',
  };

  const styleUpload = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '23%',
    height: '12%',
    // bgcolor: '#FFFFFF',
    borderRadius: '150px',
    color: '#999999',
    // boxShadow: '3px 3px rgba(0, 0, 0, 0.25)',
  };

  const footerLayout = {
    height: '28%',

    padding: '20px 60px',
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    // justifyContent: 'space-between',
    alignItems: 'center',
  };

  const appendImageToFormData = (file: File) => {
    let formData = new FormData();
    formData.append('file', file);
    return formData;
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    let formData = appendImageToFormData(e.dataTransfer.files[0]);
    setIsLoading(true);
    mutate(formData, {
      onSuccess(task_id, variables, context) {
        setTaskId(task_id.task_id);
      },
    });
  };

  const handleClickFileUpload = (
    e: React.ChangeEvent<HTMLInputElement> | any,
  ) => {
    e.preventDefault();
    let formData = appendImageToFormData(e.target.files[0]);
    setIsLoading(true);
    mutate(formData, {
      onSuccess(task_id, variables, context) {
        setTaskId(task_id.task_id);
      },
    });
  };

  const goFirstPage = () => {
    navigate('/', { replace: true });
  };

  useEffect(() => {
    if (taskId !== '') refetch();
  }, [taskId]);

  return (
    <Box sx={styleContainer}>
      <FilmLayout className="filmLayout" theme={theme}>
        <Box
          sx={{
            width: '100%',
            bgcolor: 'white',
            padding: `15px 20px 0px 20px`,
          }}
        >
          <Box className="headerLayout" sx={headerLayout}>
            <Typography
              onClick={goFirstPage}
              variant="h3"
              align="center"
              sx={[
                styleTitle,
                {
                  // fontFamily: "'Indie Flower', cursive",
                  fontFamily: '-moz-initial',
                  width: '100%',
                  color: '#7E7E7E',
                  opacity: '0.8',
                  lineHeight: 1,
                  padding: '-6px -8px',
                  marginBottom: '6px',
                },
              ]}
            >
              simpsonfilm.com
            </Typography>
          </Box>
          <Box className="mainLayout" sx={mainLayout}>
            <StyleMainImg
              className="MainImg"
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              theme={theme}
            >
              <Box
                component="img"
                src={triangle}
                alt="upload Layout"
                sx={styletriangle}
              ></Box>
              {isLoading ? (
                <CircularProgress
                  sx={{
                    color: '#FFFFFF',
                    // fontSize: 'inherit',
                    // width: '10em',
                    // height: '10em',
                  }}
                  size="3em"
                  thickness={6}
                />
              ) : (
                <Button
                  variant="text"
                  sx={styleUpload}
                  aria-label="upload picture"
                  component="label"
                >
                  <input
                    hidden
                    accept="image/*"
                    type="file"
                    onChange={handleClickFileUpload}
                  />
                  <Box
                    component="img"
                    src={uploadIcon}
                    sx={{
                      width: '6em',
                      color:
                        '#FFFFFF' /* 적용 안됨 색 변경 시 다른 이미지 또란 svg로 변경해야함 */,
                    }}
                  />
                </Button>
              )}
            </StyleMainImg>
          </Box>
        </Box>
        <Box className="footerLayout" sx={footerLayout}>
          {/* <Button
            onClick={() => {
              setGender('female');
            }}
            variant="contained"
            color="inherit"
            sx={{
              boxShadow: '3px 3px 0px 0px #C7C7C7',
              padding: 2,
              width: '40%',
              height: '100%',
              borderRadius: '50px',
              backgroundColor: '#FFFFFF',
              fontSize: 'inherit',
            }}
          >
            <Box
              sx={[
                { opacity: 0.5 },
                gender === 'male' ? { filter: `grayscale(1)` } : {},
              ]}
              component="img"
              width="3em"
              src={`/assets/pages/result/female.png`}
            ></Box>
          </Button>
          <Button
            onClick={() => {
              setGender('male');
            }}
            variant="contained"
            color="inherit"
            sx={{
              boxShadow: '3px 3px 0px 0px #C7C7C7',
              padding: 2,
              width: '40%',
              height: '100%',
              borderRadius: '50px',
              backgroundColor: '#FFFFFF',
              fontSize: 'inherit',
            }}
          >
            <Box
              sx={[
                { opacity: 0.5 },
                gender === 'female' ? { filter: `grayscale(1)` } : {},
              ]}
              component="img"
              width="3em"
              src={`/assets/pages/result/male.png`}
            ></Box>
          </Button> */}
          <Box
            onClick={() => {
              setGender('female');
            }}
            sx={[
              {
                opacity: 0.5,
                marginRight: '20px',
                '&:hover': {
                  transform: 'scale(1.2)',
                },
              },
              gender === 'male' ? { filter: `grayscale(1)` } : {},
            ]}
            component="img"
            width="3.2em"
            src={`/assets/pages/result/female.png`}
          ></Box>
          <Box
            onClick={() => {
              setGender('male');
            }}
            sx={[
              {
                opacity: 0.5,
                marginLeft: '20px',
                '&:hover': {
                  transform: 'scale(1.2)',
                },
              },
              gender === 'female' ? { filter: `grayscale(1)` } : {},
            ]}
            component="img"
            width="3em"
            src={`/assets/pages/result/male.png`}
          ></Box>
        </Box>
      </FilmLayout>
    </Box>
  );
};
