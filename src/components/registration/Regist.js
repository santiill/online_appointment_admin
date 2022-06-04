import React, { useState } from "react";
import s from "../auth/Auth.module.css";
import ss from "./Regist.module.css";
import "../baseStyles.css";
import { useFormik } from "formik";
import { MdAddAPhoto } from "react-icons/md";
// import { useNavigate } from "react-router-dom";
import { request } from "../../redux/api";
import { axios } from "axios";

// import {useDispatch} from "react-redux"

const Registration = () => {
  // const dispatch = useDispatch();
  //   const navigate = useNavigate();

  const [img, setImg] = useState();
  const [imgURL, setImgURL] = useState();
  const selectedImg = (e) => {
    setImg(e.target.files[0]);
    if (e.target.files && e.target.files[0]) {
      setImgURL(URL.createObjectURL(e.target.files[0]));
    }
    console.log(e.target.files[0]);
  };

  const formik = useFormik({
    initialValues: {
      //   firstName: "",
      //   lastName: "",
      //   middleName: "",
      //   email: "",
      //   phone: "",
      //   experience: "",
      //   speciality: "",
      //   rating: "",
      //   education: "",
      //   password: "",
      //   avatar: img,
    },
    onSubmit: (data) => {
      console.log("data: ", data);
    },
  });
  return (
    <div className={s.auth_cont}>
      <div className={s.auth_cont}>
        <h3 className={s.auth_title}>Регистрация</h3>
        <form onSubmit={formik.handleSubmit} className={s.form}>
          <label htmlFor="image" className={ss.image_label}>
            <div className={ss.icon_cont}>
              <MdAddAPhoto className={ss.img_icon} />
            </div>
            <img className={ss.image} src={imgURL} alt="" />
          </label>
          <input
            onChange={(e) => selectedImg(e)}
            type="file"
            name="image"
            id="image"
            value={formik.values.фото}
            className={ss.img_file}
          />
          <div className="input_cont">
            <label className="label" htmlFor="">
              Имя
            </label>
            <input
              name="firstName"
              onChange={formik.handleChange}
              className="input"
              type="text"
              placeholder="Введите логин"
            />
          </div>
          <div className="input_cont">
            <label className="label" htmlFor="">
              Фамилия
            </label>
            <input
              name="lastName"
              onChange={formik.handleChange}
              className="input"
              type="text"
              placeholder="Введите логин"
            />
          </div>
          <div className="input_cont">
            <label className="label" htmlFor="">
              Отчество
            </label>
            <input
              name="middleName"
              onChange={formik.handleChange}
              className="input"
              type="text"
              placeholder="Введите логин"
            />
          </div>
          <div className="input_cont">
            <label className="label" htmlFor="">
              Почта
            </label>
            <input
              name="email"
              onChange={formik.handleChange}
              className="input"
              type="text"
              placeholder="Введите логин"
            />
          </div>
          <div className="input_cont">
            <label className="label" htmlFor="">
              Номер
            </label>
            <input
              name="phone"
              onChange={formik.handleChange}
              className="input"
              type="text"
              placeholder="Введите пароль"
            />
          </div>
          <div className="input_cont">
            <label className="label" htmlFor="">
              Опыт
            </label>
            <input
              name="experience"
              onChange={formik.handleChange}
              className="input"
              type="text"
              placeholder="Введите логин"
            />
          </div>
          <div className="input_cont">
            <label className="label" htmlFor="">
              Специальность
            </label>
            <select
              onChange={(e) => formik.handleChange(e)}
              className="input"
              /* value={formik.values.должность} */
              name="speciality"
            >
              <option className={s.option} value="admin">
                Администратор
              </option>
              <option className={s.option} value="florist">
                Флорист
              </option>
              <option className={s.option} value="courier">
                Курьер
              </option>
            </select>
          </div>
          <div className="input_cont">
            <label className="label" htmlFor="">
              Рейтинг
            </label>
            <input
              name="rating"
              onChange={formik.handleChange}
              className="input"
              type="text"
              placeholder="Введите логин"
            />
          </div>
          <div className="input_cont">
            <label className="label" htmlFor="">
              Образование
            </label>
            <input
              name="education"
              onChange={formik.handleChange}
              className="input"
              type="text"
              placeholder="Введите логин"
            />
          </div>
          <div className="input_cont">
            <label className="label" htmlFor="">
              Пароль
            </label>
            <input
              name="password"
              onChange={formik.handleChange}
              className="input"
              type="text"
              placeholder="Введите пароль"
            />
          </div>
          <button
            // disabled={!(formik.values.username && formik.values.password)}
            type="submit"
            className="button"
          >
            Войти
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
