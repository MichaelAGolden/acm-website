'use client'

import { ThemeSelector } from './theme-toggle';
import { ThemeProvider, useTheme } from 'next-themes';
import Image from 'next/image';

export default function Navbar() {
    const { theme } = useTheme();

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 backdrop-blur-lg supports-[backdrop-filter]:bg-inherit/10 dark:backdrop-blur-2xl dark:border-border">
            <div className='container flex h-20 max-w-screen-2xl items-center'>
                <button className='mr-4 flex items-center space-x-6'>
                    <Image src={`/placeholder${theme === 'dark' ? 'Dark' : 'Light'}.svg`} alt='ACM at ACC' height={64} width={64} />
                    <span className='font-sans font-bold text-lg'>ACM at ACC</span>
                </button>
                <div className='flex-col md:items-center md:space-x-6 text-sm'>
                    <nav className='flex md:items-center gap-6 select'>
                        <a className='transition-colors hover:text-foreground text-foreground/60' href='#'>About Us</a>
                        <a className='transition-colors hover:text-foreground text-foreground/60' href='#'>Events</a>
                        <a className='transition-colors hover:text-foreground text-foreground/60' href='#'>Resources</a>
                        <a className='transition-colors hover:text-foreground text-foreground/60' href='#'>Contact</a>
                    </nav>
                </div>
                <div className='flex flex-1 items-center justify-between space-x-2 md:justify-end'>
                    <ThemeSelector />
                </div>
            </div>
        </header>
    );
}

