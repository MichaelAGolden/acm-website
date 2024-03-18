'use client'

import * as React from 'react';

import { ThemeSelector } from './theme-toggle';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

export default function Navbar() {
    const { theme, resolvedTheme } = useTheme();
    const [isSheetOpen, setSheetOpen] = React.useState(false);

    const toggleSheet = () => setSheetOpen(!isSheetOpen);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/50 backdrop-blur-2xl supports-[backdrop-filter]:bg-inherit dark:backdrop-blur-2xl dark:border-border/50 ">
            <div className='container flex xs:flex-row sm:flex-row md:flex-row h-20 items-center'>
                <Sheet>
                    <SheetTrigger className='mr-4 flex items-center space-x-6 ml-6'>
                        <Image src={`/placeholder${theme === 'dark' ? 'Dark' : 'Light'}.svg`} alt='ACM at ACC' height={64} width={64} />
                        <span className='font-sans font-bold text-lg'>ACM at ACC</span>
                    </SheetTrigger>
                    <SheetContent>
                        <nav className='flex flex-col items-center gap-6 select'>
                            <a className='transition-colors hover:text-foreground text-foreground/60' href='#about'>About Us</a>
                            <a className='transition-colors hover:text-foreground text-foreground/60' href='#events'>Events</a>
                            <a className='transition-colors hover:text-foreground text-foreground/60' href='#resources'>Resources</a>
                            <a className='transition-colors hover:text-foreground text-foreground/60' href='#hackathons'>Hackathons</a>
                            <a className='transition-colors hover:text-foreground text-foreground/60' href='#contact'>Contact</a>
                        </nav>
                    </SheetContent>
                </Sheet>
                <div className='hidden sm:flex sm:space-x-4 md:flex md:space-x-6 text-sm'>
                    <nav className='flex sm:items-center sm:gap-4 md:gap-6 md:items-center gap-2 select'>
                        <a className='transition-colors hover:text-foreground text-foreground/60' href='#about'>About Us</a>
                        <a className='transition-colors hover:text-foreground text-foreground/60' href='#events'>Events</a>
                        <a className='transition-colors hover:text-foreground text-foreground/60' href='#resources'>Resources</a>
                        <a className='transition-colors hover:text-foreground text-foreground/60' href='#hackathons'>Hackathons</a>
                        <a className='transition-colors hover:text-foreground text-foreground/60' href='#contact'>Contact</a>
                    </nav>
                </div>
                <div className='flex flex-1 sm:flex-row md:flex-row items-center justify-end space-x-2 pr-6'>
                    <ThemeSelector />
                </div>
            </div>

        </header >
    );
}
