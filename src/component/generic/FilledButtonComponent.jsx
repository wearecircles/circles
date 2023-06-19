import React from 'react'

const FilledButtonComponent = ({ title , link }) => {
  return (

    <a href={`${link}`} target="_blank" rel="noopener noreferrer">
      <button href={''} className='bg-primary text-white rounded-[30px] px-[56px] py-[15px] font-black hover:bg-accent2 uppercase  tracking-[0.46px] '>
        {title}
      </button>
    </a>

  )
}

export default FilledButtonComponent