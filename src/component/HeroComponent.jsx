import React from 'react'
import ElevatedButton from './generic/ElevatedButton'
import { TextButtonComponent } from './generic/TextButtonComponent'

const HeroComponent = () => {
  return (
    <div className="flex flex-col-reverse py-[150px] px-[24px] md:px-[50px] lg:flex-row gap-[24px] lg:py-[227px] lg:px-[100px] bg-cover bg-[url('images/background.svg')] items-center">
      {/* heading */}
      <div className="flex flex-col gap-[48px]">
        <div className="flex flex-col gap-[24px]">
          <h1 className="text-[95px] lg:text-[128px] font-bold uppercase text-primary leading-[153.6px] font-urbanist">
            Circles
          </h1>
          <div className="font-body text-[24px] font-normal text-primary">
            Bringing work back on the track
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-[16px]">
          <ElevatedButton title='Contact' />
          <TextButtonComponent title='Services' />
        </div>
      </div>
      <div className="w-full ">
        <img src="images/hero.svg" className='w-full h-[350px] md:h-[450px] lg:h-full' alt="" />
      </div>
    </div>
  )
}

export default HeroComponent