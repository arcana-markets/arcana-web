import React from 'react';
import Wrapper from './Wrapper';
import Image from 'next/image';
import Link from 'next/link';
import * as Icons from '../../svg/Icons';

export default function Footer() {
  return (
    <Wrapper style='bg-[#012A36] text-white py-[70px]'>
      <footer className='flex flex-col gap-[3rem]'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-[2rem]'>
          <div className='flex flex-col gap-[1.5rem]'>
            <Image src='/images/logo.svg' width={140} height={35} alt='logo' />
            <div className='flex items-center gap-[2rem] ml-[10px]'>
            <Link href="https://x.com/arcanamarkets" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 >
              <Icons.xSocialIcon className='text-white w-[20px] h-[20px]' />
              </Link>
              <Link href="https://github.com/arcana-markets"
              target="_blank"
              rel="noopener noreferrer"
              >
              <Icons.githubIcon className='text-white' />
              </Link>
              <Link href="https://discord.gg/7BGB2mZvYW"
              target="_blank"
              rel="noopener noreferrer"
              >
              <Icons.discordIcon className='text-white' />
              </Link>
            </div>
          </div>
          <div className='flex flex-col sm:flex-row justify-between gap-[1rem]'>
          {footer.map((item, index) => {
          return (
            <div key={index}>
              <h3 className='text-[16px] font-[500] leading-[28px] text-white mb-[1rem] opacity-50'>
                {item.category}
              </h3>
              <div className='flex flex-col gap-[8px]'>
                {item.list?.map((ls, idx) => {
                  return (
                    <Link
                      key={idx}
                      href={ls.path} // Use the path from your list item here
                      className='text-[16px] font-[500] leading-[28px] text-white hover:opacity-80'
                    >
                      {ls.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
          </div>
        </div>
        <div className='flex flex-col gap-[1rem]'>
          <div className='w-full h-[2px] bg-white opacity-20'></div>
          <p className='text-[14px] text-white font-[500] leading-[24px] opacity-50'>
            Arcana Labs LLC © All Rights Reserved {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </Wrapper>
  );
}

const footer = [
  {
    category: 'Products',
    list: [
      { name: 'Data', path: '/data' }, // Update the path as needed
      { name: 'Trading Bot', path: 'https://github.com/arcana-markets' }, // Update the path as needed
    ],
  },
];
