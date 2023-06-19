import React from 'react'
import TestimonialCard from './generic/TestimonialCard'

const TestimonialsComponent = () => {
  return (
    <div className="flex flex-col gap-[64px] py-[150px] px-[24px] lg:px-[100px] bg-cover bg-[url('images/testimonials.svg')] h-fit">
      <div className="flex flex-col gap-[8px]">
        <h5 className="uppercase font-bold text-[20px] leading-[28.8px] tracking-[10px] text-primary font-urbanist">
          Testimonials
        </h5>
        <div className="font-black text-[64px] leading-[76.8px] text-primary uppercase font-urbanist">
          What our <text className='text-accent2'>Customers Say</text>
        </div>
      </div>

      {/* testimonial cards */}
      <div className="relative hidden lg:flex flex-row gap-[24px]  h-[700px] items-center">
        <div className="py-28 opacity-70">
          <TestimonialCard style={'-mt-16'} name={'Reno Angelo'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias atque totam amet nemo, debitis unde veritatis aspernatur eligendi fuga doloribus rerum ipsam ratione! Libero officia maiores quae! Quod, adipisci quia?'} /> 
        </div>

        <TestimonialCard size={'scale-125'} style={'-mt-[10px] px-[48px]'} index={'z-10'} name={'Gelooooooooooooooooo'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias atque totam amet nemo, debitis unde veritatis aspernatur eligendi fuga doloribus rerum ipsam ratione! Libero officia maiores quae! Quod, adipisci quia?'}/>

        <div className="py-28 opacity-70">
          <TestimonialCard style={'-mt-16'} name={'Reno'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias atque totam amet nemo, debitis unde veritatis aspernatur eligendi fuga doloribus rerum ipsam ratione! Libero officia maiores quae! Quod, adipisci quia?'} />
        </div>
      </div>

{/* mobile */}
      <div className="lg:hidden flex flex-col gap-[48px]">
        <TestimonialCard name={'Reno Angelo'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias atque totam amet nemo, debitis unde veritatis aspernatur eligendi fuga doloribus rerum ipsam ratione! Libero officia maiores quae! Quod, adipisci quia?'} />
        <TestimonialCard name={'Angelo'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias atque totam amet nemo, debitis unde veritatis aspernatur eligendi fuga doloribus rerum ipsam ratione! Libero officia maiores quae! Quod, adipisci quia?'}/>
        <TestimonialCard name={'Gelo'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias atque totam amet nemo, debitis unde veritatis aspernatur eligendi fuga doloribus rerum ipsam ratione! Libero officia maiores quae! Quod, adipisci quia?'}/>
      </div>
    </div>
  )
}

export default TestimonialsComponent