import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import s from "./baseModalStyles.module.css"

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

export default function ClientModal({handleClose, open}) {

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>
            <div className={s.image_cont}>
              <img className="modal_img" src='https://img.freepik.com/free-photo/young-handsome-man-with-beard-over-isolated-keeping-the-arms-crossed-in-frontal-position_1368-132662.jpg?w=360'/>
              <p className={s.title}>Руслан Кантемиров</p>
            </div>
            <hr/>
            <div className={s.flex_cont}>
              <div>
                <p className={s.label}>Почта</p>
                <p >ruslan@gmail.com</p>
              </div>
              <div>
                <p className={s.label}>Номер</p>
                <p >0997560019</p>
              </div>
              <div>
                <p className={s.label}>Дата рождения</p>
                <p >20.05.1991</p>
              </div>
              <div>
                <p className={s.label}>Болезнь</p>
                <p >Бронхит</p>
              </div>
            </div>
            <hr/>
            <div className={s.card_container}>
              <div className={s.card_blood}><p>Давление крови</p><p className={s.blood}>141/90</p></div>
            <div className={s.card_body}><p>Температура тела</p><p className={s.body}>29</p></div>
            <div className={s.card_weight}><p>Вес</p><p className={s.weight}>78</p></div>
            <div className={s.card_height}><p>Рост</p><p className={s.height}>191</p></div>
            </div>
            
          </div>
        </Box>
      </Modal>
    </div>
  );
}