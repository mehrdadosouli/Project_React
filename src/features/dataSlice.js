import { createSlice } from "@reduxjs/toolkit";
import img1 from '../assets/courses/1.png'
import img2 from '../assets/courses/2.png'
import img3 from '../assets/courses/3.png'
import img4 from '../assets/courses/4.png'
import img5 from '../assets/courses/5.png'
import img6 from '../assets/courses/6.png'
const initialState={
    menu:[
        {id:1,page:'صفحه اصلی',link:'/',icon:''},
        {id:2,page:'فروشگاه',link:'/shopping',icon:''},
        {id:3,page:'فرانت اند',link:'/frontend',icon:'',submenu:[
            {id:1,page:'Html',icon:'',link:'/frontend/html'},
            {id:2,page:'Html',icon:'',link:'/frontend/html'},
            {id:3,page:'Html',icon:'',link:'/frontend/html'},
            {id:4,page:'Html',icon:'',link:'/frontend/html'},
        ]},
        {id:4,page:'بک اند',link:'/backend',icon:'',submenu:[
            {id:1,page:'Nodejs',icon:'',link:'/backend/nodejs'},
            {id:2,page:'Nodejs',icon:'',link:'/backend/nodejs'},
            {id:3,page:'Nodejs',icon:'',link:'/backend/nodejs'},
            {id:4,page:'Nodejs',icon:'',link:'/backend/nodejs'},
        ]},
        {id:5,page:'ارتباط با ما',link:'/abouteus',icon:''},
        {id:6,page:'درباره ما',link:'/contactus',icon:''},

    ],
    allCourse:[
    {
        "_id": "65c0d36eaba3d223ba4e44a3",
        "name": "آموزش جاوااسکریپت",
        "description": "توضیحات تستی برای دوره آموزش  جاوااسکریپت",
        "cover": img1,
        "support": "گروه تلگرامی",
        "shortName": "js-expert",
        "price": 300000,
        "isComplete": 0,
        "status": "start",
        "categoryID": {
            "_id": "6345cbd132c10de974957632",
            "title": "برنامه نویسی فرانت اند",
            "createdAt": "2022-10-11T20:02:25.118Z",
            "updatedAt": "2022-10-31T12:16:38.299Z",
            "__v": 0,
            "name": "frontend"
        },
        "creator": {
            "_id": "634e6b0e1d5142b91afa9bb3",
            "username": "amin_saeedi",
            "email": "ce01010101it@gmail.com",
            "name": "محمدامین سعیدی راد",
            "role": "ADMIN",
            "createdAt": "2022-10-18T08:59:58.561Z",
            "updatedAt": "2022-10-18T08:59:58.561Z",
            "__v": 0,
            "profile": "/images/saeedi.png",
            "phone": "09921558293"
        },
        "createdAt": "2022-10-30T23:16:38.317Z",
        "updatedAt": "2022-10-30T23:16:38.317Z",
        "__v": 0,
        "registers": 0,
        "courseAverageScore": 5
    },
    {
        "_id": "65c0d1baaba3d223ba4e449c",
        "name": "آموزش داکر",
        "description": "توضیحات تستی برای دوره آموزش  داکر",
        "cover": img2,
        "support": "گروه تلگرامی",
        "shortName": "docker",
        "price": 300000,
        "isComplete": 0,
        "status": "start",
        "categoryID": {
            "_id": "6345cbd132c10de974957632",
            "title": "برنامه نویسی فرانت اند",
            "createdAt": "2022-10-11T20:02:25.118Z",
            "updatedAt": "2022-10-31T12:16:38.299Z",
            "__v": 0,
            "name": "frontend"
        },
        "creator": {
            "_id": "634e6b0e1d5142b91afa9bb3",
            "username": "amin_saeedi",
            "email": "ce01010101it@gmail.com",
            "name": "محمدامین سعیدی راد",
            "role": "ADMIN",
            "createdAt": "2022-10-18T08:59:58.561Z",
            "updatedAt": "2022-10-18T08:59:58.561Z",
            "__v": 0,
            "profile": "/images/saeedi.png",
            "phone": "09921558293"
        },
        "createdAt": "2022-10-30T23:16:38.317Z",
        "updatedAt": "2022-10-30T23:16:38.317Z",
        "__v": 0,
        "registers": 0,
        "courseAverageScore": 5
    },
    {
        "_id": "65c0cf77aba3d223ba4e448e",
        "name": "آموزش مونگو mongo",
        "description": "توضیحات تستی برای دوره آموزش مونگو Mysql",
        "cover": img3,
        "support": "گروه تلگرامی",
        "shortName": "mongo-course",
        "price": 300000,
        "isComplete": 0,
        "status": "start",
        "categoryID": {
            "_id": "6345cbd132c10de974957632",
            "title": "برنامه نویسی فرانت اند",
            "createdAt": "2022-10-11T20:02:25.118Z",
            "updatedAt": "2022-10-31T12:16:38.299Z",
            "__v": 0,
            "name": "frontend"
        },
        "creator": {
            "_id": "634e6b0e1d5142b91afa9bb3",
            "username": "amin_saeedi",
            "email": "ce01010101it@gmail.com",
            "name": "محمدامین سعیدی راد",
            "role": "ADMIN",
            "createdAt": "2022-10-18T08:59:58.561Z",
            "updatedAt": "2022-10-18T08:59:58.561Z",
            "__v": 0,
            "profile": "/images/saeedi.png",
            "phone": "09921558293"
        },
        "createdAt": "2022-10-30T23:16:38.317Z",
        "updatedAt": "2022-10-30T23:16:38.317Z",
        "__v": 0,
        "registers": 0,
        "courseAverageScore": 5
    },
    {
        "_id": "65c0c99faba3d223ba4e4487",
        "name": "آموزش دیتابیس Mysql",
        "description": "توضیحات تستی برای دوره آموزش دیتابیس Mysql",
        "cover": img4,
        "support": "گروه تلگرامی",
        "shortName": "mysql-course",
        "price": 300000,
        "isComplete": 0,
        "status": "start",
        "categoryID": {
            "_id": "6345cbd132c10de974957632",
            "title": "برنامه نویسی فرانت اند",
            "createdAt": "2022-10-11T20:02:25.118Z",
            "updatedAt": "2022-10-31T12:16:38.299Z",
            "__v": 0,
            "name": "frontend"
        },
        "creator": {
            "_id": "634e6b0e1d5142b91afa9bb3",
            "username": "amin_saeedi",
            "email": "ce01010101it@gmail.com",
            "name": "محمدامین سعیدی راد",
            "role": "ADMIN",
            "createdAt": "2022-10-18T08:59:58.561Z",
            "updatedAt": "2022-10-18T08:59:58.561Z",
            "__v": 0,
            "profile": "/images/saeedi.png",
            "phone": "09921558293"
        },
        "createdAt": "2022-10-30T23:16:38.317Z",
        "updatedAt": "2022-10-30T23:16:38.317Z",
        "__v": 0,
        "registers": 0,
        "courseAverageScore": 5
    },
    {
        "_id": "635f05d6fd9e8fcba0d2c909",
        "name": "آموزش 20 کتابخانه جاوا اسکریپت",
        "description": "توضیحات تستی برای دوره آموزش 20 کتابخانه جاوا اسکریپت",
        "cover": img5,
        "support": "گروه تلگرامی",
        "shortName": "js-20-lib",
        "sessions":[
            {
                "_id": "636252530fda8658687d581c",
                "title": "آشنایی اولیه با متد toFixed",
                "time": "12:09",
                "video": "1.mp4",
                "course": "635f05d6fd9e8fcba0d2c909",
                "createdAt": "2022-11-02T11:19:47.677Z",
                "updatedAt": "2022-11-02T11:19:47.677Z",
                "__v": 0,
                "free": 1
            },
            {
                "_id": "636252edc1e677a316578e7a",
                "title": "نحوه پیاده سازی پروژه فلان",
                "time": "19:21",
                "video": "2.mp4",
                "course": "635f05d6fd9e8fcba0d2c909",
                "createdAt": "2022-11-02T11:22:21.731Z",
                "updatedAt": "2022-11-02T11:22:21.731Z",
                "__v": 0,
                "free": 1
            },
            {
                "_id": "6362bbaf4041a372f5585532",
                "title": "کار با لایبرری SweetAlert",
                "time": "19:15",
                "video": "b36e8afba55d2275896e1fbda77ec47f7981e20c230f3470f8678b2fc6160515.mp4",
                "free": 0,
                "course": "635f05d6fd9e8fcba0d2c909",
                "createdAt": "2022-11-02T18:49:19.876Z",
                "updatedAt": "2022-11-02T18:49:19.876Z",
                "__v": 0
            },
            {
                "_id": "6364ceb7f059641530fef964",
                "title": "کار با لایبرری swiper js",
                "time": "12:00",
                "video": "b36e8afba55d2275896e1fbda77ec47f7981e20c230f3470f8678b2fc6160515.mp4",
                "free": 0,
                "course": "635f05d6fd9e8fcba0d2c909",
                "createdAt": "2022-11-04T08:35:03.825Z",
                "updatedAt": "2022-11-04T08:35:03.825Z",
                "__v": 0
            },
            {
                "_id": "6364d48af0596415300eea26",
                "title": "کار با لایبرری chartjs",
                "time": "10:00",
                "video": "b36e8afba55d2275896e1fbda77ec47f7981e20c230f3470f8678b2fc6160515.mp4",
                "free": 1,
                "course": "635f05d6fd9e8fcba0d2c909",
                "createdAt": "2022-11-04T08:59:54.196Z",
                "updatedAt": "2022-11-04T08:59:54.196Z",
                "__v": 0
            },
            {
                "_id": "6364d4eef059641530105022",
                "title": "کار با لایبرری owljs",
                "time": "20:00",
                "video": "b36e8afba55d2275896e1fbda77ec47f7981e20c230f3470f8678b2fc6160515.mp4",
                "free": 1,
                "course": "635f05d6fd9e8fcba0d2c909",
                "createdAt": "2022-11-04T09:01:34.853Z",
                "updatedAt": "2022-11-04T09:01:34.853Z",
                "__v": 0
            },
            {
                "_id": "6364d51df05964153011087f",
                "title": "کار با لایبرری jquery",
                "time": "11:00",
                "video": "b36e8afba55d2275896e1fbda77ec47f7981e20c230f3470f8678b2fc6160515.mp4",
                "free": 0,
                "course": "635f05d6fd9e8fcba0d2c909",
                "createdAt": "2022-11-04T09:02:21.560Z",
                "updatedAt": "2022-11-04T09:02:21.560Z",
                "__v": 0
            },
            {
                "_id": "636505210e9c71df7814546f",
                "title": "کار با کتابخونه Redux",
                "time": "18:12",
                "video": "95f85a31ed5fbb83d43bbe85ee113059e24381ae4d4ed59a2ca6f165005909ba.mp4",
                "free": 1,
                "course": "635f05d6fd9e8fcba0d2c909",
                "createdAt": "2022-11-04T12:27:13.468Z",
                "updatedAt": "2022-11-04T12:27:13.468Z",
                "__v": 0
            }
        ],
        "price": 300000,
        "isComplete": 0,
        "status": "start",
        "categoryID": {
            "_id": "6345cbd132c10de974957632",
            "title": "برنامه نویسی فرانت اند",
            "createdAt": "2022-10-11T20:02:25.118Z",
            "updatedAt": "2022-10-31T12:16:38.299Z",
            "__v": 0,
            "name": "frontend"
        },
        "creator": {
            "_id": "634e6b0e1d5142b91afa9bb3",
            "username": "amin_saeedi",
            "email": "ce01010101it@gmail.com",
            "name": "محمدامین سعیدی راد",
            "role": "ADMIN",
            "createdAt": "2022-10-18T08:59:58.561Z",
            "updatedAt": "2022-10-18T08:59:58.561Z",
            "__v": 0,
            "profile": "/images/saeedi.png",
            "phone": "09921558293"
        },
        "createdAt": "2022-10-30T23:16:38.317Z",
        "updatedAt": "2022-10-30T23:16:38.317Z",
        "__v": 0,
        "registers": 0,
        "courseAverageScore": 5
    },
    {
        "_id": "635d494ed4d9250c10a1dadc",
        "name": "دوره پروژه محور بوت استرپ",
        "description": "توضیحات تستی برای دوره BootStrap",
        "cover": img6,
        "support": "گروه تلگرامی",
        "shortName": "bootstrap",
        "price": 0,
        "isComplete": 0,
        "status": "start",
        "categoryID": {
            "_id": "6345cbd132c10de974957632",
            "title": "برنامه نویسی فرانت اند",
            "createdAt": "2022-10-11T20:02:25.118Z",
            "updatedAt": "2022-10-31T12:16:38.299Z",
            "__v": 0,
            "name": "frontend"
        },
        "creator": {
            "_id": "634e6b0e1d5142b91afa9bb3",
            "username": "amin_saeedi",
            "email": "ce01010101it@gmail.com",
            "name": "محمدامین سعیدی راد",
            "role": "ADMIN",
            "createdAt": "2022-10-18T08:59:58.561Z",
            "updatedAt": "2022-10-18T08:59:58.561Z",
            "__v": 0,
            "profile": "/images/saeedi.png",
            "phone": "09921558293"
        },
        "createdAt": "2022-10-29T15:39:58.114Z",
        "updatedAt": "2022-10-29T15:39:58.114Z",
        "__v": 0,
        "registers": 2,
        "courseAverageScore": 5
    },
    {
        "_id": "6353075d7c9b061595ff20f3",
        "name": "دوره جامع Css",
        "description": "توضیحات تستی برای دوره Css",
        "cover": img1,
        "support": "گروه تلگرامی",
        "shortName": "css-course",
        "price": 400000,
        "isComplete": 0,
        "categoryID": {
            "_id": "6345cbd132c10de974957632",
            "title": "برنامه نویسی فرانت اند",
            "createdAt": "2022-10-11T20:02:25.118Z",
            "updatedAt": "2022-10-31T12:16:38.299Z",
            "__v": 0,
            "name": "frontend"
        },
        "creator": {
            "_id": "634e6b0e1d5142b91afa9bb3",
            "username": "amin_saeedi",
            "email": "ce01010101it@gmail.com",
            "name": "محمدامین سعیدی راد",
            "role": "ADMIN",
            "createdAt": "2022-10-18T08:59:58.561Z",
            "updatedAt": "2022-10-18T08:59:58.561Z",
            "__v": 0,
            "profile": "/images/saeedi.png",
            "phone": "09921558293"
        },
        "createdAt": "2022-10-21T20:55:57.391Z",
        "updatedAt": "2022-10-21T20:55:57.391Z",
        "__v": 0,
        "status": "start",
        "registers": 2,
        "courseAverageScore": 4
    },
    {
        "_id": "635306db7c9b061595ff20db",
        "name": "دوره جامع Html",
        "description": "توضیحات تستی برای دوره Html",
        "cover": img2,
        "support": "گروه تلگرامی",
        "shortName": "html",
        "price": 200000,
        "isComplete": 0,
        "categoryID": {
            "_id": "6345cbd132c10de974957632",
            "title": "برنامه نویسی فرانت اند",
            "createdAt": "2022-10-11T20:02:25.118Z",
            "updatedAt": "2022-10-31T12:16:38.299Z",
            "__v": 0,
            "name": "frontend"
        },
        "creator": {
            "_id": "634e6b0e1d5142b91afa9bb3",
            "username": "amin_saeedi",
            "email": "ce01010101it@gmail.com",
            "name": "محمدامین سعیدی راد",
            "role": "ADMIN",
            "createdAt": "2022-10-18T08:59:58.561Z",
            "updatedAt": "2022-10-18T08:59:58.561Z",
            "__v": 0,
            "profile": "/images/saeedi.png",
            "phone": "09921558293"
        },
        "createdAt": "2022-10-21T20:53:47.139Z",
        "updatedAt": "2022-10-21T20:53:47.139Z",
        "__v": 0,
        "status": "start",
        "registers": 0,
        "courseAverageScore": 2
    },
    {
        "_id": "635305a1678235ce17e263cc",
        "name": "دوره آموزش Vuejs",
        "description": "توضیحات تستی برای دوره  ویو جی اس",
        "cover":img3,
        "support": "گروه تلگرامی",
        "shortName": "vuejs",
        "price": 0,
        "isComplete": 0,
        "categoryID": {
            "_id": "6345cbd132c10de974957632",
            "title": "برنامه نویسی فرانت اند",
            "createdAt": "2022-10-11T20:02:25.118Z",
            "updatedAt": "2022-10-31T12:16:38.299Z",
            "__v": 0,
            "name": "frontend"
        },
        "creator": {
            "_id": "634e6b0e1d5142b91afa9bb3",
            "username": "amin_saeedi",
            "email": "ce01010101it@gmail.com",
            "name": "محمدامین سعیدی راد",
            "role": "ADMIN",
            "createdAt": "2022-10-18T08:59:58.561Z",
            "updatedAt": "2022-10-18T08:59:58.561Z",
            "__v": 0,
            "profile": "/images/saeedi.png",
            "phone": "09921558293"
        },
        "createdAt": "2022-10-21T20:48:33.239Z",
        "updatedAt": "2022-10-21T20:48:33.239Z",
        "__v": 0,
        "status": "start",
        "registers": 3,
        "courseAverageScore": 5
    },
    {
        "_id": "6345cfc7586b68648f7f2430",
        "name": "دوره NPM برای برنامه نویسان جاوا اسکریپت",
        "description": "توضیحات تست برای دوره NPM سبزلرن",
        "cover": img4,
        "shortName": "npm",
        "categoryID": {
            "_id": "6345cbd132c10de974957632",
            "title": "برنامه نویسی فرانت اند",
            "createdAt": "2022-10-11T20:02:25.118Z",
            "updatedAt": "2022-10-31T12:16:38.299Z",
            "__v": 0,
            "name": "frontend"
        },
        "creator": null,
        "createdAt": "2022-10-11T20:19:19.749Z",
        "updatedAt": "2022-10-11T20:19:19.749Z",
        "__v": 0,
        "isComplete": 1,
        "support": "گروه تلگرامی",
        "price": 0,
        "status": "start",
        "registers": 3,
        "courseAverageScore": 5
    },
    {
        "_id": "6345cda6474f74e04218f6f7",
        "name": "دوره جامع Nodejds برای‌بازار کار",
        "description": "توضیحات تستی برای دوره ری‌اکت سبزلرن",
        "cover": img5,
        "shortName": "node-expert",
        "categoryID": {
            "_id": "6345cc0a32c10de974957635",
            "title": "برنامه نویسی بک‌اند",
            "createdAt": "2022-10-11T20:03:22.567Z",
            "updatedAt": "2022-10-11T20:03:22.567Z",
            "__v": 0,
            "name": "backend"
        },
        "creator": null,
        "createdAt": "2022-10-11T20:10:14.569Z",
        "updatedAt": "2022-10-11T20:10:14.569Z",
        "__v": 0,
        "isComplete": 0,
        "support": "گروه تلگرامی",
        "price": 2900000,
        "status": "start",
        "registers": 2,
        "courseAverageScore": 5
    }
    ],
    popular:[
        {
            "_id": "65c0d36eaba3d223ba4e44a3",
            "name": "آموزش جاوااسکریپت",
            "description": "توضیحات تستی برای دوره آموزش  جاوااسکریپت",
            "cover": img3 ,
            "support": "گروه تلگرامی",
            "shortName": "js-expert",
            "price": 300000,
            "isComplete": 0,
            "status": "start",
            "categoryID": {
                "_id": "6345cbd132c10de974957632",
                "title": "برنامه نویسی فرانت اند",
                "createdAt": "2022-10-11T20:02:25.118Z",
                "updatedAt": "2022-10-31T12:16:38.299Z",
                "__v": 0,
                "name": "frontend"
            },
            "creator": {
                "_id": "634e6b0e1d5142b91afa9bb3",
                "username": "amin_saeedi",
                "email": "ce01010101it@gmail.com",
                "name": "محمدامین سعیدی راد",
                "role": "ADMIN",
                "createdAt": "2022-10-18T08:59:58.561Z",
                "updatedAt": "2022-10-18T08:59:58.561Z",
                "__v": 0,
                "profile": "/images/saeedi.png",
                "phone": "09921558293"
            },
            "createdAt": "2022-10-30T23:16:38.317Z",
            "updatedAt": "2022-10-30T23:16:38.317Z",
            "__v": 0,
            "registers": 0,
            "courseAverageScore": 5
        },
        {
            "_id": "65c0d1baaba3d223ba4e449c",
            "name": "آموزش داکر",
            "description": "توضیحات تستی برای دوره آموزش  داکر",
            "cover": img3,
            "support": "گروه تلگرامی",
            "shortName": "docker",
            "price": 300000,
            "isComplete": 0,
            "status": "start",
            "categoryID": {
                "_id": "6345cbd132c10de974957632",
                "title": "برنامه نویسی فرانت اند",
                "createdAt": "2022-10-11T20:02:25.118Z",
                "updatedAt": "2022-10-31T12:16:38.299Z",
                "__v": 0,
                "name": "frontend"
            },
            "creator": {
                "_id": "634e6b0e1d5142b91afa9bb3",
                "username": "amin_saeedi",
                "email": "ce01010101it@gmail.com",
                "name": "محمدامین سعیدی راد",
                "role": "ADMIN",
                "createdAt": "2022-10-18T08:59:58.561Z",
                "updatedAt": "2022-10-18T08:59:58.561Z",
                "__v": 0,
                "profile": "/images/saeedi.png",
                "phone": "09921558293"
            },
            "createdAt": "2022-10-30T23:16:38.317Z",
            "updatedAt": "2022-10-30T23:16:38.317Z",
            "__v": 0,
            "registers": 0,
            "courseAverageScore": 5
        },
        {
            "_id": "65c0cf77aba3d223ba4e448e",
            "name": "آموزش مونگو mongo",
            "description": "توضیحات تستی برای دوره آموزش مونگو Mysql",
            "cover": img4,
            "support": "گروه تلگرامی",
            "shortName": "mongo-course",
            "price": 300000,
            "isComplete": 0,
            "status": "start",
            "categoryID": {
                "_id": "6345cbd132c10de974957632",
                "title": "برنامه نویسی فرانت اند",
                "createdAt": "2022-10-11T20:02:25.118Z",
                "updatedAt": "2022-10-31T12:16:38.299Z",
                "__v": 0,
                "name": "frontend"
            },
            "creator": {
                "_id": "634e6b0e1d5142b91afa9bb3",
                "username": "amin_saeedi",
                "email": "ce01010101it@gmail.com",
                "name": "محمدامین سعیدی راد",
                "role": "ADMIN",
                "createdAt": "2022-10-18T08:59:58.561Z",
                "updatedAt": "2022-10-18T08:59:58.561Z",
                "__v": 0,
                "profile": "/images/saeedi.png",
                "phone": "09921558293"
            },
            "createdAt": "2022-10-30T23:16:38.317Z",
            "updatedAt": "2022-10-30T23:16:38.317Z",
            "__v": 0,
            "registers": 0,
            "courseAverageScore": 5
        },
        {
            "_id": "65c0c99faba3d223ba4e4487",
            "name": "آموزش دیتابیس Mysql",
            "description": "توضیحات تستی برای دوره آموزش دیتابیس Mysql",
            "cover": img5,
            "support": "گروه تلگرامی",
            "shortName": "mysql-course",
            "price": 300000,
            "isComplete": 0,
            "status": "start",
            "categoryID": {
                "_id": "6345cbd132c10de974957632",
                "title": "برنامه نویسی فرانت اند",
                "createdAt": "2022-10-11T20:02:25.118Z",
                "updatedAt": "2022-10-31T12:16:38.299Z",
                "__v": 0,
                "name": "frontend"
            },
            "creator": {
                "_id": "634e6b0e1d5142b91afa9bb3",
                "username": "amin_saeedi",
                "email": "ce01010101it@gmail.com",
                "name": "محمدامین سعیدی راد",
                "role": "ADMIN",
                "createdAt": "2022-10-18T08:59:58.561Z",
                "updatedAt": "2022-10-18T08:59:58.561Z",
                "__v": 0,
                "profile": "/images/saeedi.png",
                "phone": "09921558293"
            },
            "createdAt": "2022-10-30T23:16:38.317Z",
            "updatedAt": "2022-10-30T23:16:38.317Z",
            "__v": 0,
            "registers": 0,
            "courseAverageScore": 5
        },
        {
            "_id": "635f05d6fd9e8fcba0d2c909",
            "name": "آموزش 20 کتابخانه جاوا اسکریپت",
            "description": "توضیحات تستی برای دوره آموزش 20 کتابخانه جاوا اسکریپت",
            "cover": img6,
            "support": "گروه تلگرامی",
            "shortName": "js-20-lib",
            "price": 300000,
            "isComplete": 0,
            "status": "start",
            "categoryID": {
                "_id": "6345cbd132c10de974957632",
                "title": "برنامه نویسی فرانت اند",
                "createdAt": "2022-10-11T20:02:25.118Z",
                "updatedAt": "2022-10-31T12:16:38.299Z",
                "__v": 0,
                "name": "frontend"
            },
            "creator": {
                "_id": "634e6b0e1d5142b91afa9bb3",
                "username": "amin_saeedi",
                "email": "ce01010101it@gmail.com",
                "name": "محمدامین سعیدی راد",
                "role": "ADMIN",
                "createdAt": "2022-10-18T08:59:58.561Z",
                "updatedAt": "2022-10-18T08:59:58.561Z",
                "__v": 0,
                "profile": "/images/saeedi.png",
                "phone": "09921558293"
            },
            "createdAt": "2022-10-30T23:16:38.317Z",
            "updatedAt": "2022-10-30T23:16:38.317Z",
            "__v": 0,
            "registers": 0,
            "courseAverageScore": 5
        },
        {
            "_id": "635d494ed4d9250c10a1dadc",
            "name": "دوره پروژه محور بوت استرپ",
            "description": "توضیحات تستی برای دوره BootStrap",
            "cover": img1,
            "support": "گروه تلگرامی",
            "shortName": "bootstrap",
            "price": 0,
            "isComplete": 0,
            "status": "start",
            "categoryID": {
                "_id": "6345cbd132c10de974957632",
                "title": "برنامه نویسی فرانت اند",
                "createdAt": "2022-10-11T20:02:25.118Z",
                "updatedAt": "2022-10-31T12:16:38.299Z",
                "__v": 0,
                "name": "frontend"
            },
            "creator": {
                "_id": "634e6b0e1d5142b91afa9bb3",
                "username": "amin_saeedi",
                "email": "ce01010101it@gmail.com",
                "name": "محمدامین سعیدی راد",
                "role": "ADMIN",
                "createdAt": "2022-10-18T08:59:58.561Z",
                "updatedAt": "2022-10-18T08:59:58.561Z",
                "__v": 0,
                "profile": "/images/saeedi.png",
                "phone": "09921558293"
            },
            "createdAt": "2022-10-29T15:39:58.114Z",
            "updatedAt": "2022-10-29T15:39:58.114Z",
            "__v": 0,
            "registers": 2,
            "courseAverageScore": 5
        },
        {
            "_id": "6353075d7c9b061595ff20f3",
            "name": "دوره جامع Css",
            "description": "توضیحات تستی برای دوره Css",
            "cover":img2,
            "support": "گروه تلگرامی",
            "shortName": "css-course",
            "price": 400000,
            "isComplete": 0,
            "categoryID": {
                "_id": "6345cbd132c10de974957632",
                "title": "برنامه نویسی فرانت اند",
                "createdAt": "2022-10-11T20:02:25.118Z",
                "updatedAt": "2022-10-31T12:16:38.299Z",
                "__v": 0,
                "name": "frontend"
            },
            "creator": {
                "_id": "634e6b0e1d5142b91afa9bb3",
                "username": "amin_saeedi",
                "email": "ce01010101it@gmail.com",
                "name": "محمدامین سعیدی راد",
                "role": "ADMIN",
                "createdAt": "2022-10-18T08:59:58.561Z",
                "updatedAt": "2022-10-18T08:59:58.561Z",
                "__v": 0,
                "profile": "/images/saeedi.png",
                "phone": "09921558293"
            },
            "createdAt": "2022-10-21T20:55:57.391Z",
            "updatedAt": "2022-10-21T20:55:57.391Z",
            "__v": 0,
            "status": "start",
            "registers": 2,
            "courseAverageScore": 4
        },
        {
            "_id": "635306db7c9b061595ff20db",
            "name": "دوره جامع Html",
            "description": "توضیحات تستی برای دوره Html",
            "cover": img3,
            "support": "گروه تلگرامی",
            "shortName": "html",
            "price": 200000,
            "isComplete": 0,
            "categoryID": {
                "_id": "6345cbd132c10de974957632",
                "title": "برنامه نویسی فرانت اند",
                "createdAt": "2022-10-11T20:02:25.118Z",
                "updatedAt": "2022-10-31T12:16:38.299Z",
                "__v": 0,
                "name": "frontend"
            },
            "creator": {
                "_id": "634e6b0e1d5142b91afa9bb3",
                "username": "amin_saeedi",
                "email": "ce01010101it@gmail.com",
                "name": "محمدامین سعیدی راد",
                "role": "ADMIN",
                "createdAt": "2022-10-18T08:59:58.561Z",
                "updatedAt": "2022-10-18T08:59:58.561Z",
                "__v": 0,
                "profile": "/images/saeedi.png",
                "phone": "09921558293"
            },
            "createdAt": "2022-10-21T20:53:47.139Z",
            "updatedAt": "2022-10-21T20:53:47.139Z",
            "__v": 0,
            "status": "start",
            "registers": 0,
            "courseAverageScore": 2
        },
        {
            "_id": "635305a1678235ce17e263cc",
            "name": "دوره آموزش Vuejs",
            "description": "توضیحات تستی برای دوره  ویو جی اس",
            "cover": img4,
            "support": "گروه تلگرامی",
            "shortName": "vuejs",
            "price": 0,
            "isComplete": 0,
            "categoryID": {
                "_id": "6345cbd132c10de974957632",
                "title": "برنامه نویسی فرانت اند",
                "createdAt": "2022-10-11T20:02:25.118Z",
                "updatedAt": "2022-10-31T12:16:38.299Z",
                "__v": 0,
                "name": "frontend"
            },
            "creator": {
                "_id": "634e6b0e1d5142b91afa9bb3",
                "username": "amin_saeedi",
                "email": "ce01010101it@gmail.com",
                "name": "محمدامین سعیدی راد",
                "role": "ADMIN",
                "createdAt": "2022-10-18T08:59:58.561Z",
                "updatedAt": "2022-10-18T08:59:58.561Z",
                "__v": 0,
                "profile": "/images/saeedi.png",
                "phone": "09921558293"
            },
            "createdAt": "2022-10-21T20:48:33.239Z",
            "updatedAt": "2022-10-21T20:48:33.239Z",
            "__v": 0,
            "status": "start",
            "registers": 3,
            "courseAverageScore": 5
        },
        {
            "_id": "6345cfc7586b68648f7f2430",
            "name": "دوره NPM برای برنامه نویسان جاوا اسکریپت",
            "description": "توضیحات تست برای دوره NPM سبزلرن",
            "cover": img5,
            "shortName": "npm",
            "categoryID": {
                "_id": "6345cbd132c10de974957632",
                "title": "برنامه نویسی فرانت اند",
                "createdAt": "2022-10-11T20:02:25.118Z",
                "updatedAt": "2022-10-31T12:16:38.299Z",
                "__v": 0,
                "name": "frontend"
            },
            "creator": null,
            "createdAt": "2022-10-11T20:19:19.749Z",
            "updatedAt": "2022-10-11T20:19:19.749Z",
            "__v": 0,
            "isComplete": 1,
            "support": "گروه تلگرامی",
            "price": 0,
            "status": "start",
            "registers": 3,
            "courseAverageScore": 5
        },
        {
            "_id": "6345cda6474f74e04218f6f7",
            "name": "دوره جامع Nodejds برای‌بازار کار",
            "description": "توضیحات تستی برای دوره ری‌اکت سبزلرن",
            "cover": img6,
            "shortName": "node-expert",
            "categoryID": {
                "_id": "6345cc0a32c10de974957635",
                "title": "برنامه نویسی بک‌اند",
                "createdAt": "2022-10-11T20:03:22.567Z",
                "updatedAt": "2022-10-11T20:03:22.567Z",
                "__v": 0,
                "name": "backend"
            },
            "creator": null,
            "createdAt": "2022-10-11T20:10:14.569Z",
            "updatedAt": "2022-10-11T20:10:14.569Z",
            "__v": 0,
            "isComplete": 0,
            "support": "گروه تلگرامی",
            "price": 2900000,
            "status": "start",
            "registers": 2,
            "courseAverageScore": 5
        }
    ],
    presell:[
        {
            "_id": "65c0d36eaba3d223ba4e44a3",
            "name": "آموزش جاوااسکریپت",
            "description": "توضیحات تستی برای دوره آموزش  جاوااسکریپت",
            "cover": img1,
            "support": "گروه تلگرامی",
            "shortName": "js-expert",
            "price": 300000,
            "isComplete": 0,
            "status": "start",
            "categoryID": {
                "_id": "6345cbd132c10de974957632",
                "title": "برنامه نویسی فرانت اند",
                "createdAt": "2022-10-11T20:02:25.118Z",
                "updatedAt": "2022-10-31T12:16:38.299Z",
                "__v": 0,
                "name": "frontend"
            },
            "creator": {
                "_id": "634e6b0e1d5142b91afa9bb3",
                "username": "amin_saeedi",
                "email": "ce01010101it@gmail.com",
                "name": "محمدامین سعیدی راد",
                "role": "ADMIN",
                "createdAt": "2022-10-18T08:59:58.561Z",
                "updatedAt": "2022-10-18T08:59:58.561Z",
                "__v": 0,
                "profile": "/images/saeedi.png",
                "phone": "09921558293"
            },
            "createdAt": "2022-10-30T23:16:38.317Z",
            "updatedAt": "2022-10-30T23:16:38.317Z",
            "__v": 0,
            "registers": 0,
            "courseAverageScore": 5
        },
        {
            "_id": "65c0d1baaba3d223ba4e449c",
            "name": "آموزش داکر",
            "description": "توضیحات تستی برای دوره آموزش  داکر",
            "cover": img2,
            "support": "گروه تلگرامی",
            "shortName": "docker",
            "price": 300000,
            "isComplete": 0,
            "status": "start",
            "categoryID": {
                "_id": "6345cbd132c10de974957632",
                "title": "برنامه نویسی فرانت اند",
                "createdAt": "2022-10-11T20:02:25.118Z",
                "updatedAt": "2022-10-31T12:16:38.299Z",
                "__v": 0,
                "name": "frontend"
            },
            "creator": {
                "_id": "634e6b0e1d5142b91afa9bb3",
                "username": "amin_saeedi",
                "email": "ce01010101it@gmail.com",
                "name": "محمدامین سعیدی راد",
                "role": "ADMIN",
                "createdAt": "2022-10-18T08:59:58.561Z",
                "updatedAt": "2022-10-18T08:59:58.561Z",
                "__v": 0,
                "profile": "/images/saeedi.png",
                "phone": "09921558293"
            },
            "createdAt": "2022-10-30T23:16:38.317Z",
            "updatedAt": "2022-10-30T23:16:38.317Z",
            "__v": 0,
            "registers": 0,
            "courseAverageScore": 5
        },
        {
            "_id": "65c0cf77aba3d223ba4e448e",
            "name": "آموزش مونگو mongo",
            "description": "توضیحات تستی برای دوره آموزش مونگو Mysql",
            "cover": img3,
            "support": "گروه تلگرامی",
            "shortName": "mongo-course",
            "price": 300000,
            "isComplete": 0,
            "status": "start",
            "categoryID": {
                "_id": "6345cbd132c10de974957632",
                "title": "برنامه نویسی فرانت اند",
                "createdAt": "2022-10-11T20:02:25.118Z",
                "updatedAt": "2022-10-31T12:16:38.299Z",
                "__v": 0,
                "name": "frontend"
            },
            "creator": {
                "_id": "634e6b0e1d5142b91afa9bb3",
                "username": "amin_saeedi",
                "email": "ce01010101it@gmail.com",
                "name": "محمدامین سعیدی راد",
                "role": "ADMIN",
                "createdAt": "2022-10-18T08:59:58.561Z",
                "updatedAt": "2022-10-18T08:59:58.561Z",
                "__v": 0,
                "profile": "/images/saeedi.png",
                "phone": "09921558293"
            },
            "createdAt": "2022-10-30T23:16:38.317Z",
            "updatedAt": "2022-10-30T23:16:38.317Z",
            "__v": 0,
            "registers": 0,
            "courseAverageScore": 5
        },
        {
            "_id": "65c0c99faba3d223ba4e4487",
            "name": "آموزش دیتابیس Mysql",
            "description": "توضیحات تستی برای دوره آموزش دیتابیس Mysql",
            "cover": img4,
            "support": "گروه تلگرامی",
            "shortName": "mysql-course",
            "price": 300000,
            "isComplete": 0,
            "status": "start",
            "categoryID": {
                "_id": "6345cbd132c10de974957632",
                "title": "برنامه نویسی فرانت اند",
                "createdAt": "2022-10-11T20:02:25.118Z",
                "updatedAt": "2022-10-31T12:16:38.299Z",
                "__v": 0,
                "name": "frontend"
            },
            "creator": {
                "_id": "634e6b0e1d5142b91afa9bb3",
                "username": "amin_saeedi",
                "email": "ce01010101it@gmail.com",
                "name": "محمدامین سعیدی راد",
                "role": "ADMIN",
                "createdAt": "2022-10-18T08:59:58.561Z",
                "updatedAt": "2022-10-18T08:59:58.561Z",
                "__v": 0,
                "profile": "/images/saeedi.png",
                "phone": "09921558293"
            },
            "createdAt": "2022-10-30T23:16:38.317Z",
            "updatedAt": "2022-10-30T23:16:38.317Z",
            "__v": 0,
            "registers": 0,
            "courseAverageScore": 5
        },
        {
            "_id": "635f05d6fd9e8fcba0d2c909",
            "name": "آموزش 20 کتابخانه جاوا اسکریپت",
            "description": "توضیحات تستی برای دوره آموزش 20 کتابخانه جاوا اسکریپت",
            "cover": img5,
            "support": "گروه تلگرامی",
            "shortName": "js-20-lib",
            "price": 300000,
            "isComplete": 0,
            "status": "start",
            "categoryID": {
                "_id": "6345cbd132c10de974957632",
                "title": "برنامه نویسی فرانت اند",
                "createdAt": "2022-10-11T20:02:25.118Z",
                "updatedAt": "2022-10-31T12:16:38.299Z",
                "__v": 0,
                "name": "frontend"
            },
            "creator": {
                "_id": "634e6b0e1d5142b91afa9bb3",
                "username": "amin_saeedi",
                "email": "ce01010101it@gmail.com",
                "name": "محمدامین سعیدی راد",
                "role": "ADMIN",
                "createdAt": "2022-10-18T08:59:58.561Z",
                "updatedAt": "2022-10-18T08:59:58.561Z",
                "__v": 0,
                "profile": "/images/saeedi.png",
                "phone": "09921558293"
            },
            "createdAt": "2022-10-30T23:16:38.317Z",
            "updatedAt": "2022-10-30T23:16:38.317Z",
            "__v": 0,
            "registers": 0,
            "courseAverageScore": 5
        },
        {
            "_id": "635d494ed4d9250c10a1dadc",
            "name": "دوره پروژه محور بوت استرپ",
            "description": "توضیحات تستی برای دوره BootStrap",
            "cover": img6,
            "support": "گروه تلگرامی",
            "shortName": "bootstrap",
            "price": 0,
            "isComplete": 0,
            "status": "start",
            "categoryID": {
                "_id": "6345cbd132c10de974957632",
                "title": "برنامه نویسی فرانت اند",
                "createdAt": "2022-10-11T20:02:25.118Z",
                "updatedAt": "2022-10-31T12:16:38.299Z",
                "__v": 0,
                "name": "frontend"
            },
            "creator": {
                "_id": "634e6b0e1d5142b91afa9bb3",
                "username": "amin_saeedi",
                "email": "ce01010101it@gmail.com",
                "name": "محمدامین سعیدی راد",
                "role": "ADMIN",
                "createdAt": "2022-10-18T08:59:58.561Z",
                "updatedAt": "2022-10-18T08:59:58.561Z",
                "__v": 0,
                "profile": "/images/saeedi.png",
                "phone": "09921558293"
            },
            "createdAt": "2022-10-29T15:39:58.114Z",
            "updatedAt": "2022-10-29T15:39:58.114Z",
            "__v": 0,
            "registers": 2,
            "courseAverageScore": 5
        },
        {
            "_id": "6353075d7c9b061595ff20f3",
            "name": "دوره جامع Css",
            "description": "توضیحات تستی برای دوره Css",
            "cover": img1,
            "support": "گروه تلگرامی",
            "shortName": "css-course",
            "price": 400000,
            "isComplete": 0,
            "categoryID": {
                "_id": "6345cbd132c10de974957632",
                "title": "برنامه نویسی فرانت اند",
                "createdAt": "2022-10-11T20:02:25.118Z",
                "updatedAt": "2022-10-31T12:16:38.299Z",
                "__v": 0,
                "name": "frontend"
            },
            "creator": {
                "_id": "634e6b0e1d5142b91afa9bb3",
                "username": "amin_saeedi",
                "email": "ce01010101it@gmail.com",
                "name": "محمدامین سعیدی راد",
                "role": "ADMIN",
                "createdAt": "2022-10-18T08:59:58.561Z",
                "updatedAt": "2022-10-18T08:59:58.561Z",
                "__v": 0,
                "profile": "/images/saeedi.png",
                "phone": "09921558293"
            },
            "createdAt": "2022-10-21T20:55:57.391Z",
            "updatedAt": "2022-10-21T20:55:57.391Z",
            "__v": 0,
            "status": "start",
            "registers": 2,
            "courseAverageScore": 4
        },
        {
            "_id": "635306db7c9b061595ff20db",
            "name": "دوره جامع Html",
            "description": "توضیحات تستی برای دوره Html",
            "cover": img2,
            "support": "گروه تلگرامی",
            "shortName": "html",
            "price": 200000,
            "isComplete": 0,
            "categoryID": {
                "_id": "6345cbd132c10de974957632",
                "title": "برنامه نویسی فرانت اند",
                "createdAt": "2022-10-11T20:02:25.118Z",
                "updatedAt": "2022-10-31T12:16:38.299Z",
                "__v": 0,
                "name": "frontend"
            },
            "creator": {
                "_id": "634e6b0e1d5142b91afa9bb3",
                "username": "amin_saeedi",
                "email": "ce01010101it@gmail.com",
                "name": "محمدامین سعیدی راد",
                "role": "ADMIN",
                "createdAt": "2022-10-18T08:59:58.561Z",
                "updatedAt": "2022-10-18T08:59:58.561Z",
                "__v": 0,
                "profile": "/images/saeedi.png",
                "phone": "09921558293"
            },
            "createdAt": "2022-10-21T20:53:47.139Z",
            "updatedAt": "2022-10-21T20:53:47.139Z",
            "__v": 0,
            "status": "start",
            "registers": 0,
            "courseAverageScore": 2
        },
        {
            "_id": "635305a1678235ce17e263cc",
            "name": "دوره آموزش Vuejs",
            "description": "توضیحات تستی برای دوره  ویو جی اس",
            "cover": img3,
            "support": "گروه تلگرامی",
            "shortName": "vuejs",
            "price": 0,
            "isComplete": 0,
            "categoryID": {
                "_id": "6345cbd132c10de974957632",
                "title": "برنامه نویسی فرانت اند",
                "createdAt": "2022-10-11T20:02:25.118Z",
                "updatedAt": "2022-10-31T12:16:38.299Z",
                "__v": 0,
                "name": "frontend"
            },
            "creator": {
                "_id": "634e6b0e1d5142b91afa9bb3",
                "username": "amin_saeedi",
                "email": "ce01010101it@gmail.com",
                "name": "محمدامین سعیدی راد",
                "role": "ADMIN",
                "createdAt": "2022-10-18T08:59:58.561Z",
                "updatedAt": "2022-10-18T08:59:58.561Z",
                "__v": 0,
                "profile": "/images/saeedi.png",
                "phone": "09921558293"
            },
            "createdAt": "2022-10-21T20:48:33.239Z",
            "updatedAt": "2022-10-21T20:48:33.239Z",
            "__v": 0,
            "status": "start",
            "registers": 3,
            "courseAverageScore": 5
        },
        {
            "_id": "6345cfc7586b68648f7f2430",
            "name": "دوره NPM برای برنامه نویسان جاوا اسکریپت",
            "description": "توضیحات تست برای دوره NPM سبزلرن",
            "cover": img4,
            "shortName": "npm",
            "categoryID": {
                "_id": "6345cbd132c10de974957632",
                "title": "برنامه نویسی فرانت اند",
                "createdAt": "2022-10-11T20:02:25.118Z",
                "updatedAt": "2022-10-31T12:16:38.299Z",
                "__v": 0,
                "name": "frontend"
            },
            "creator": null,
            "createdAt": "2022-10-11T20:19:19.749Z",
            "updatedAt": "2022-10-11T20:19:19.749Z",
            "__v": 0,
            "isComplete": 1,
            "support": "گروه تلگرامی",
            "price": 0,
            "status": "start",
            "registers": 3,
            "courseAverageScore": 5
        },
        {
            "_id": "6345cda6474f74e04218f6f7",
            "name": "دوره جامع Nodejds برای‌بازار کار",
            "description": "توضیحات تستی برای دوره ری‌اکت سبزلرن",
            "cover": img5,
            "shortName": "node-expert",
            "categoryID": {
                "_id": "6345cc0a32c10de974957635",
                "title": "برنامه نویسی بک‌اند",
                "createdAt": "2022-10-11T20:03:22.567Z",
                "updatedAt": "2022-10-11T20:03:22.567Z",
                "__v": 0,
                "name": "backend"
            },
            "creator": null,
            "createdAt": "2022-10-11T20:10:14.569Z",
            "updatedAt": "2022-10-11T20:10:14.569Z",
            "__v": 0,
            "isComplete": 0,
            "support": "گروه تلگرامی",
            "price": 2900000,
            "status": "start",
            "registers": 2,
            "courseAverageScore": 5
        }
    ],
    userRegister:[],
    myCourses:[
        {
            "_id": "65c0d36eaba3d223ba4e44a3",
            "name": "آموزش جاوااسکریپت",
            "description": "توضیحات تستی برای دوره آموزش  جاوااسکریپت",
            "cover": img1,
            "support": "گروه تلگرامی",
            "shortName": "js-expert",
            "price": 300000,
            "isComplete": 0,
            "status": "start",
            "categoryID": {
                "_id": "6345cbd132c10de974957632",
                "title": "برنامه نویسی فرانت اند",
                "createdAt": "2022-10-11T20:02:25.118Z",
                "updatedAt": "2022-10-31T12:16:38.299Z",
                "__v": 0,
                "name": "frontend"
            },
            "creator": {
                "_id": "634e6b0e1d5142b91afa9bb3",
                "username": "amin_saeedi",
                "email": "ce01010101it@gmail.com",
                "name": "محمدامین سعیدی راد",
                "role": "ADMIN",
                "createdAt": "2022-10-18T08:59:58.561Z",
                "updatedAt": "2022-10-18T08:59:58.561Z",
                "__v": 0,
                "profile": "/images/saeedi.png",
                "phone": "09921558293"
            },
            "createdAt": "2022-10-30T23:16:38.317Z",
            "updatedAt": "2022-10-30T23:16:38.317Z",
            "__v": 0,
            "registers": 0,
            "courseAverageScore": 5
        },
        {
            "_id": "65c0d1baaba3d223ba4e449c",
            "name": "آموزش داکر",
            "description": "توضیحات تستی برای دوره آموزش  داکر",
            "cover": img2,
            "support": "گروه تلگرامی",
            "shortName": "docker",
            "price": 300000,
            "isComplete": 0,
            "status": "start",
            "categoryID": {
                "_id": "6345cbd132c10de974957632",
                "title": "برنامه نویسی فرانت اند",
                "createdAt": "2022-10-11T20:02:25.118Z",
                "updatedAt": "2022-10-31T12:16:38.299Z",
                "__v": 0,
                "name": "frontend"
            },
            "creator": {
                "_id": "634e6b0e1d5142b91afa9bb3",
                "username": "amin_saeedi",
                "email": "ce01010101it@gmail.com",
                "name": "محمدامین سعیدی راد",
                "role": "ADMIN",
                "createdAt": "2022-10-18T08:59:58.561Z",
                "updatedAt": "2022-10-18T08:59:58.561Z",
                "__v": 0,
                "profile": "/images/saeedi.png",
                "phone": "09921558293"
            },
            "createdAt": "2022-10-30T23:16:38.317Z",
            "updatedAt": "2022-10-30T23:16:38.317Z",
            "__v": 0,
            "registers": 0,
            "courseAverageScore": 5
        },
    ],
    allArticles:[
        {
            "_id": "636a19a9882118547d70c55f",
            "title": "مقاله فیک برای تست پیش نویس",
            "description": "این توضیحات تستی برای پیش نویس مقاله هست",
            "body": "<p>این یه بادی تستیه</p>",
            "cover": "da877ea96a7e8f7c9bced14ac791f424af4b0b4eab101ef636545c20e9eed116.jpg",
            "shortName": "test-link",
            "categoryID": "635ef447f058a6af04d00510",
            "creator": null,
            "publish": 0,
            "createdAt": "2022-11-08T08:56:09.154Z",
            "updatedAt": "2022-11-08T08:56:09.154Z",
            "__v": 0
        },
        {
            "_id": "63619e3b1ad3491377fa251f",
            "title": "ساخت صفحات 404 جذاب با Css و JS",
            "description": "ما تو این مقاله یاد میگیریم که چطوری ، ... الی آخر",
            "body": "<h2>ساخت صفحه 404 مدل فلان</h2><p>ری اکت گل سرسبد فرانت اند محسوب میشود،اگر دوره react را ببینید، بازار کار فرانت اند پیشنهادهای بسیار شگفت انگیزی برای شما خواهد داشت! در این دوره شما آموزش ری اکت رابر اساس تجربیات مدرس در دنیای واقعی و کار با شرکت های مختلف ایرانی یاد می گیرید و در دوره اموزش ری اکت مدرس دوره از نقطه صفر تا رسیدن شما به مرحله پیاده سازی نمونه کار، طراحی رزومه و … استخدام همراه شما خواهد بود. (به این معنی که تا پس از این دوره استخدام نشوید، ما شما را رها نمیکنیم!)</p>",
            "cover": "a6ffb1ed11bae54f6ef12e55cfa0cc2dfcf640df25b25f70dfa61cbc5703d12f.png",
            "shortName": "make-creative404-page-with-css-and-js",
            "categoryID": "6345cbd132c10de974957632",
            "creator": {
                "_id": "634e6b0e1d5142b91afa9bb3",
                "username": "amin_saeedi",
                "email": "ce01010101it@gmail.com",
                "name": "محمدامین سعیدی راد",
                "role": "ADMIN",
                "createdAt": "2022-10-18T08:59:58.561Z",
                "updatedAt": "2022-10-18T08:59:58.561Z",
                "__v": 0,
                "profile": "/images/saeedi.png",
                "phone": "09921558293"
            },
            "createdAt": "2022-11-01T22:31:23.886Z",
            "updatedAt": "2022-11-01T22:31:23.886Z",
            "__v": 0,
            "publish": 1
        },
        {
            "_id": "63611c981f40070ba1cb22c8",
            "title": "برای یادگیری ری‌اکت چقدر باید جاوا اسکریپت بلد باشیم؟",
            "description": "تو این مقاله راجع به فلان فلانم فلان بسزنرحیبسزژ ریبسکنتلزردیسبر",
            "body": "<h2><strong>معرفی بهترین سایت ‌های آموزش جاوا اسکریپت:</strong></h2><p>&nbsp;</p><p><strong>توجه داشته باشید که تمام وب سایت‌هایی که به عنوان بهترین سایت آموزش جاوا اسکریپت در ادامه معرفی می‌کنیم، بین‌المللی هستند و منابع موجود در آن‌ها به زبان انگلیسی است. در نتیجه شما باید یا تسلط متوسط و حداقلی به زبان انگلیسی داشته باشید و یا اینکه با استفاده از گوگل ترنسلیت منابع موجود را ترجمه کرده و از آن‌ها استفاده کنید. به همین دلیل در انتهای محتوا به شما خواهیم گفت که راه آسان دیگری برای یادگیری زبان جاوا اسکریپت وجود دارد که شما بتوانید به واسطه آن به صورت رایگان و به زبان فارسی این زبان را یاد بگیرید.</strong></p>",
            "cover": "56108e0f5399b79e348989b1c04f7c2ce3ad429546ed59d1d7420898ca5591c4.png",
            "shortName": "how-much-js-to-start-react",
            "categoryID": "6345cbd132c10de974957632",
            "creator": {
                "_id": "634e6b0e1d5142b91afa9bb3",
                "username": "amin_saeedi",
                "email": "ce01010101it@gmail.com",
                "name": "محمدامین سعیدی راد",
                "role": "ADMIN",
                "createdAt": "2022-10-18T08:59:58.561Z",
                "updatedAt": "2022-10-18T08:59:58.561Z",
                "__v": 0,
                "profile": "/images/saeedi.png",
                "phone": "09921558293"
            },
            "createdAt": "2022-11-01T13:18:16.454Z",
            "updatedAt": "2022-11-01T13:18:16.454Z",
            "__v": 0,
            "publish": 1
        },
        {
            "_id": "635320d83ebf20c2bb34b170",
            "title": "ترفند های تاریخ و زمان در جاوا اسکریپت",
            "description": "توضیحات تستی برای مقاله ترفند های تاریخ و زمان در جاوا اسکریپت",
            "body": "بادی تستی برای مقاله ترفند های تاریخ و زمان در جاوا اسکریپت",
            "cover": "3.jpg",
            "shortName": "date-in-js",
            "categoryID": "6345cbd132c10de974957632",
            "creator": {
                "_id": "634e6b0e1d5142b91afa9bb3",
                "username": "amin_saeedi",
                "email": "ce01010101it@gmail.com",
                "name": "محمدامین سعیدی راد",
                "role": "ADMIN",
                "createdAt": "2022-10-18T08:59:58.561Z",
                "updatedAt": "2022-10-18T08:59:58.561Z",
                "__v": 0,
                "profile": "/images/saeedi.png",
                "phone": "09921558293"
            },
            "createdAt": "2022-10-21T22:44:40.046Z",
            "updatedAt": "2022-10-21T22:44:40.046Z",
            "__v": 0,
            "publish": 1
        },
        {
            "_id": "63531f323ebf20c2bb34b16b",
            "title": "چرا انگیولار محبوب نشد؟",
            "description": "توضیحات تستی برای مقاله چرا انگیولار محبوب نشد؟",
            "body": "بادی تستی برای مقاله چرا انگیولار محبوب نشد؟",
            "cover": "3.jpg",
            "shortName": "why-angular-in-not-popular",
            "categoryID": "6345cbd132c10de974957632",
            "creator": {
                "_id": "634e6b0e1d5142b91afa9bb3",
                "username": "amin_saeedi",
                "email": "ce01010101it@gmail.com",
                "name": "محمدامین سعیدی راد",
                "role": "ADMIN",
                "createdAt": "2022-10-18T08:59:58.561Z",
                "updatedAt": "2022-10-18T08:59:58.561Z",
                "__v": 0,
                "profile": "/images/saeedi.png",
                "phone": "09921558293"
            },
            "createdAt": "2022-10-21T22:37:38.367Z",
            "updatedAt": "2022-10-21T22:37:38.367Z",
            "__v": 0,
            "publish": 1
        },
        {
            "_id": "63531ca63ebf20c2bb34b15c",
            "title": "مقایسه ویو و ری اکت",
            "description": "توضیحات تستی برای مقاله مقایسه ویو و ری اکت",
            "body": "بادی تستی برای مقاله مقایسه ویو و ری اکت",
            "cover": "3.jpg",
            "shortName": "vue-or-react",
            "categoryID": "6345cbd132c10de974957632",
            "creator": {
                "_id": "634e6b0e1d5142b91afa9bb3",
                "username": "amin_saeedi",
                "email": "ce01010101it@gmail.com",
                "name": "محمدامین سعیدی راد",
                "role": "ADMIN",
                "createdAt": "2022-10-18T08:59:58.561Z",
                "updatedAt": "2022-10-18T08:59:58.561Z",
                "__v": 0,
                "profile": "/images/saeedi.png",
                "phone": "09921558293"
            },
            "createdAt": "2022-10-21T22:26:46.878Z",
            "updatedAt": "2022-10-21T22:26:46.878Z",
            "__v": 0,
            "publish": 1
        }
    ]
}

export const dataSlice=createSlice({
    name:'AllData',
    initialState,
    reducers:{
        registerUser:(state,action)=>{
            state.userRegister.push(action.payload)
        },
        deleteMyCourse:(state,action)=>{
            state.myCourses = state.myCourses.filter(course => course._id !== action.payload);
            
        },
        addNavMenu: (state, action) => {
            const { menu, submenu, link } = action.payload;
        
            if (menu && !submenu) {
                const newItem = { id: state.menu.length + 1, page: menu, link: `/${link || menu}`, submenu: [] };
                state.menu.push(newItem);
            } else if (menu && submenu) {
                state.menu.forEach(item => {
                    if (item.page === submenu) {
                        const newSubmenuItem = { id: item.submenu.length + 1, page: menu, link: `${action.payload.link ? item.link+'/'+action.payload.link : item.link+'/'+action.payload.menu}` };
                        item.submenu.push(newSubmenuItem);
                    }
                });
            }
        },
        deleteNavMenu:(state,action)=>{
            const { id, elem } = action.payload
            const resultsubmenuFind=state.menu.find(itemMenu=>itemMenu.submenu?.find(item=>item.id == id && item.page == elem))           
            const resultFind=state.menu.find(item=>item.id == id && item.page == elem)           
            if (resultFind) {
                state.menu = state.menu?.filter(item => item.id !== id);
            } else {
                console.log("Item not found in menu.");
            }
            if (resultsubmenuFind) {
                resultsubmenuFind.submenu = resultsubmenuFind.submenu?.filter(item => item.id !== id);
            } else {
                console.log("Item not found in submenu.");
            }
        }
    }
})

export default dataSlice.reducer 
export const { registerUser ,deleteMyCourse ,addNavMenu ,deleteNavMenu } = dataSlice.actions
export const menuSlice=(state)=>state.dataSlice.menu
export const allCourse=(state)=>state.dataSlice.allCourse
export const popularCourse=(state)=>state.dataSlice.popular
export const presellCourse=(state)=>state.dataSlice.presell
export const registerUserData=(state)=>state.dataSlice.userRegister
export const myCourses=(state)=>state.dataSlice.myCourses
export const allArticles=(state)=>state.dataSlice.allArticles


