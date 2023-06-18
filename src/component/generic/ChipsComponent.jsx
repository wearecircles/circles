import React from 'react'

const ChipsComponent = ({ title}) => {
  return (
    <div className='h-[32px] w-fit rounded-[8px] px-[8px] bg-[#FDAF7799] font-semibold text-[12px] leading-[14px] tracking-[0.46px] uppercase flex items-center font-urbanist text-primary'>
      {title}
    </div>
  )
}

export default ChipsComponent