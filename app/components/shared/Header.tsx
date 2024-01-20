'use client';

import React, { useState } from 'react';
import Wrapper from './Wrapper';
import Image from 'next/image';
import Drawer from './Drawer';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross2 } from 'react-icons/rx';
import Link from 'next/link';

export default function Header() {
  const [drawer, setDrawer] = useState(false);

  const handleDrawer = () => {
    setDrawer(!drawer);
  };

  return (
    <Wrapper style='bg-transperent py-[25px] sm:py-[40px] absolute top-0'>
      <header>
        {drawer && (
          <RxCross2
            className='text-white w-[30px] h-[30px] absolute top-[2rem] left-[1rem] z-20 cursor-pointer sm:hidden'
            onClick={handleDrawer}
          />
        )}
        <div className='flex mx-auto items-center justify-between max-w-[522px]'>
          {header.map((item, index) => {
            return (
              <>
                {index === 2 ? (
                  <Link href='/'>
                    <Image src={item.name} width={140} height={35} alt='logo' />
                  </Link>
                ) : (
                  <Link
                    href={item.path}
                    className='text-[16px] text-white font-[500] leading-[28px] text-center hidden sm:inline cursor-pointer relative after:absolute after:w-0 after:bottom-0 after:left-0 after:h-[2px] after:bg-white hover:after:w-full after:duration-200'
                  >
                    {item.name}
                  </Link>
                )}
              </>
            );
          })}

          {!drawer && (
            <GiHamburgerMenu
              className='text-white w-[30px] h-[30px] cursor-pointer sm:hidden'
              onClick={handleDrawer}
            />
          )}
        </div>
        {drawer && <Drawer />}
      </header>
    </Wrapper>
  );
}

const header = [
  {
    path: '/',
    name: 'Markets',
  },
  {
    path: '/',
    name: 'Vaults',
  },
  {
    path: '/',
    name: '/images/logo.svg',
  },
  {
    path: '/',
    name: 'Tools',
  },
  {
    path: '/',
    name: 'Docs',
  },
];
