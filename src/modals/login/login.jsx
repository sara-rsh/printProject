import styles from "./login.module.css";
import BackDrop from "../BackDrop/backDrop";
import { useState, useContext } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LuEye, LuEyeOff } from "react-icons/lu";
import SignUp from "../signUp/signUp";
import { FlagContext } from "../../context/flagContext.js";
import image from "../../assets/Frame 11.jpg";

function Login({ closeModal, phoneNumber, password }) {
  const [isFirstModalOpen, setIsFirstModalOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  const { isLogedIn, setIsLogedIn } = useContext(FlagContext);

  const schema = yup.object().shape({
    phoneNumber: yup
      .string()
      .matches(phoneNumber, "کاربری با این شماره همراه ثبت نام نشده است")
      .required("پر کردن فیلد اجباری است"),
    password: yup
      .string()
      .matches(password)
      .required("پر کردن فیلد اجباری است"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onFormSubmit = (data) => {
    fetch('http://localhost:5000/login', {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Server response: ', data);
        setIsLogedIn(true);
      })
      .catch(error => {
        console.error('Error: ', error);
      });
      console.log(isLogedIn)
  };

  return (
    <>
      {!isLogedIn && (
        <BackDrop id="login">
          <div className={styles.shadow}></div>
          <div className={styles.container}>
            <img className={styles.logImg} src={image} alt="printer" />
            <div>
              <div className={styles.headContainer}>
                <button
                  onClick={() => {
                    closeModal(false);
                  }}
                >
                  x
                </button>
                <img src="/" alt="logoImage" />
              </div>
              {isFirstModalOpen ? (
                <SignUp />
              ) : (
                <form
                  noValidate
                  onSubmit={handleSubmit(onFormSubmit)}
                  className={styles.fieldsContainer}
                >
                  <h1>ورود به حساب کاربری</h1>
                  <div className={styles.fields}>
                    <div className={styles.topFields}>
                      <div>
                        <input
                          type="text"
                          {...register("phoneNumber")}
                          placeholder="شماره همراه"
                        />
                        {errors.phoneNumber && (
                          <p className={styles.validationP}>
                            {errors.phoneNumber.message}
                          </p>
                        )}
                      </div>
                      <div className={styles.password}>
                        <input
                          type={!isHidden ? "password" : "text"}
                          placeholder="گذرواژه"
                          {...register("password")}
                        />
                        <button
                          className={styles.hiddenBtn}
                          onClick={() => setIsHidden((prev) => !prev)}
                        >
                          {isHidden ? <LuEye /> : <LuEyeOff />}
                        </button>
                        {errors.password && (
                          <p className={styles.validationP}>
                            {errors.password.message}
                          </p>
                        )}
                      </div>
                      <a href="/">گذرواژه خود را فراموش کرده ام</a>
                    </div>
                    <div className={styles.logBtns}>
                      {" "}
                      <button type="submit">ورود</button>
                      <button
                        id="signBtn"
                        onClick={() => {
                          setIsFirstModalOpen((prev) => !prev);
                          document.getElementById("signBtn").style.display =
                            "none";
                        }}
                      >
                        ثبت نام
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </BackDrop>
      )}
    </>
  );
}
export default Login;
