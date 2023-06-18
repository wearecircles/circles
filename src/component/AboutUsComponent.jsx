import React from 'react'
import OutlinedButtonComponent from './generic/OutlinedButtonComponent'

const AboutUsComponent = () => {
  return (
    <div className="flex flex-row gap-[48px] py-[150px] px-[100px] bg-cover bg-[url('images/about-us.svg')] items-center h-fit">
      <div className="w-full">
        <img src="images/about-img.svg" alt="" />
      </div>
      <div className="w-full flex flex-col gap-[24px]">
        <div className="flex flex-col gap-[8px] font-urbanist">
          <h5 className="uppercase font-bold text-[20px] leading-[28.8px] tracking-[10px] text-primary">
            who we are
          </h5>
          <div className="font-black text-[64px] leading-[76.8px] text-primary uppercase">
            <text className='text-accent2'>About</text> Us
          </div>
        </div>
        <div className="text-primary ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique
        </div>
        <div className="w-[auto]">
          <OutlinedButtonComponent title='Read More' />
        </div>

      </div>
    </div>
  )
}

export default AboutUsComponent