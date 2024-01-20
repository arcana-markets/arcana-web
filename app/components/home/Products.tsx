import React from 'react';
import Wrapper from '../shared/Wrapper';
import Image from 'next/image';
import { FaArrowRightLong } from 'react-icons/fa6';
import Banner from './Banner';
export default function Products() {
  return (
    <Wrapper style='relative'>
      <div className='w-[90%] absolute top-[-2.3rem] lg:bottom-[-14.4rem] left-1/2 transform -translate-x-1/2'>
        <Banner />
      </div>
      <div
        className='absolute inset-0 z-[-1]'
        style={{
          backgroundImage: `url("/images/productbg.svg")`,
          opacity: 0.4,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      ></div>
      <div className='py-[5rem] md:py-[7rem]'>
        <h2 className='text-[30px] sm:text-[34px] text-white font-[500] leading-[42px] sm:leading-[48px] text-center max-w-[400px] mx-auto mb-[2rem] md:mb-[3rem] font-popins'>
          Unparalleled liquidity. Rock solid products.
        </h2>
        <div className='flex flex-col gap-[26px]'>
          <div
            className='w-full rounded-[32px] relative min-h-auto lg:min-h-[360px] flex flex-col md:flex-row justify-between'
            style={{
              backgroundImage:
                'linear-gradient(255.71deg, #5099CC 0.96%, rgba(44, 85, 114, 0) 78.36%)',
            }}
          >
            {/* left portion ------->  */}
            <div className='lg:w-[40%] flex flex-col gap-[10px] justify-center pl-[22px] sm:pl-[2rem] md:pl-[4rem] lg:pr-0 pr-[22px] sm:pr-[2rem] md:pr-[4rem] py-[2rem]'>
              <h2 className='font-popins text-[28px] sm:text-[34px] font-[600] text-white leading-[40px] sm:leading-[48px]'>
                Token Vaults
              </h2>
              <p className='text-[14px] font-[500] leading-[26px] text-white opacity-70'>
                Lorem ipsum dolor sit amet consectetur. In magnis viverra nec
                mauris tempus feugiat platea et porttitor. In ultrices sem nulla
                massa. Mauris aliquet dis sit pulvinar proin facilisi.
              </p>
              <button className='flex hover:opacity-80 z-20 active:translate-y-[2px] items-center gap-[1rem] mt-[1rem]'>
                <p className='text-[16px] font-[500] text-[#5099CC]'>
                  Explore Vaults
                </p>
                <FaArrowRightLong className='text-[#5099CC]' />
              </button>
            </div>
            {/* image ---------->  */}
            <div className='absolute lg:block hidden h-full right-0'>
              <div className='w-[1300px] h-full relative'>
                <Image
                  src='/images/sec2.svg'
                  alt=''
                  fill
                  className='object-cover'
                />
              </div>
            </div>
          </div>
          {/* ============ */}
          <div className='w-full flex flex-col lg:flex-row gap-[26px]'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-[1rem] bg-[#000] rounded-[32px] lg:w-[58%]'>
              <div className='hidden w-[370px] h-[350px] relative lg:flex'>
                <Image
                  src='/images/analytics.svg'
                  fill
                  alt=''
                  className='rounded-l-[32px] object-cover'
                />
              </div>
              <div className='flex flex-col gap-[10px] justify-center pl-[22px] sm:pl-[2rem] md:pl-[4rem] lg:pr-0 pr-[22px] sm:pr-[2rem] md:pr-[4rem] py-[2rem]'>
                <h2 className='font-popins text-[28px] sm:text-[34px] font-[600] text-white leading-[40px] sm:leading-[48px]'>
                  Data Analytics
                </h2>
                <p className='text-[14px] font-[500] leading-[26px] text-white opacity-70'>
                  Lorem ipsum dolor sit amet consectetur. In magnis viverra nec
                  mauris tempus feugiat platea et porttitor. In ultrices sem
                  nulla massa. Mauris aliquet dis sit pulvinar proin facilisi.
                </p>
                <button className='flex hover:opacity-80 active:translate-y-[2px] z-10 items-center gap-[1rem] mt-[1rem]'>
                  <p className='text-[16px] font-[500] text-white'>
                    See Markets
                  </p>
                  <FaArrowRightLong className='text-white' />
                </button>
              </div>
            </div>
            <div className='bg-[#091620] lg:w-[42%] grid lg:grid-cols-3 rounded-[32px] relative'>
              <div className='pl-[22px] sm:pl-[2rem] md:pl-[4rem] lg:pr-0 pr-[22px] sm:pr-[2rem] md:pr-[4rem] py-[2rem] lg:col-span-2 flex flex-col gap-[1rem]'>
                <h2 className='font-popins text-[28px] sm:text-[34px] font-[600] text-white leading-[40px] sm:leading-[48px]'>
                  Trading Bot
                </h2>
                <p className='text-[14px] font-[500] leading-[26px] text-white opacity-70'>
                  Lorem ipsum dolor sit amet consectetur. In magnis viverra nec
                  mauris tempus feugiat platea et porttitor. In ultrices sem
                  nulla massa. Mauris aliquet dis sit pulvinar proin.
                </p>
                <button className='mt-[1rem] hover:opacity-80 active:translate-y-[2px] w-fit py-[10px] px-[14px] rounded-[12px] bg-[#5099CC14] text-[#5099CC]'>
                  Start your own
                </button>
              </div>
              <div className='hidden lg:flex'>
                <Image
                  src='/images/bot.svg'
                  width={180}
                  height={285}
                  alt=''
                  className='absolute right-0 bottom-0 rounded-br-[32px]'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
