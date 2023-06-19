import React from 'react'
import CardComponent from './CardComponent'

const PortfolioComponent = () => {
  return (
    <div id='portfolio' className="flex flex-col gap-[48px] py-[150px] px-[24px] md:px-[50px] lg:px-[100px] bg-cover bg-[url('images/portfolio.svg')] items-center h-fit">
      <div className="w-full flex flex-col gap-[24px]">
        <div className="flex flex-col gap-[8px] font-urbanist">
          <h5 className="uppercase font-bold text-[20px] leading-[28.8px] tracking-[10px] text-primary">
            Highlights
          </h5>
          <div className="font-black text-[64px] leading-[76.8px] text-primary uppercase">
            <text className='text-accent2'>Recent</text> Works
          </div>
        </div>
      </div>

      {/* cards */}
      <div className="flex flex-col gap-[48px] w-full">
        <div className="flex  flex-col lg:flex-row gap-[24px] w-full ">
          <CardComponent title={'lorem ipsum'} type={'Programming'} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, quo officiis a voluptas nostrum sunt. Hic fuga tempora amet delectus quam ea, aspernatur impedit facere. Vitae voluptatum quibusdam aperiam minima.'} tags={'Wordpress'}/>
          <CardComponent title={'lorem ipsum'} type={'Programming'} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, quo officiis a voluptas nostrum sunt. Hic fuga tempora amet delectus quam ea, aspernatur impedit facere. Vitae voluptatum quibusdam aperiam minima.'} />
          <CardComponent title={'lorem ipsum'} type={'Programming'} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, quo officiis a voluptas nostrum sunt. Hic fuga tempora amet delectus quam ea, aspernatur impedit facere. Vitae voluptatum quibusdam aperiam minima.'} />
        </div>

        {/* row 2 */}
        <div className="lg:flex hidden lg:flex-row gap-[24px] w-fit ">
          <CardComponent title={'lorem ipsum'} type={'Programming'} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, quo officiis a voluptas nostrum sunt. Hic fuga tempora amet delectus quam ea, aspernatur impedit facere. Vitae voluptatum quibusdam aperiam minima.'} />
          <CardComponent title={'lorem ipsum'} type={'Programming'} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, quo officiis a voluptas nostrum sunt. Hic fuga tempora amet delectus quam ea, aspernatur impedit facere. Vitae voluptatum quibusdam aperiam minima.'} />
          <CardComponent title={'lorem ipsum'} type={'Programming'} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, quo officiis a voluptas nostrum sunt. Hic fuga tempora amet delectus quam ea, aspernatur impedit facere. Vitae voluptatum quibusdam aperiam minima.'} />
        </div>

      </div>

    </div>
  )
}

export default PortfolioComponent