import React from 'react'
import Link from './LinkComponent'

const FilledButtonComponent = ({ title, url }) => {
  return (
    <Link url={url}>
      <button className='bg-primary text-white  px-[56px] py-[15px] font-black hover:bg-accent2 uppercase  tracking-[0.46px] rounded-[30px]'>
        {title}
      </button>
    </Link>

  )
}

export default FilledButtonComponent