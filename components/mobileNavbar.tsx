"use client";

import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { sidebarLinks } from '../constants'
import { cn } from '../lib/utils'
import { usePathname } from 'next/navigation'
import Footer from './footer';

const MobileNavbar = ({user}:MobileNavProps) => {
    const pathName= usePathname()
  return (
    <section className='w-full max-w-[264px]'>
        <Sheet>
            <SheetTrigger>
                <Image src="/icons/hamburger.svg" height={30} width={30} alt="hamburgermenu" />
            </SheetTrigger>
            <SheetContent side="left" className="border-none bg-white">
                <nav className='flex flex-col gap-4'>
            <Link href="/" className=' flex cursor-pointer items-center px-4 gap-1'>
                <Image src="/icons/logo.svg" width={34} height={34} alt="logo"/>
                <h1 className='text-26 font-ibm-plex-serif font-bold text-black-1'>DigiMoney</h1>
            </Link>
            <div className='mobilenav-sheet'>
                <SheetClose asChild>
                    <nav className="flex h-full flex-col gap-6 pt-16 text-white">
                    {sidebarLinks.map((item)=>{
                         const isActive = pathName===item.route || pathName.startsWith(`${item.route}/`)
                         return(
                            <SheetClose asChild key={item.route}>
                                <Link href={item.route} key={item.label} className={cn('mobilenav-sheet_close w-full', {'bg-bank-gradient':isActive})}>
                                    
                                        <Image src={item.imgURL} alt={item.label} width={20} height={20} className={cn({'brightness-[3] invert-0':isActive})}/>
                    
                                    <p className={cn('text-16 font-semibold text-black-2',{ '!text-white': isActive})}>{item.label}</p>
                                </Link>
                             </SheetClose>
                         )
                    })}
                    USER
                    </nav>
                </SheetClose>
                <Footer user={user} type="mobile"/>
            </div>
            
        </nav>
            </SheetContent>
        </Sheet>
    </section>
  )
}

export default MobileNavbar