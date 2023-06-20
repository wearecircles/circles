import React from 'react'
import TestimonialCard from './generic/TestimonialCard'
import ChipsComponent from './generic/ChipsComponent'

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
          <TestimonialCard url={`http://www.gravatar.com/avatar/${Math.random()}?d=robohash&s=1500`} style={'-mt-16'} name={'Ernalee'} description={'Sobrang maasahan at on time parati yung mga gawa at ipapagawa mo sa kanya! Sobrang quality din ng gawa nya at sobrang budget friendly ng price! Di mo pagsisihan na sya yung hiningan mo ng tulong.'} >
          <ChipsComponent title={'Java'} />
          </TestimonialCard>
        </div>

        <TestimonialCard url={`http://www.gravatar.com/avatar/${Math.random()}?d=robohash&s=1500`} size={'scale-125'} style={'-mt-[10px] px-[48px]'} index={'z-10'} name={'Piaaaaaaaaaaaaaaaaa'} description={"Very nice and accommodating--always ensures that the work reaches the client's standards and even goes out of the way to further improve what is asked. Turnaround time is also decent, and in my case, the work was done faster than I expected "}>
        <ChipsComponent title={'Java'} />
        <ChipsComponent title={'Mini Game'} />
        </TestimonialCard>

        <div className="py-28 opacity-70">
          <TestimonialCard url={`http://www.gravatar.com/avatar/${Math.random()}?d=robohash&s=1500`} style={'-mt-16'} name={'Ernalee'} description={'Thank you! Savior ko kayo talaga eh no? Hahahha. Always on point yung mga gawa. Madali pang kausap and worth it lagi ang price range. Sana laging masarap ulam nyo! 🥰'} > 
          <ChipsComponent title={'Java'} />
          <ChipsComponent title={'C#'} />
          <ChipsComponent title={'.NET'} />
          </TestimonialCard>
        </div>
      </div>

      {/* mobile */}
      <div className="lg:hidden flex flex-col gap-[48px]">
        <TestimonialCard name={'Reno Angelo'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias atque totam amet nemo, debitis unde veritatis aspernatur eligendi fuga doloribus rerum ipsam ratione! Libero officia maiores quae! Quod, adipisci quia?'} />
        <TestimonialCard name={'Angelo'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias atque totam amet nemo, debitis unde veritatis aspernatur eligendi fuga doloribus rerum ipsam ratione! Libero officia maiores quae! Quod, adipisci quia?'} />
        <TestimonialCard name={'Gelo'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias atque totam amet nemo, debitis unde veritatis aspernatur eligendi fuga doloribus rerum ipsam ratione! Libero officia maiores quae! Quod, adipisci quia?'} />
      </div>
    </div>
  )
}

export default TestimonialsComponent