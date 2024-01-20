import React from 'react'

export default function Drawer() {
    return (
        <div className='absolute top-0 right-0 z-10 bg-darkBg h-screen w-full flex items-center justify-center sm:hidden'>
            <ul className='flex flex-col gap-[2rem]'>
                <li className='text-[20px] font-[500] leading-[28px] text-white cursor-pointer text-center'>Markets</li>
                <li className='text-[20px] font-[500] leading-[28px] text-white cursor-pointer text-center'>Vaults</li>
                <li className='text-[20px] font-[500] leading-[28px] text-white cursor-pointer text-center'>Tools</li>
                <li className='text-[20px] font-[500] leading-[28px] text-white cursor-pointer text-center'>Docs</li>
            </ul>
        </div>
    )
}
