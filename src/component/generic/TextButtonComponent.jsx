import React from 'react'
import Link from './LinkComponent'

export const TextButtonComponent = ({ title, url }) => {
  return (
    <Link url={url}>
      <button className='bg-transparent text-primary rounded-[30px] px-[56px] py-[15px] font-black hover:bg-accent2 hover:text-white tracking-[0.46px] uppercase'>
        {title}
      </button>
    </Link>
  )
}
