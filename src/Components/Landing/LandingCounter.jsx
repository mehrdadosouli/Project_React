import React, { useEffect, useState } from 'react'

export default function LandingCounter({num}) {
  const [counter,setCounter]=useState(0)
  useEffect(()=>{
    const upper=setInterval(() => {
      setCounter((prev)=>prev + 1 )
      }, 50);

      if(counter === +num){
        clearInterval(upper)
      }
      return ()=> clearInterval(upper)
  },[counter])
  return (
    <>
      <span>{counter}</span>
    </>
  )
}
