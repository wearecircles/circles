import React from 'react'
import ChipsComponent from './ChipsComponent'

const TestimonialCard = ({size, style, index, name, description}) => {
  return (
    <div className={`relative flex flex-col w-full h-full ${index} ${style}`}>
      {/* image placeholder */}
      <div className="hidden lg:z-10 lg:flex justify-center">
        <img className={`w-[200px] h-[200px] ${size}`} src="images/placeholder-img2.png" alt="" />
      </div>

      <div className={`static z-[0] bg-white flex flex-col px-[24px] pb-[48px] pt-[80px] gap-[24px] rounded-[10px] drop-shadow-[0px_9px_19px_rgba(0,66,117,0.2)] ${size} ${style} `}>
        <div className="flex flex-row gap-[8px] justify-center ">
          {/* star rating placeholder */}
          <img className={`w-[30px] h-[30px] ${size}`} src="images/star.svg" alt="" />
        </div>
        {/* customer name + review */}
        <div className="flex flex-col gap-[16px] ">
          <h6 className= 'text-primary font-black uppercase text-center'>
            {name}
          </h6>
          {/* placeholder Text */}
          <p className='text-primary break-all'>
            {description}
          </p>
        </div>
        <div className="flex flex-row gap-[16px]">
          <ChipsComponent title={'CSS'}/>
          <ChipsComponent title={'Javascript'} />
        </div>
      </div>
    </div>

  )
}

export default TestimonialCard