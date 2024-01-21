import React from 'react'
import {Formik, Form , Field,ErrorMessage } from 'formik'
import { Link } from 'react-router-dom'
export default function Login() {
    
  return (
    <div className='flex md:flex-row flex-col-reverse items-center container md:h-screen h-full'>
        <div className='flex md:w-1/2 w-full p-10 items-center'>
            <Formik 
            initialValues={{name:'',email:'',checkbox:false}}
            validate={(values)=>{
                const errors={}
                if(values.email===""){
                    errors.email="لطفا ایمیل راوارد کنید"
                }else if(values.email.length < 5){
                    errors.email="تعداد کاراکتر ایمیل کمتر از 5 تا است"
                }else if(!/[a-z0-9]{5}@(gmail|email)+\.com/gi.test(values.email)){
                    errors.email="لطفا ایمیل را درست وارد کنید"
                }
                if(values.name===""){
                    errors.name="اسم خود را وارد کنید"
                }
                return errors
            }}
            onSubmit={(values)=>{console.log(values)}}>
            {({})=>(
                <Form className='flex flex-col gap-10 w-full'>
                    <h1 className='font-extrabold text-5xl'>Login</h1>
                    <Field className="border border-gray-400 border-solid p-5" placeholder="اسم خود را وارد کنید" type="text" name="name" />
                    <ErrorMessage name='name' component='h3' />
                    <Field className="border border-gray-400 border-solid p-5" type="email" placeholder="ایمیل خود را وارد کنید" name="email" />
                    <ErrorMessage name='email' component='h3' />
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
