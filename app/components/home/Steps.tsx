import React from 'react';
import Wrapper from '../shared/Wrapper';
import Image from 'next/image';
export default function Steps() {
  return (
    <Wrapper style='py-[3rem] md:py-[5rem]'>
      <div className='flex flex-col gap-[20px] sm:gap-[2rem] md:gap-[4rem]'>
        <div className='flex items-center justify-center gap-[10px] sm:gap-[40px]'>
          <h2 className='text-[16px] font-[700] text-white'>ARCANA</h2>
          <div className='w-[180px] sm:w-[250px] h-[180px] sm:h-[223px] relative'>
            <Image
              src='/images/logo1.svg'
              fill
              className='object-fill md:object-cover'
              alt=''
            />
          </div>
          <h2 className='text-[16px] font-[700] text-white'>AWARDS</h2>
        </div>
        <div className='flex justify-center w-[90%] mx-auto'>
          <Image src='/images/steps.svg' width={1000} height={272} alt='' />
        </div>
      </div>
    </Wrapper>
  );
}
