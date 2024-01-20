import React from 'react';
import Wrapper from './Wrapper';
import Image from 'next/image';
import { FaTwitter, FaFacebookF, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';

export default function Footer() {
  return (
    <Wrapper style='bg-[#012A36] text-white py-[70px]'>
      <footer className='flex flex-col gap-[3rem]'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-[2rem]'>
          <div className='flex flex-col gap-[1.5rem]'>
            <Image src='/images/logo.svg' width={140} height={35} alt='logo' />
            <div className='flex items-center gap-[2rem] ml-[10px]'>
              <FaTwitter className='text-white w-[20px] h-[20px]' />
              <FaFacebookF className='text-white w-[20px] h-[20px]' />
              <FaLinkedin className='text-white w-[20px] h-[20px]' />
            </div>
          </div>
          <div className='flex flex-col sm:flex-row justify-between gap-[1rem]'>
            {footer.map((item, index) => {
              return (
                <div key={index} className=''>
                  <h3 className='text-[16px] font-[500] leading-[28px] text-white mb-[1rem] opacity-50'>
                    {item.category}
                  </h3>
                  <div className='flex flex-col gap-[8px]'>
                    {item.list.map((ls, index) => {
                      return (
                        <Link
                          key={index}
                          href='/'
                          className='text-[16px] font-[500] leading-[28px] text-white hover:opacity-80'
                        >
                          {ls}
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
    category: 'Company',
    list: ['About us', 'Blog', 'Media Kit', 'Careers'],
  },
  {
    category: 'Products',
    list: ['Vaults', 'Markets', 'Trading Bot', 'API'],
  },
  {
    category: 'Legal',
    list: ['Privacy Policy', 'Terms & Conditions', 'Disclaimer'],
  },
];
