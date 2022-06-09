import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function AppointModal({handleClose, open}) {

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" textAlign="center" component="h5">
          Алтынай Салтанатова
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Номер: 0998645325
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 1, mb:2 }}>
            Дата: 15:00
          </Typography>
          <input placeholder='Введите диагноз' className='input'/>
          <button className='base_button' >Поставить диагноз</button>
        </Box>
      </Modal>
    </div>
  );
}