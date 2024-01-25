// import {createContext} from 'react'
// import { getMe } from '../utils/funcs';
// const AuthContext = createContext({
//     Islogin:false,
//     username:'',
//     name:'',
//     email:'',
//     password:'',
//     role:'',
//     token:null
// })
// import React from 'react'

import React,{ createContext, useEffect, useState } from 'react'
import { getToken } from '../utils/funcs';
import axios from 'axios';
export const AuthInfosContext = createContext();

export default function AuthContext({Children}) {
    const [infos,setInfos]=useState({
        Islogin:false,
        username:'',
        name:'',
        email:'',
        password:'',
        role:'',
        token:null
    })
    const getMeInfos=()=>{
        axios.get('http://localhost:4000/v1/auth/me',{
             headers:{
                 Authorization:`Bearer ${getToken('user')}`
             }
         })
         .then(res=>{ 
            setInfos({
                 Islogin:true,
                 username:res.data.username,
                 name:res.data.name,
                 email:res.data.email,
                 role:res.data.role,
                 token:getToken('user')
            })
        })    
    }
    useEffect(()=>{
        getMeInfos()
    },[])
            
  return (<AuthInfosContext.Provider value={{infos,setInfos}}>
            {Children}
        </AuthInfosContext.Provider>
  )
}

