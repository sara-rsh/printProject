// import styles from "./signUp.module.css";
import styles from "../login/login.module.css";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useState, useContext } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { FlagContext } from "../../context/flagContext.js";

function SignUp() {
  const schema = yup.object().shape({
    phoneNumber: yup
      .string()
      .max(11, "شماره نادرست وارد شده است")
      .min(11, "شماره نادرست وارد شده است")
      .required("پر کردن فیلد اجباری است")
      .matches(
        /(0|\+98)?([ ]|-|[()]){0,2}9[1|2|3|4]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}/,
        "شماره نادرست وارد شده است"
      ),
    password: yup
      .string()
      .min(8, "کلمه عبور باید حداقل 8 کاراکتر باشد")
      .required(),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "رمز عبور مطابقت ندارد")
      .required("پر کردن فیلد اجباری است"),
    username: yup.string().required("پر کردن فیلد اجباری است"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const { isLogedIn, setIsLogedIn } = useContext(FlagContext);

  const onFormSubmit = (data) => {
    fetch("http://localhost:5000/signUp", {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Server response: ", data);
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
    setIsLogedIn(true);
  };

  const [isHidden, setIsHidden] = useState(false);

  return (
    <>
      {!isLogedIn && (
        <form
          noValidate
          onSubmit={handleSubmit(onFormSubmit)}
          className={styles.FieldsContainer}
        >
          <h1>ایجاد حساب کاربری</h1>
          <div className={styles.fields} style={{ gap: "1vw" }}>
            <div className={styles.topFields}>
              <div>
                <input
                  type="text"
                  {...register("phoneNumber")}
                  placeholder="شماره موبایل"
                />
                {errors.phoneNumber && (
                  <p className={styles.validationP}>
                    {errors.phoneNumber?.message}
                  </p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  {...register("username")}
                  placeholder="نام کاربری"
                />
                {errors.username && (
                  <p className={styles.validationP}>
                    {errors.username?.message}
                  </p>
                )}
              </div>
              <div className={styles.password}>
                <input
                  type={!isHidden ? "password" : "text"}
                  {...register("password")}
                  placeholder="گذرواژه"
                />
                <button
                  className={styles.hiddenBtn}
                  onClick={() => setIsHidden((prev) => !prev)}
                >
                  {isHidden ? <LuEye /> : <LuEyeOff />}
                </button>
                {errors.password && (
                  <p className={styles.validationP}>
                    {errors.password?.message}
                  </p>
                )}
              </div>
              <div>
                <input
                  type="password"
                  {...register("confirmPassword")}
                  placeholder="تکرار گذرواژه"
                />
                {errors.confirmPassword && (
                  <p className={styles.validationP}>
                    {errors.confirmPassword?.message}
                  </p>
                )}
              </div>
            </div>
            <div className={styles.logBtns}>
              <button type="submit">ثبت نام</button>
            </div>
          </div>
        </form>
      )}
    </>
  );
}

export default SignUp;
