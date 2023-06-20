import React, { Fragment } from 'react'
import { HEADING, SERVICES, } from '../utils/services'

const ServicesComponent = () => {
  return (

    <div id='services' className="flex flex-col lg:flex-row gap-[48px] py-[150px] px-[24px] lg:px-[100px] md:px-[50px] bg-cover bg-[url('services.svg')]  lg:h-[900px] items-center">
      {/* heading + buttons */}
      <div className="flex flex-col  gap-[24px] lg:gap-[48px] w-full">
        <div className="flex flex-col gap-[8px]">
          <h5 className="uppercase font-urbanist font-bold text-[16px] lg:text-[20px] lg:leading-[28.8px] tracking-[10px] text-primary">
            {HEADING.primary}
          </h5>
          <div className="font-urbanist font-black text-[48px] lg:text-[64px] lg:leading-[76.8px] text-primary uppercase">
            <text className='text-accent2'>{HEADING.secondary}</text> {HEADING.tertiary}
          </div>
        </div>
        {/* <div className="w-[auto]">
          <ElevatedButton title='View All' />
        </div> */}

      </div>

      {/* pills */}
      <div className="flex flex-col w-full h-full lg:items-center gap-[30px] lg:gap-[22px] lg:bg-[url('services-circle.svg')]">
        <div className="h-full items-center">
          <div className="flex relative flex-row w-full lg:w-[340.19px] h-[180px]">
            {SERVICES.programming.map((item, index) => (
              <Fragment key={index}>
                <div className=" text-primary flex-col rounded-[50px] h-[auto] w-[500px] lg:w-[313.07px] flex gap-[16px] bg-white drop-shadow-[0_9px_19px_rgba(0,66,117,0.2)] p-[24px] absolute left-[27.12px] pl-[50px] pr-[25px] py-[25px] hover:bg-primary hover:text-white">
                  <h6 className="font-bold uppercase text-[20px]">
                    {item.title}
                  </h6>
                  <p className="font-normal">
                    {item.description}
                  </p>
                </div>
                {item.icon}
              </Fragment>
            ))}
          </div>
        </div>


        {/* row */}
        <div className="flex relative flex-col h-[400px] lg:flex-row lg:h-full w-full gap-[22px] lg:gap-[52px] lg:items-center">
          <div className="flex relative flex-row w-[340.19px] h-full  ">

            {SERVICES.arts.map((item, index) => (
              <Fragment key={index}>
                <div className=" text-primary flex-col rounded-[50px] h-[auto] w-[500px] lg:w-[313.07px] flex gap-[16px] bg-white drop-shadow-[0_9px_19px_rgba(0,66,117,0.2)] p-[24px] absolute left-[27.12px] pl-[50px] pr-[25px] py-[25px] hover:bg-primary hover:text-white">
                  <h6 className="font-bold uppercase text-[20px]">
                    {item.title}
                  </h6>
                  <p className="font-normal">
                    {item.description}
                  </p>
                </div>
                {item.icon}
              </Fragment>
            ))}


          </div>
          <div className="flex relative flex-row w-[340.19px] h-full ">

            {SERVICES.writting.map((item, index) => (
              <Fragment key={index}>
                <div className=" text-primary flex-col rounded-[50px] h-[auto] w-[500px] lg:w-[313.07px] flex gap-[16px] bg-white drop-shadow-[0_9px_19px_rgba(0,66,117,0.2)] p-[24px] absolute left-[27.12px] pl-[50px] pr-[25px] py-[25px] hover:bg-primary hover:text-white">
                  <h6 className="font-bold uppercase text-[20px]">
                    {item.title}
                  </h6>
                  <p className="font-normal">
                    {item.description}
                  </p>
                </div>
                {item.icon}
              </Fragment>
            ))}

          </div>
        </div>

        <div className="h-full items-center">
          <div className="flex relative flex-row w-[340.19px] h-[180px]">

            {SERVICES.computer.map((item, index) => (
              <Fragment key={index}>
                <div className=" text-primary flex-col rounded-[50px] h-[auto] w-[500px] lg:w-[313.07px] flex gap-[16px] bg-white drop-shadow-[0_9px_19px_rgba(0,66,117,0.2)] p-[24px] absolute left-[27.12px] pl-[50px] pr-[25px] py-[25px] hover:bg-primary hover:text-white">
                  <h6 className="font-bold uppercase text-[20px]">
                    {item.title}
                  </h6>
                  <p className="font-normal">
                    {item.description}
                  </p>
                </div>
                {item.icon}
              </Fragment>
            ))}

          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicesComponent