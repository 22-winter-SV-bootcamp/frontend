import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';

const CheckItem = ({ info, title, setModal, setSelect }: any) => {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Typography variant="h4">{title}</Typography>
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
          src={`src/assets/custom/${info.gender}/${title}/${info[title]}.svg`}
          alt={info[title]}
        ></Box>
      </Button>
    </Box>
  );
};

export default CheckItem;
