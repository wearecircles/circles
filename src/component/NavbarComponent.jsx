import React, { useState } from 'react'
import FilledButtonComponent from './generic/FilledButtonComponent';
import { LINKS } from '../utils/links';
import { NAVIGATIONS } from '../utils/constants';

const NavbarComponent = () => {
  const [active, setActive] = useState(0);

  return (
    <>
      <div className='flex lg:px-[100px] md:px-[50px] justify-between py-[30.5px] px-[24px] '>
        <div className='flex justify-center items-center text-[36px] font-extrabold uppercase text-primary hover:text-accent2'>
          Circles
        </div>
        <div className='flex gap-[48px]'>
          <div className='hidden lg:flex justify-center items-center'>
            <ul className='flex gap-[24px]'>

              {

                NAVIGATIONS.map((item, index) => (
                  index === active
                    ?
                    <li key={index} className='text-accent2 cursor-pointer font-bold uppercase hover:text-accent1'>{item}
                    </li>
                    :
                    <li key={index} className='text-primary cursor-pointer font-bold uppercase hover:text-accent2'>{item}
                    </li>
                )
                )
              }
            </ul>

          </div>
          <div className="lg:hidden flex items-center">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M27.6673 9.33398C27.6673 9.88626 27.2196 10.334 26.6673 10.334H5.33398C4.7817 10.334 4.33398 9.88626 4.33398 9.33398C4.33398 8.7817 4.7817 8.33398 5.33398 8.33398H26.6673C27.2196 8.33398 27.6673 8.7817 27.6673 9.33398Z" fill="#1C274C" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M27.6673 16C27.6673 16.5523 27.2196 17 26.6673 17H5.33398C4.7817 17 4.33398 16.5523 4.33398 16C4.33398 15.4477 4.7817 15 5.33398 15H26.6673C27.2196 15 27.6673 15.4477 27.6673 16Z" fill="#1C274C" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M27.6673 22.666C27.6673 23.2183 27.2196 23.666 26.6673 23.666H5.33398C4.7817 23.666 4.33398 23.2183 4.33398 22.666C4.33398 22.1137 4.7817 21.666 5.33398 21.666H26.6673C27.2196 21.666 27.6673 22.1137 27.6673 22.666Z" fill="#1C274C" />
            </svg>


          </div>
          <div>
            <FilledButtonComponent title='Contact' url={LINKS.facebook} />
          </div>
        </div>
      </div>
    </>
  )
}

export default NavbarComponent