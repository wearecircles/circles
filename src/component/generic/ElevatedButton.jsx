import React from 'react'
import Link from './LinkComponent'

const ElevatedButton = ({ title, url }) => {
  return (
    <Link url={url}>
      <button className='bg-primary text-white rounded-[30px] px-[56px] py-[15px] font-black hover:bg-accent2 uppercase tracking-[0.46px] drop-shadow-[1px_4px_10px_rgba(0,0,0,0.15)]'>
        {title}
      </button>
    </Link>
  )
}

export default ElevatedButton