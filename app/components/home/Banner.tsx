import React from 'react';
import Wrapper from '../shared/Wrapper';
import Image from 'next/image';
import * as Icons from '../../svg/Icons';

export default function Banner() {
  return (
    <Wrapper style='bg-[#212939] py-[1rem] sm:py-[1.2rem] px-[5px] w-full max-w-[480px] rounded-[20px] mx-auto'>
      <div className='flex justify-center items-center gap-[12px] sm:gap-[2rem]'>
        <Icons.pyth className='w-[80px] sm:w-[101px] h-[30px] sm:h-[35px]' />
        <Icons.openBook className='sm:w-[126px] sm:h-[24px] w-[115px] h-[26px]' />
        <Icons.phoneix className='w-[100px] h-[20px] sm:w-[127px] sm:h-[25px]' />
      </div>
    </Wrapper>
  );
}
