import React from 'react'

const OutlinedButtonComponent = ({ title }) => {
  return (
    <button className='bg-transparent text-primary rounded-[30px] border-primary border px-[56px] py-[15px] font-black hover:bg-primary hover:text-white uppercase  tracking-[0.46px] '>
      {title}
    </button>
  )
}

export default OutlinedButtonComponent