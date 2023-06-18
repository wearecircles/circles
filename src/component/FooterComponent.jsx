import React from 'react'

const FooterComponent = () => {
  return (
    <div className='flex justify-between py-[48px] px-[100px] bg-primary h-[120px] items-center'>
      <div className='flex text-[36px] font-extrabold uppercase text-white hover:text-accent2 w-full'>
        Circles
      </div>
      <div className='flex gap-[48px] w-full'>
        <div className='flex justify-center items-center w-full'>
          <ul className='flex gap-[24px] text-white font-medium uppercase'>
            <li>Privacy</li>
            <li>Terms</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="flex flex-col w-full gap-[16px] ">
          {/* social icons */}
          <div className="flex flex-row gap-[16px] justify-end ">
            {/* facebook */}
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="32" height="32" rx="16" fill="#1877F2" />
              <path d="M22.2281 20.625L22.9375 16H18.5V13C18.5 11.7344 19.1188 10.5 21.1063 10.5H23.125V6.5625C23.125 6.5625 21.2938 6.25 19.5438 6.25C15.8875 6.25 13.5 8.46563 13.5 12.475V16H9.4375V20.625H13.5V31.8062C14.3156 31.9344 15.15 32 16 32C16.85 32 17.6844 31.9344 18.5 31.8062V20.625H22.2281Z" fill="#F9FFFF" />
            </svg>

            {/* instagram */}
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="32" height="32" rx="16" fill="url(#paint0_linear_196_2435)" />
              <path d="M16.0025 8.13046C18.5677 8.13046 18.8688 8.1419 19.8827 8.18764C20.8203 8.22956 21.3272 8.38584 21.6665 8.51924C22.1162 8.69457 22.4364 8.90039 22.7718 9.23581C23.1072 9.57123 23.3169 9.8914 23.4884 10.3412C23.618 10.6804 23.7781 11.1873 23.82 12.125C23.8657 13.1388 23.8772 13.4399 23.8772 16.0051C23.8772 18.5703 23.8657 18.8714 23.82 19.8853C23.7781 20.8229 23.6218 21.3298 23.4884 21.6691C23.3131 22.1188 23.1072 22.439 22.7718 22.7744C22.4364 23.1098 22.1162 23.3195 21.6665 23.491C21.3272 23.6206 20.8203 23.7806 19.8827 23.8226C18.8688 23.8683 18.5677 23.8797 16.0025 23.8797C13.4374 23.8797 13.1362 23.8683 12.1224 23.8226C11.1847 23.7806 10.6778 23.6244 10.3386 23.491C9.88881 23.3156 9.56864 23.1098 9.23322 22.7744C8.89781 22.439 8.68817 22.1188 8.51665 21.6691C8.38706 21.3298 8.22697 20.8229 8.18505 19.8853C8.13931 18.8714 8.12787 18.5703 8.12787 16.0051C8.12787 13.4399 8.13931 13.1388 8.18505 12.125C8.22697 11.1873 8.38325 10.6804 8.51665 10.3412C8.69198 9.8914 8.89781 9.57123 9.23322 9.23581C9.56864 8.90039 9.88881 8.69076 10.3386 8.51924C10.6778 8.38965 11.1847 8.22956 12.1224 8.18764C13.1362 8.13809 13.4412 8.13046 16.0025 8.13046ZM16.0025 6.40002C13.3954 6.40002 13.0676 6.41146 12.0423 6.4572C11.0208 6.50294 10.3233 6.66683 9.71348 6.90315C9.08076 7.14709 8.54714 7.47869 8.01353 8.01231C7.47991 8.54592 7.15212 9.08335 6.90437 9.71225C6.66805 10.3221 6.50416 11.0196 6.45842 12.0449C6.41268 13.0664 6.40125 13.3942 6.40125 16.0013C6.40125 18.6084 6.41268 18.9362 6.45842 19.9615C6.50416 20.983 6.66805 21.6805 6.90437 22.2941C7.14831 22.9269 7.47991 23.4605 8.01353 23.9941C8.54714 24.5277 9.08457 24.8555 9.71348 25.1033C10.3233 25.3396 11.0208 25.5035 12.0461 25.5492C13.0714 25.5949 13.3954 25.6064 16.0063 25.6064C18.6172 25.6064 18.9412 25.5949 19.9665 25.5492C20.988 25.5035 21.6855 25.3396 22.2992 25.1033C22.9319 24.8593 23.4655 24.5277 23.9991 23.9941C24.5328 23.4605 24.8605 22.9231 25.1083 22.2941C25.3446 21.6843 25.5085 20.9868 25.5542 19.9615C25.6 18.9362 25.6114 18.6122 25.6114 16.0013C25.6114 13.3904 25.6 13.0664 25.5542 12.0411C25.5085 11.0196 25.3446 10.3221 25.1083 9.70844C24.8644 9.07573 24.5328 8.54211 23.9991 8.00849C23.4655 7.47488 22.9281 7.14709 22.2992 6.89934C21.6893 6.66302 20.9918 6.49912 19.9665 6.45339C18.9374 6.41146 18.6096 6.40002 16.0025 6.40002Z" fill="white" />
              <path d="M16.0026 11.0729C13.2811 11.0729 11.0704 13.2798 11.0704 16.0051C11.0704 18.7303 13.2773 20.9372 16.0026 20.9372C18.7278 20.9372 20.9347 18.7303 20.9347 16.0051C20.9347 13.2798 18.7278 11.0729 16.0026 11.0729ZM16.0026 19.2029C14.234 19.2029 12.8009 17.7698 12.8009 16.0013C12.8009 14.2327 14.234 12.7996 16.0026 12.7996C17.7711 12.7996 19.2043 14.2327 19.2043 16.0013C19.2043 17.7698 17.7711 19.2029 16.0026 19.2029Z" fill="white" />
              <path d="M21.1291 12.0258C21.7648 12.0258 22.2802 11.5104 22.2802 10.8747C22.2802 10.239 21.7648 9.72363 21.1291 9.72363C20.4934 9.72363 19.978 10.239 19.978 10.8747C19.978 11.5104 20.4934 12.0258 21.1291 12.0258Z" fill="white" />
              <defs>
                <linearGradient id="paint0_linear_196_2435" x1="16" y1="31.9068" x2="16" y2="0.248538" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#E09B3D" />
                  <stop offset="0.3" stop-color="#C74C4D" />
                  <stop offset="0.6" stop-color="#C21975" />
                  <stop offset="1" stop-color="#7024C4" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* copyright */}
          <div className="text-[#9AA0A6] font-body font-normal text-[12px] text-right">
          Copyright © 2023. All Rights Reserved
          </div>
        </div>
      </div>
    </div >
  )
}

export default FooterComponent