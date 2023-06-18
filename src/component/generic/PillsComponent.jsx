import React from 'react'

const PillsComponent = ({title}) => {
  return (
    <div className="h-[28px] w-fit rounded-[20px] px-[8px] bg-[#FF75714D]  text-primary font-semibold text-[11px] leading-[13px] uppercase flex items-center font-urbanist tracking-[0.46px]">
      {title}
    </div>
  )
}

export default PillsComponent