import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { setToLocalStorage } from "../../utils/funcs";
import { registerUser } from "../../features/dataSlice";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="flex md:flex-row flex-col-reverse items-center container md:h-screen h-full">
      <div className="flex md:w-1/2 w-full items-center">
        <Formik
          initialValues={{
            password: "",
            email: "",
            checkbox: false,
            username: "",
            phone: "",
            confirmpassword: "",
            name: "",
          }}
          validate={(values) => {
            const errors = {};
            if (values.email === "") {
              errors.email = "لطفا ایمیل راوارد کنید";
            } else if (values.email.length < 5) {
              errors.email = "تعداد کاراکتر ایمیل کمتر از 5 تا است";
            } else if (
              !/[a-z0-9]{5}@(gmail|email)+\.com/gi.test(values.email)
            ) {
              errors.email = "لطفا ایمیل را درست وارد کنید";
            }
            if (values.password === "") {
              errors.password = "پسورد خود را وارد کنید";
            }
            if (values.name === "") {
              errors.name = "نام خود را وارد کنید";
            }
            if (values.username === "") {
              errors.username = "یوزر خود را وارد کنید";
            }
            if (values.phone === "") {
              errors.phone = "شماره خود را وارد کنید";
            }
            if (values.confirmpassword === "") {
              errors.confirmpassword = "پسورد تکرار خود را وارد کنید";
            } else if (values.confirmpassword !== values.password) {
              errors.confirmpassword = "پسورد ها یکسان نمیباشند";
            }
            return errors;
          }}
          onSubmit={(values) => {
            const data = {
              id:uuidv4(),
              name: values.name,
              username: values.username,
              email: values.email,
              phone: values.phone,
              password: values.password,
              confirmPassword: values.password,
            };
            try {
              const { id, name, email } = data;
              setToLocalStorage("user", { id, name, email });
              const func = async () => {
                await dispatch(registerUser(data));
                await Swal.fire({
                  title: "ثبت نام با موفقیت انجام شد",
                  icon: "success",
                  confirmButtonText: "خانه",
                });
                await navigate("/");
              };
              func();
            } catch (error) {
              Swal.fire(
                {
                  title: "دوباره تلاش کن",
                  icon: "error",
                  confirmButtonText: "باشه",
                },
                () => {
                  navigate("/register");
                }
              );
            }
          }}
        >
          {({ touched, errors }) => (
            <Form className="flex flex-col gap-10 w-full h-screen py-10">
              <h1 className="font-extrabold text-5xl">فرم ثبت نام</h1>
              <div className="w-full flex justify-between items-center">
                <h4>نام </h4>
                <div className="w-[80%]">
                  <Field
                    id="name"
                    className={`w-full ${
                      touched.name && errors.name
                        ? "border border-red-400 border-solid p-5"
                        : "border border-gray-400 border-solid p-5"
                    }`}
                    type="text"
                    autoComplete="on"
                    placeholder="اسم خود را وارد کنید"
                    name="name"
                  />
                  <ErrorMessage name="name" component="h3" />
                </div>
              </div>

              <div className="w-full flex justify-between items-center">
                <h4>نام خانوادگی </h4>
                <div className="w-[80%]">
                  <Field
                    id="username"
                    className={`w-full ${
                      touched.username && errors.username
                        ? "border border-red-400 border-solid p-5"
                        : "border border-gray-400 border-solid p-5"
                    }`}
                    type="text"
                    autoComplete="on"
                    placeholder="نام خانوادگی خود را وارد کنید"
                    name="username"
                  />
                  <ErrorMessage name="username" component="h3" />
                </div>
              </div>

              <div className="w-full flex justify-between items-center">
                <h4>ایمیل </h4>
                <div className="w-[80%]">
                  <Field
                    id="email"
                    className={`w-full ${
                      touched.email && errors.email
                        ? "border border-red-400 border-solid p-5"
                        : "border border-gray-400 border-solid p-5"
                    }`}
                    type="email"
                    autoComplete="on"
                    placeholder="ایمیل خود را وارد کنید"
                    name="email"
                  />
                  <ErrorMessage name="email" component="h3" />
                </div>
              </div>

              <div className="w-full flex justify-between items-center">
                <h4>شماره تلفن </h4>
                <div className="w-[80%]">
                  <Field
                    id="phone"
                    className={`w-full ${
                      touched.phone && errors.phone
                        ? "border border-red-400 border-solid p-5"
                        : "border border-gray-400 border-solid p-5"
                    }`}
                    type="text"
                    autoComplete="on"
                    placeholder="شماره خود را وارد کنید"
                    name="phone"
                  />
                  <ErrorMessage name="phone" component="h3" />
                </div>
              </div>

              <div className="w-full flex justify-between items-center">
                <h4>پسورد </h4>
                <div className="w-[80%]">
                  <Field
                    id="password"
                    className={`w-full ${
                      touched.password && errors.password
                        ? "border border-red-400 border-solid p-5"
                        : "border border-gray-400 border-solid p-5"
                    }`}
                    autoComplete="on"
                    placeholder="پسورد خود را وارد کنید"
                    type="password"
                    name="password"
                  />
                  {errors.password && touched.password && errors.password}
                </div>
              </div>

              <div className="w-full flex justify-between items-center">
                <h4>تکرار پسورد </h4>
                <div className="w-[80%]">
                  <Field
                    id="confirmpassword"
                    className={`w-full ${
                      touched.confirmButtonText && errors.confirmButtonText
                        ? "border border-red-400 border-solid p-5"
                        : "border border-gray-400 border-solid p-5"
                    }`}
                    placeholder="پسورد خود را تکرار کنید"
                    type="password"
                    name="confirmpassword"
                  />
                  {errors.confirmpassword &&
                    touched.confirmpassword &&
                    errors.confirmpassword}
                </div>
              </div>

              <div className="flex items-center gap-5">
                <Field type="checkbox" name="checkbox" /> من را ذخیره کن{" "}
              </div>
              <button
                type="submit"
                className="p-3 bg-green-500 text-white w-[150px] rounded-xl"
              >
                ارسال
              </button>
              <div>
                {" "}
                اگر حساب کاربری دارید
                <Link to="/login" className="underline">
                  {" "}
                  ورود{" "}
                </Link>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <div className="flex md:w-1/2 w-[75%] justify-center items-center">
        <img
          src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          className="object-cover w-full h-1/2"
          alt="login"
        />
      </div>
    </div>
  );
}
