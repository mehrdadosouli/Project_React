const navbarMenuRandom=(data,num)=>{
    const randomNum=[...data].sort((a,b)=>0.5 - Math.random())
    let res= randomNum.slice(0,num)
    return res
}

const getToken=(user)=>{
    let local=localStorage.getItem(user)
    if(local){
        const userInfo=JSON.parse(local)
        return userInfo ? userInfo.token : null 
    }else{
        return false
    }
}

const setToLocalStorage=(key,value)=>{
    return localStorage.setItem(key,JSON.stringify(value))
}

const clearLocalStorage=()=>{
    return localStorage.clear()
}

export {navbarMenuRandom ,getToken ,setToLocalStorage,clearLocalStorage}