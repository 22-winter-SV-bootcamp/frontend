import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';

const CheckItem = ({ info, title, setModal, setSelect }: any) => {
  return (
    <Box>
      <Typography>{title}</Typography>
      <Button
        onClick={() => {
          setModal(true);
          setSelect(title);
        }}
      >
        <Box
          component="img"
          width={30}
          height={30}
          src={`src/assets/custom/${title}/${info[title]}.png`}
          alt={info[title]}
        ></Box>
      </Button>
    </Box>
  );
};

export default CheckItem;
