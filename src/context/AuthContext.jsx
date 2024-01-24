import {createContext} from 'react'
import { getMe } from '../utils/funcs';
const AuthContext = createContext({
    Islogin:false,
    username:'',
    name:'',
    email:'',
    password:'',
    role:'',
    token:null
})

export default AuthContext