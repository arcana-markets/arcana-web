import React from 'react';
import Wrapper from '../shared/Wrapper';
import Image from 'next/image';
import { FaArrowRightLong } from 'react-icons/fa6';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { agate } from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface ApiProps {}

const Api: React.FC<ApiProps> = () => {
  const codeString = `
    {
      "Get": "Frictionless Market Data, 
      All The Time",
      "Perfect for": [
        "Builders, Teams, Traders"
      ]
    }
    `;

  const customStyle = {
    backgroundColor: 'transparent',
  };

  return (
    <Wrapper style='py-[1rem] md:py-[3rem] md:py-[5rem]'>
      <div className='flex flex-col md:flex-row w-full'>
        <div className='bg-[#012A36] md:w-[60%] rounded-b-none rounded-tl-[32px] md:rounded-bl-[32px] rounded-tr-[32px] md:rounded-r-none'>
          <div className='bg-[#344b66] flex items-center gap-[1rem] p-[1.5rem] rounded-tl-[32px] rounded-tr-[32px] md:rounded-tr-none'>
            <h2 className='text-[28px] sm:text-[34px] font-[600] text-white leading-[36px] sm:leading-[48px] text-center font-popins'>
              Arcana Markets API
            </h2>
            <span className='w-fit py-[3px] px-[16px] text-[16px] text-white font-[500] bg-[#012A36] rounded-[16px]'>
              v1.1.3
            </span>
          </div>
          <div>
            <SyntaxHighlighter
              language='javascript'
              style={agate}
              customStyle={customStyle}
            >
              {codeString}
            </SyntaxHighlighter>
          </div>
        </div>
        <div className='bg-[#5099CC] md:w-[40%] rounded-t-none rounded-b-[32px] md:rounded-r-[32px] flex flex-col justify-center items-center py-[2rem] gap-[2rem] rounded-l-[32px] md:rounded-l-none'>
          <Image src='/images/book.png' width={100} height={130} alt='' />
          <button className='hover:opacity-80 active:translate-y-[2px] flex items-center gap-[1rem] mt-[1rem] bg-[#012A36] w-fit py-[14px] px-[32px] rounded-[12px]'>
            <p className='text-[16px] font-[500] text-white'>
              Explore API Docs
            </p>
            <FaArrowRightLong className='text-white' />
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Api;
