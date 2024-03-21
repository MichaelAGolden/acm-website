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
import { TypographyH1, TypographyH2, TypographyH3, TypographyMuted } from '@/components/typography/typography';


export default function Navbar() {
    const { resolvedTheme, setTheme } = useTheme();
    const [isSheetOpen, setSheetOpen] = React.useState(false);

    const toggleSheet = () => setSheetOpen(!isSheetOpen);

    React.useEffect(() => {
        if (resolvedTheme === 'system') {
            setTheme(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        }
    }, [resolvedTheme, setTheme]);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/50 backdrop-blur-2xl supports-[backdrop-filter]:bg-inherit dark:backdrop-blur-2xl dark:border-border/50 ">
            <div className='container flex xs:flex-row sm:flex-row md:flex-row h-20 items-center'>
                <Sheet>
                    <SheetTrigger className='mr-4 flex items-center space-x-6 ml-6'>
                        <Image src={`/logo${resolvedTheme === 'dark' ? 'Dark' : 'Light'}.svg`} alt='ACM at ACC' height={64} width={64} />
                        <TypographyH3 className=''>ACM at ACC</TypographyH3>
                    </SheetTrigger>
                    <SheetContent>
                        <nav className='flex flex-col items-center gap-6 select'>
                            <TypographyMuted className='transition-colors hover:text-foreground text-foreground/60'><a href='#about'>About Us</a></TypographyMuted>
                            <TypographyMuted className='transition-colors hover:text-foreground text-foreground/60'><a href='#hackathons'>Hackathons</a></TypographyMuted>
                            <TypographyMuted className='transition-colors hover:text-foreground text-foreground/60'><a href='#events'>Events</a></TypographyMuted>
                            <TypographyMuted className='transition-colors hover:text-foreground text-foreground/60'><a href='#resources'>Resources</a></TypographyMuted>
                            <TypographyMuted className='transition-colors hover:text-foreground text-foreground/60'><a href='#contact'>Contact</a></TypographyMuted>
                        </nav>
                    </SheetContent>
                </Sheet>
                <div className='hidden sm:flex sm:space-x-4 md:flex md:space-x-6 text-sm'>
                    <nav className='flex sm:items-center sm:gap-4 md:gap-6 md:items-center gap-2 select'>
                        <TypographyMuted className='transition-colors hover:text-foreground text-foreground/60'><a href='#about'>About Us</a></TypographyMuted>
                        <TypographyMuted className='transition-colors hover:text-foreground text-foreground/60'><a href='#hackathons'>Hackathons</a></TypographyMuted>
                        <TypographyMuted className='transition-colors hover:text-foreground text-foreground/60'><a href='#events'>Events</a></TypographyMuted>
                        <TypographyMuted className='transition-colors hover:text-foreground text-foreground/60'><a href='#resources'>Resources</a></TypographyMuted>
                        <TypographyMuted className='transition-colors hover:text-foreground text-foreground/60'><a href='#contact'>Contact</a></TypographyMuted>
                    </nav>
                </div>
                <div className='flex flex-1 sm:flex-row md:flex-row items-center justify-end space-x-2 pr-6'>
                    <ThemeSelector />
                </div>
            </div>

        </header >
    );
}
