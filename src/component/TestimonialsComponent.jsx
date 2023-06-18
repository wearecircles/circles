import React from 'react'
import TestimonialCard from './generic/TestimonialCard'

const TestimonialsComponent = () => {
  return (
    <div className="flex flex-col gap-[64px] py-[150px] px-[100px] bg-cover bg-[url('images/testimonials.svg')] h-fit">
      <div className="flex flex-col gap-[8px]">
        <h5 className="uppercase font-bold text-[20px] leading-[28.8px] tracking-[10px] text-primary font-urbanist">
          Testimonials
        </h5>
        <div className="font-black text-[64px] leading-[76.8px] text-primary uppercase font-urbanist">
          What our <text className='text-accent2'>Customers Say</text>
        </div>
      </div>

      {/* testimonial cards */}
      <div className="relative flex flex-row gap-[24px]  h-[700px] items-center">
        <div className="py-28 opacity-70">
          <TestimonialCard style={'-mt-16'} />
        </div>

        <TestimonialCard size={'scale-125'} style={'-mt-[10px] px-[48px]'} index={'z-10'} />

        <div className="py-28 opacity-70">
          <TestimonialCard style={'-mt-16'} />
        </div>
      </div>
    </div>
  )
}

export default TestimonialsComponent