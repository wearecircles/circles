import React from 'react'
import ChipsComponent from './ChipsComponent'

const TestimonialCard = ({size, style, index}) => {
  return (
    <div className={`relative flex flex-col w-full h-full ${index} ${style}`}>
      {/* image placeholder */}
      <div className="z-10 flex justify-center">
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
            Lorem Ipsum
          </h6>
          {/* placeholder Text */}
          <p className='text-primary break-all'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique
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