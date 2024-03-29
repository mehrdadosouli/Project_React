const navbarMenuRandom=(data,num)=>{
    let ul=document.querySelector('.ul')
    const randomNum=[...data].sort((a,b)=>0.5 - Math.random())
    randomNum.slice(0,num).map(item=>ul.insertAdjacentHTML('beforeend',`<li key=${item._id}>
                <a style="color:white" href=${item.href}>${item.title}</a>
            </li>
            `)
    )
}

const getToken=(user)=>{
    const userInfo=JSON.parse(localStorage.getItem(user))
    return userInfo ? userInfo.token : null 
}

const setToLocalStorage=(key,value)=>{
    return localStorage.setItem(key,JSON.stringify(value))
}

const clearLocalStorage=()=>{
    return localStorage.clear()
}

export {navbarMenuRandom ,getToken ,setToLocalStorage,clearLocalStorage}