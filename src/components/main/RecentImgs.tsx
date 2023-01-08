import getRecentImgs from '@/apis/getRecentImgs';
import { convertLength } from '@mui/material/styles/cssUtils';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Transform } from 'stream';
import tryNow from '../../assets/tryNow.png';
import doh from '../../assets/doh.png';
type CardsType = {
  id: number;
  link: string;
};

const RecentImgs = () => {
  const [index, setIndex] = useState(0);
  const [cards, setCards] = useState<CardsType[]>([]);

  const mod = (n: number, m: number) => {
    let result = n % m;

    // Return a positive value
    return result >= 0 ? result : result + m;
  };

  useEffect(() => {
    let data;

    (async () => {
      try {
        data = await getRecentImgs(1);

        setCards(data.data);
      } catch (error) {}
    })();
  }, []);

  const onClickRight = () => {
    setIndex((index + 1) % cards.length);
    console.log(index);
  };

  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        backgroundColor: 'black',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Box component="img" src={doh} sx={{ width: 250, height: 150 }}></Box>
      <Box sx={{ width: '100%', height: '100%' }}>
        <Box sx={{ width: '100%', height: '100%', postion: 'relative' }}>
          {cards.map((card, i) => {
            const indexLeft = mod(index - 1, cards.length);
            const indexRight = mod(index + 1, cards.length);
            const indexLeft2 = mod(index - 2, cards.length);
            const indexRight2 = mod(index + 2, cards.length);

            let style: any = [
              {
                position: 'absolute',
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                margin: 'auto',
                width: 320,
                height: 490,
                objectFit: 'cover',
                cursor: 'pointer',
                zIndex: 0,
                opacity: 0,
                transition: '500ms',
              },
            ];
            // let className = "card";
            // let click = onClickRight;

            if (i === index) {
              style.push({
                opacity: 1,
                transform: 'scale(1)',
                zIndex: 99,
              });
            } else if (i === indexRight) {
              style.push({
                opacity: 0.8,
                transform: 'translateX(30%) scale(0.8)',
                transition: '500ms',
                zIndex: 66,
              });
            } else if (i === indexLeft) {
              style.push({
                opacity: 0.8,
                transform: 'translateX(-30%) scale(0.8)',
                transition: '500ms',
                zIndex: 66,
              });
            } else if (i === indexLeft2) {
              style.push({
                opacity: 0.3,
                transform: 'translateX(-60%) scale(0.6)',
                transition: '500ms',
                zIndex: 33,
              });
            } else if (i === indexRight2) {
              style.push({
                opacity: 0.3,
                transform: 'translateX(60%) scale(0.6)',
                transition: '500ms',
                zIndex: 33,
              });
            }

            return (
              <Box
                key={card?.id}
                component="img"
                sx={style}
                alt="심슨 이미지"
                src={card?.link}
                onClick={onClickRight}
              ></Box>
            );
          })}
        </Box>
      </Box>
      <Box component="img" src={tryNow} sx={{ width: 300, height: 150 }}></Box>
    </Box>
  );
};

export default RecentImgs;
