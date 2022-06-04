import React from "react";
import s from "./Auth.module.css";
import "../baseStyles.css";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { AuthApi, request } from "../../redux/api";
import { axios } from "axios";

// import {useDispatch} from "react-redux"

const Auth = () => {
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  const registerBtn = () => navigate("/registration");
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (data) => {
      console.log("data: ", data);
      // AuthApi(data);
      request.login(data).then((res) => {
        console.log(res);
        navigate("/*");
      });
      // axios
      //   .post("https://doctor-admin.herokuapp.com/api/auth", data)
      //   .then((res) => {
      //     console.log(res);
      //     navigate("/*");
      //   });
      //   auth(data, setShow);
    },
  });
  return (
    <div className={s.auth_cont}>
      <div className={s.auth_cont}>
        <h3 className={s.auth_title}>Войти</h3>
        <form onSubmit={formik.handleSubmit} className={s.form}>
          <div className="input_cont">
            <label className="label" htmlFor="">
              Логин
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
          <p onClick={registerBtn}>Зарегистрироваться</p>
        </form>
      </div>
    </div>
  );
};

export default Auth;
