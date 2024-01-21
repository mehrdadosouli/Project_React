import {createContext} from 'react'

const AuthContext = createContext({
    Islogin:false,
    userInfo:'mehrdad',
    token:null
})

export default AuthContext