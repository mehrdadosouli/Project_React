import { createSlice } from "@reduxjs/toolkit";
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
            {id:1,page:'Nodejs',icon:'',link:'/backend/nodejs'},
            {id:1,page:'Nodejs',icon:'',link:'/backend/nodejs'},
            {id:1,page:'Nodejs',icon:'',link:'/backend/nodejs'},
        ]},
        {id:5,page:'ارتباط با ما',link:'/abouteus',icon:''},
        {id:6,page:'درباره ما',link:'/contactus',icon:''},

    ],
}

export const dataSlice=createSlice({
    name:'AllData',
    initialState,
    reducers:{

    }
})

export default dataSlice.reducer
export const menuSlice=(state)=>state.dataSlice.menu
