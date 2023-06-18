import React from 'react'
import { SERVICES } from '../../constants/services'

const ServicesPillComponent = ({ height }) => {
  return (

    <>

      {
        SERVICES.map((items, index) => (
          <>
          
            <div className="h-full items-center">
              <div className={`flex relative flex-row w-[340.19px] ${height} `} key={index}>
                <div className=" text-primary flex-col rounded-[50px] h-[auto] w-[313.07px] flex gap-[16px] bg-white drop-shadow-[0_9px_19px_rgba(0,66,117,0.2)] p-[24px] absolute left-[27.12px] pl-[50px] pr-[25px] py-[25px] hover:bg-primary hover:text-white">
                  <h6 className="font-bold uppercase text-[20px]">
                    {items.title}
                  </h6>
                  <p className="font-normal">
                  {items.description}
                  </p>
                </div>
                <div className="absolute z-1 top-[61.63px] left-0">
                {items.icon}

                </div>
              </div>
            </div>

          </>
        ))

      }

    </>



  )
}

export default ServicesPillComponent