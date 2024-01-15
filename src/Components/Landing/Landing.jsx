import React from 'react'
import Typewriter from 'typewriter-effect';

export default function Landing() {
    


  return (
    <>
        <div className='sticky bg-bg_landing w-full h-[18rem] sm:h-[52.5rem] md:h-[61.9rem] bg-contain bg-top bg-no-repeat sm:bg-cover sm:bg-center bg-fixed'>
            <h1 className="landing__title absolute lg:top-[60%] lg:left-[30%] top-[60%] left-[20%] text-white md:text-6xl sm:text-4xl text-2xl">
            <Typewriter
                onInit={(typeWriter) => {
                typeWriter
                    .typeString("ما به هر قیمتی دوره آموزشی تولید نمی‌کنیم!")
                    .start()
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString("وب لرن - آکادمی خصوصی برنامه نویسی")
                    .start()
                    .pauseFor(2000);
                }}
                options={{
                loop: true,
                }}
            />
            </h1>
        </div>
        
    </>
  )
}
