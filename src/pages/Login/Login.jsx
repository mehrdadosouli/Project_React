import React, { useContext } from 'react'
import {Formik, Form , Field,ErrorMessage } from 'formik'
import { Link , useNavigate} from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'
import { setToLocalStorage } from '../../utils/funcs'



export default function Login() {
    const navigate=useNavigate()
  return (
    <div className='flex md:flex-row flex-col-reverse items-center container md:h-screen h-full'>
        <div className='flex md:w-1/2 w-full p-10 items-center'>
            <Formik 
            initialValues={{password:'',email:'',checkbox:false}}
            validate={(values)=>{
                const errors={}
                if(values.email===""){
                    errors.email="لطفا ایمیل یا یوزر خود راوارد کنید"
                }else if(values.email.length < 5){
                    errors.email="تعداد کاراکتر کمتر از 5 تا است"
                }
                if(values.password===""){
                    errors.password="پسورد خود را وارد کنید"
                }
                return errors
            }}  
            onSubmit={(values)=>{
                const data={
                    identifier:values.email,
                    password:values.password
                }
                axios.post('http://localhost:4000/v1/auth/login',data)
                .then(res=>{if(res.status==200){
                    setToLocalStorage('user',{token:res.data.accessToken})
                    Swal.fire({
                        title: "با موفقیت لاگین شدید",
                        icon: "success",
                        button:'ok'
                    })
                    .then(()=>{
                        navigate("/");
                    })
                }}).catch(()=>{
                    Swal.fire({
                        title: "همچین یوزری نداریم",
                        icon: "error",
                        button:'ok'
                    }).then(()=>{
                        let passwords=document.querySelector('#password')
                        let emails=document.querySelector('#email')
                        passwords.value=""
                        emails.value=""
                    })
                })
            }}>
            {({touched,errors})=>(
                <Form className='flex flex-col gap-10 w-full'>
                    <h1 className='font-extrabold text-5xl'>Login</h1>
                    <Field id="email" className={(touched.email && errors.email) ? "border border-red-400 border-solid p-5" : "border border-gray-400 border-solid p-5"} type="text" autoComplete="on" placeholder="ایمیل یا یوزر خود را وارد کنید" name="email" />
                    <ErrorMessage name='email' component='h3' />
                    <Field id="password" className={(touched.password && errors.password) ? "border border-red-400 border-solid p-5" : "border border-gray-400 border-solid p-5"} autoComplete="on" placeholder="پسورد خود را وارد کنید" type="password" name="password" />
                    {errors.password && touched.password && errors.password}
                    <div className='flex items-center gap-5'><Field type="checkbox" name="checkbox" /> من را ذخیره کن  </div>
                    <button type='submit' className='p-3 bg-green-500 text-white w-[150px] rounded-xl'>ارسال</button>
                    <div> ایا حساب کاربری دارید؟<Link to='/register' className='underline'> ثبت نام </Link></div>
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
