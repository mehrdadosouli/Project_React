import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2';
import { Formik,Form,Field,ErrorMessage} from 'formik';
import axios from 'axios';
export default function Footer() {
    const [data,setData]=useState([])

  return (
    <footer>
    <div className='flex md:flex-row md:gap-0 gap-10 flex-col justify-between container bg-gray-300 p-10 md:[&>*]:w-1/3 [&>*]:w-full [&>*]:px-5 rounded-2xl [&>*]:relative [&>*]:before:befores_footer'>
        <div className='z-10'>
            <h4 className='font-bold'>درباره ما</h4>
            <p className='text-gray-600 pt-5'>وقتی تازه شروع به یادگیری برنامه نویسی کردم. یکی از مشکلاتی که در فرآیند یادگیری داشتم، کمبود آموزش های خوب با پشتیبانی قابل قبول بود که باعث شد اون موقع تصمیم بگیرم اگر روزی توانایی مالی و فنی قابل قبولی داشتم یک وب سایت برای حل این مشکل راه اندازی کنم! و خب امروز آکادمی آموزش برنامه نویسی سبزلرن به عنوان یک آکادمی خصوصی فعالیت میکنه و این به این معنی هست که هر مدرسی اجازه تدریس در اون رو نداره و باید از فیلترینگ های خاص آکادمی سبزلرن رد شه! این به این معنی هست که ما برامون فن بیان و نحوه تعامل مدرس با دانشجو بسیار مهمه! ما در آکادمی سبزلرن تضمین پشتیبانی خوب و با کیفیت رو به شما میدیم . چرا که مدرسین وب سایت سبزلرن حتی برای پشتیبانی دوره های رایگان شون هم هزینه دریافت میکنند و متعهد هستند که هوای کاربر های عزیز رو داشته باشند !</p>
        </div>
        <div className='z-10'>
            <h4 className='font-bold'>آخرین مطالب</h4>
            <div className=' [&>*]:py-5'>
                <div><Link to="/category-info/frontend">نحوه نصب کتابخانه در پایتون | آموزش نصب کتابخانه پایتون</Link></div>
                <div><Link to="/category-info/frontend">چگونه پایتون را آپدیت کنیم؟ | آموزش صفر تا صد آپدیت کردن پایتون</Link></div>
                <div><Link to="/category-info/frontend">نحوه نصب کتابخانه در پایتون | آموزش نصب کتابخانه پایتون</Link></div>
                <div><Link to="/category-info/frontend">چگونه پایتون را آپدیت کنیم؟ | آموزش صفر تا صد آپدیت کردن پایتون</Link></div>
                <div><Link to="/category-info/frontend">نحوه نصب کتابخانه در پایتون | آموزش نصب کتابخانه پایتون</Link></div>
                
            </div>
        </div>
    <div className='z-10'>
            <h4 className='font-bold'>دسترسی سریع</h4>
            <div className='[&>*]:w-1/2 flex flex-wrap [&>*]:py-5'>
                <div><Link to="/course-info/html">آموزش HTML</Link></div>
                <div><Link to="/course-info/js-expert">آموزش Java</Link></div>
                <div><Link to="/course-info/react-expert">آموزش React</Link></div>
                <div><Link to="/course-info/css-course">آموزش Css</Link></div>
                <div><Link to="/course-info/bootstrap">آموزش Bootstrap</Link></div>
                <div><Link to="/course-info/py-expert">آموزش Pyton</Link></div>
            </div>
        <div>
        <Formik 
        initialValues={{email:''}} 
        onSubmit={(values,{setSubmitting})=>{
            axios.post('http://localhost:4000/v1/newsletters',values,{
                Headers:{
                    "Content-Type":"application/json"
                }
            }).then(res=>{
                if(res.status==201){
                    Swal.fire({
                        title: "ایمیل با موفقیت ارسال شد",
                        icon: "success"
                    })
                }
            })
        }} 
        validate={(values)=>{
                const errors={}
                if(values.email===""){
                    errors.email="لطفا ایمیل راوارد کنید"
                }else if(values.email.length < 5){
                    errors.email="تعداد کاراکتر ایمیل کمتر از 5 تا است"
                }else if(!/[a-z0-9]{5}@(gmail|email)+\.com/gi.test(values.email)){
                    errors.email="لطفا ایمیل را درست وارد کنید"
                }
                return errors
            }}>
                {({handleSubmit,errors,touched,isSubmitting})=>(
                <Form>
                    <Field name='email' type="email" className="p-1 sm:w-52 w-36" />
                     <button className='p-1 bg-green-400 text-white' type='submit'>submit</button>
                    {/* <div>{errors.email && touched.email && errors.email}</div> */}
                    <ErrorMessage name='email' component='h1' />
                </Form>
                )}
            </Formik>
        </div>
    </div>
    </div>
    <div className='bg-green-500 flex w-3/4 h-8 rounded-b-3xl mx-auto'></div>
    <div className='bg-gray-300 mt-10 text-center p-8 font-semibold'>کلیه حقوق برای آکادمی آموزش برنامه نویسی وب لرن محفوظ است.</div>
    </footer>
    
  )
}
