import React from 'react'
import PillsComponent from './generic/PillsComponent'
import ChipsComponent from './generic/ChipsComponent'

const CardComponent = ({ title, type, description, tags }) => {
  return (
    <div className="w-full flex flex-col px-[24px] pt-[24px] pb-[48px] gap-[24px] bg-white rounded-[10px]  drop-shadow-[0px_9px_19px_rgba(0,66,117,0.2)]">
      <div className="w-full">
        {/* image placeholder */}
        <img className='w-full' src="placeholder-img.png" alt="" />

      </div>

      {/* title + desc */}
      <div className="w-full flex flex-col gap-[16px] ">
        <h6 className='text-primary font-urbanist font-extrabold uppercase text-[24px] '>
          {title}
        </h6>
        <div className="flex flex-row gap-[16px]">
          <PillsComponent title={type} />
        </div>

        {/* placeholder Text */}
        <p className=" text-primary font-body break-all">
          {description}
        </p>
        <div className="flex flex-row gap-[16px]">
          <ChipsComponent title={`${tags}`}/>
          <ChipsComponent title={'Javascript'}/>
          <ChipsComponent title={'HTML'} />
          <ChipsComponent title={'PHP'} />
        </div>


      </div>

    </div>
  )
}

export default CardComponent