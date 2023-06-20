import React from 'react'
import Link from './LinkComponent'

const OutlinedButtonComponent = ({ title, url }) => {
  return (
    <Link url={url}>
      <button className='bg-transparent text-primary rounded-[30px] border-primary border px-[56px] py-[15px] font-black hover:bg-primary hover:text-white uppercase  tracking-[0.46px] '>
        {title}
      </button>
    </Link>
  )
}

export default OutlinedButtonComponent