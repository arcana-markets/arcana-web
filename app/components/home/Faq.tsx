'use client';

import React from 'react';
import Faq from 'react-faq-component';
import Wrapper from '../shared/Wrapper';
import { faqData } from '../../Data/FaqData';

const config = {
  animate: true,
  tabFocus: true,
};

const styles = {
  bgColor: 'transparent',
  rowTitleColor: '#fff',
  rowTitleTextSize: '18px',
  rowContentColor: '#FFFFFFB8',
  arrowColor: '#fff',
  rowContentPaddingBottom: '10px',
};

const FaqSection = () => {
  return (
    <Wrapper style='pt-[2rem] pb-[4rem] md:pb-[6rem]'>
      <div className='w-full flex flex-col justify-center items-center gap-0 md:gap-4'>
        <h2 className='text-[30px] sm:text-[34px] font-[600] text-white text-center leading-[42px] sm:leading-[48px] font-popins'>
          Frequently Asked Questions
        </h2>
        <div className='w-full lg:w-[75%] flex flex-col gap-24 justify-center items-center'>
          <div className='w-full mt-6 font-[500]'>
            <Faq data={faqData} config={config} styles={styles} />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default FaqSection;
