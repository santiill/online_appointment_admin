import React from "react";
import s from "./Settings.module.css"

const Rating = () => {
  return <div className="container"><h3>Мой профиль</h3>
    <div className={s.container}>

      
    <div className={s.profile_container}>
      <img className="modal_img" src="https://media.istockphoto.com/photos/cropped-portrait-of-an-attractive-young-female-scientist-posing-in-picture-id1340903310?b=1&k=20&m=1340903310&s=612x612&w=0&h=I-LIGHNADUEBRBnYZKNYPs3AAzSsNmEuZ_C_1O99h7U="/>
      <p style={{fontWeight:"bold", marginTop: 10}}>Сурмакан Алыбаева Аттокуровна</p>
      <p className={s.text}>Физиотерапевт</p>
      <button style={{width: 105, fontSize: 15, margin: 10}} className="base_button">Edit profile</button>
      <p >13 Rates</p>
      <div className={s.stars}><span className="star">&#9733;</span><span className="star">&#9733;</span><span className="star">&#9733;</span><span className="star">&#9733;</span><span className="star">&#9734;</span></div>
    </div>
    <div className={s.content_cont}>

      <div className={s.tab_cont}>
      <p>Профиль</p>
      <p>Изменения пороля</p>
      <p>Уведомления</p>
      <p>Отзывы</p>
    </div>
    <h4>Отзывы</h4>
    <div className={s.review}>

        <div className={s.review_header} >
          <div className={s.fl}>
            <img style={{width: 50, borderRadius: 50}} src="https://img.freepik.com/free-photo/young-handsome-man-with-beard-over-isolated-keeping-the-arms-crossed-in-frontal-position_1368-132662.jpg?w=360"/>
            <div className={s.fld}>
              <p>Руслан Кантемиров</p>
            <p className={s.text}>Инженер</p>
            </div>
          </div>
          <div className={s.fld} style={{textAlign:"end"}}><div className={s.stars}>
          <span className="star">&#9733;</span><span className="star">&#9733;</span><span className="star">&#9733;</span><span className="star">&#9733;</span><span className="star">&#9734;</span>
          </div>
          <div><p className={s.text}>05.06.2022</p></div></div>
        
        </div>
        <p className={s.text}>Медицинские центры и клиники Москвы (народный рейтинг): 949 лечебных учреждений, 25145 специалистов, 55518 отзывов пациентов, цены на услуги от 5 до 912500 рублей, номера телефонов, сайты, адреса и схемы проезда.</p>
      
    </div>
    <div className={s.review}>

        <div className={s.review_header} >
          <div className={s.fl}>
            <img style={{width: 50, borderRadius: 50}} src="https://www.mantruckandbus.com/fileadmin/media/bilder/02_19/219_05_busbusiness_interviewHeader_1485x1254.jpg"/>
            <div className={s.fld}>
              <p>Акмат Акматов</p>
            <p className={s.text}>Инженер</p>
            </div>
          </div>
          <div style={{textAlign:"end"}}><div className={s.stars}>
          <span className="star">&#9733;</span><span className="star">&#9733;</span><span className="star">&#9733;</span><span className="star">&#9733;</span><span className="star">&#9734;</span>
          </div>
          <div><p  className={s.text}>05.06.2022</p></div></div>
        
        </div>
        <p className={s.text}>Медицинские центры и клиники Москвы (народный рейтинг): 949 лечебных учреждений, 25145 специалистов, 55518 отзывов пациентов, цены на услуги от 5 до 912500 рублей, номера телефонов, сайты, адреса и схемы проезда.</p>
      
    </div>
    </div>
    </div>
    
    
    {/* Rating */}
    {/* <div className="flex_column">
      <img style={{width: 300}} src="https://media.istockphoto.com/photos/cropped-portrait-of-an-attractive-young-female-scientist-posing-in-picture-id1340903310?b=1&k=20&m=1340903310&s=612x612&w=0&h=I-LIGHNADUEBRBnYZKNYPs3AAzSsNmEuZ_C_1O99h7U="/>
      <div style={{gap: 7}} className="">
        <p></p>
        <p></p>
        <div style={{width: 100}} className="flex"><p className="star">&#9733;</p><p className="star">&#9733;</p><p className="star">&#9733;</p><p className="star">&#9733;</p><p className="star">&#9734;</p></div>
        
      </div>
    </div> */}

  </div>;
};

export default Rating;
