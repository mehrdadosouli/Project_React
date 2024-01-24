import React, { useContext } from 'react'
import {Formik, Form , Field,ErrorMessage } from 'formik'
import { Link , useNavigate} from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'
import AuthContext from '../../context/AuthContext'
import { getMe, setToLocalStorage } from '../../utils/funcs'

export default function Register() {
    const authContext=useContext(AuthContext)
    console.log(getMe());
    const navigate=useNavigate()
  return (
    <div className='flex md:flex-row flex-col-reverse items-center container md:h-screen h-full'>
        <div className='flex md:w-1/2 w-full items-center'>
            <Formik 
            initialValues={{password:'',email:'',checkbox:false,username:'',phone:'',confirmpassword:'',name:''}}
            validate={(values)=>{
                const errors={}
                if(values.email===""){
                    errors.email="لطفا ایمیل راوارد کنید"
                }else if(values.email.length < 5){
                    errors.email="تعداد کاراکتر ایمیل کمتر از 5 تا است"
                }else if(!/[a-z0-9]{5}@(gmail|email)+\.com/gi.test(values.email)){
                    errors.email="لطفا ایمیل را درست وارد کنید"
                }
                if(values.password===""){
                    errors.password="پسورد خود را وارد کنید"
                }
                if(values.name===""){
                    errors.name="نام خود را وارد کنید"
                }
                if(values.username===""){
                    errors.username="یوزر خود را وارد کنید"
                }
                if(values.phone===""){
                    errors.phone="شماره خود را وارد کنید"
                }
                if(values.confirmpassword===""){
                    errors.confirmpassword="پسورد تکرار خود را وارد کنید"
                }else if(values.confirmpassword !==values.password){
                    errors.confirmpassword="پسورد ها یکسان نمیباشند"
                }
                return errors
            }}
            onSubmit={(values)=>{
                const data={
                    name:values.name,
                    username:values.username,
                    email:values.email,
                    phone:values.phone,
                    password:values.password,
                    confirmPassword:values.password,
                }
                axios.post('http://localhost:4000/v1/auth/register',data)
                .then(res=>{
                    Swal.fire({
                        title: "ثبت نام شما با موفقیت انجام شد",
                        icon: "success",
                        button:'ok'
                        
                    }).then(()=>{
                        authContext.password=values.password
                        setToLocalStorage('user',{token:res.data.accessToken})
                        navigate("/");
                    })
                }).catch(()=>{
                    Swal.fire({
                        title: "دوباره تلاش کنید",
                        icon: "error",
                        button:'ok'
                    })
                    .then(()=>{
                        // let names=document.querySelector('#name')
                        // let usernames=document.querySelector('#username')
                        // let phones=document.querySelector('#phone')
                        // let confirmpasswords=document.querySelector('#confirmpassword')
                        // let passwords=document.querySelector('#password')
                        // let emails=document.querySelector('#email')
                        // passwords.value=""
                        // emails.value=""
                        // phones.value=""
                        // names.value=""
                        // confirmpasswords.value=""
                        // usernames.value=""
                        
                    })
                })
            }}>
            {({touched,errors})=>(
                <Form className='flex flex-col gap-10 w-full h-screen py-10'>
                    <h1 className='font-extrabold text-5xl'>Login</h1>
                    <div className='w-full flex flex-col relative'>
                    <span className='absolute right-[-4rem] sm:visible invisible top-[30%]'>نام </span>
                    <Field id="name" className={` ${(touched.name && errors.name) ? "border border-red-400 border-solid p-5" : "border border-gray-400 border-solid p-5"}`} type="text" autoComplete="on" placeholder="اسم خود را وارد کنید" name="name" />
                    <ErrorMessage name='name' component='h3' />
                    </div>

                    <div className='w-full flex flex-col relative'>
                    <span className='absolute right-[-4rem] sm:visible invisible top-[30%]'>یوزر </span>
                    <Field id="username" className={(touched.username && errors.username) ? "border border-red-400 border-solid p-5" : "border border-gray-400 border-solid p-5"} type="text" autoComplete="on" placeholder="یوزر خود را وارد کنید" name="username" />
                    <ErrorMessage name='username' component='h3' />
                    </div>

                    <div className='w-full flex flex-col relative'>
                    <span className='absolute right-[-5rem] sm:visible invisible top-[30%]'>ایمیل </span>
                    <Field id="email" className={(touched.email && errors.email) ? "border border-red-400 border-solid p-5" : "border border-gray-400 border-solid p-5"} type="email" autoComplete="on" placeholder="ایمیل خود را وارد کنید" name="email" />
                    <ErrorMessage name='email' component='h3' />
                    </div>
                    
                    <div className='w-full flex flex-col relative'>
                    <span className='absolute right-[-8rem] sm:visible invisible top-[30%]'>شماره تلفن </span>
                    <Field id="phone" className={(touched.phone && errors.phone) ? "border border-red-400 border-solid p-5" : "border border-gray-400 border-solid p-5"} type="text" autoComplete="on" placeholder="شماره خود را وارد کنید" name="phone" />
                    <ErrorMessage name='phone' component='h3' />
                    </div>

                    <div className='w-full flex flex-col relative'>
                    <span className='absolute right-[-5rem] sm:visible invisible top-[30%]'>پسورد </span>
                    <Field id="password" className={(touched.password && errors.password) ? "border border-red-400 border-solid p-5" : "border border-gray-400 border-solid p-5"} autoComplete="on" placeholder="پسورد خود را وارد کنید" type="password" name="password" />
                    {errors.password && touched.password && errors.password}
                    </div>

                    <div className='w-full flex flex-col relative'>
                    <span className='absolute right-[-8rem] sm:visible invisible top-[30%]'>تکرار پسورد </span>
                    <Field id="confirmpassword" className={(touched.confirmpassword && errors.confirmpassword) ? "border border-red-400 border-solid p-5" : "border border-gray-400 border-solid p-5"} placeholder="پسورد خود را تکرار کنید" type="password" name="confirmpassword" />
                    {errors.confirmpassword && touched.confirmpassword && errors.confirmpassword}
                    </div>
                    
                    <div className='flex items-center gap-5'><Field type="checkbox" name="checkbox" /> من را ذخیره کن  </div>
                    <button type='submit' className='p-3 bg-green-500 text-white w-[150px] rounded-xl'>ارسال</button>
                    <div> اگر حساب کاربری دارید<Link to='/login' className='underline'> ورود </Link></div>
                </Form>
            )}
            </Formik>
        </div>
        <div className='flex md:w-1/2 w-[75%] justify-center items-center'>
                <img src='https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp' className='object-cover w-full h-1/2' alt="login" />
        </div>
    </div>
  )
}
