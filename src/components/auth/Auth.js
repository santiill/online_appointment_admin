import React from "react";
import s from "./Auth.module.css";
import "../baseStyles.css";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (data) => {
      navigate("/*");
      console.log("data: ", data);
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
              name="username"
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
            disabled={!(formik.values.username && formik.values.password)}
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

export default Auth;
