import React from 'react'
import FilledButtonComponent from './generic/FilledButtonComponent'
import { LINKS } from '../utils/links'

const CTAComponent = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row gap-[48px] py-[150px] px-[24px] lg:px-[100px] bg-cover bg-[url('images/cta-block.svg')] items-center h-fitx">
      <div className="w-full flex flex-col gap-[24px]">
        <div className="font-black text-[64px] leading-[76.8px] text-primary uppercase font-urbanist">
          Have Any <text className='text-accent2'>Projects in mind?</text>
        </div>
        <div className="text-primary ">
          Follow and contact us on our accounts down below.
        </div>
        <div className="w-[auto]">
          <FilledButtonComponent title='Start A Project' url={LINKS.facebook} />
        </div>

      </div>
      <div className="w-full">
        <img src="images/cta-img.svg" alt="" />
      </div>
    </div>
  )
}

export default CTAComponent