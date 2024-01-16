import axios from "axios";

const navbarMenuRandom=(data,num)=>{
    let ul=document.querySelector('.ul')
    const randomNum=[...data].sort((a,b)=>0.5 - Math.random())
    randomNum.slice(0,num).map(item=>ul.insertAdjacentHTML('beforeend',`<li key=${item._id}>
                <a style="color:white" href=${item.href}>${item.title}</a>
            </li>
            `)
    )
}




export {navbarMenuRandom}