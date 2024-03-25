'use client'

import * as React from 'react';
import { Menu } from 'lucide-react';
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
import { Button } from '@/components/ui/button';


export default function Navbar() {
    const { resolvedTheme, setTheme } = useTheme();
    const [isSheetOpen, setSheetOpen] = React.useState(false);
    const toggleSheet = () => setSheetOpen(!isSheetOpen);

    const [isMediumScreen, setIsMediumScreen] = React.useState(false);
    const [isSmallScreen, setIsSmallScreen] = React.useState(false);

    const handleClick = (e) => {
        e.preventDefault(); //prevent default anchor link behavior
        const href =e.currentTarget.getAttribute('href'); // Get the href attribute of the clicked element
        const offsetTop = document.querySelector(href).offsetTop - 40; // Get the top offset of the target element and subtract the height of the navbar
        
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    };

    React.useEffect(() => {
        const handleResize = () => {
            setIsMediumScreen(window.innerWidth >= 768);
            setIsSmallScreen(window.innerWidth < 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    

    }, []);

    React.useEffect(() => {
        if (resolvedTheme === 'system') {
            setTheme(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        }
    }, [resolvedTheme, setTheme]);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/50 backdrop-blur-2xl supports-[backdrop-filter]:bg-inherit dark:backdrop-blur-2xl dark:border-border/50 ">
            <div className='container flex xs:flex-row sm:flex-row md:flex-row h-20px items-center justify-between'>
                <div className='flex items-center'>
                    {isMediumScreen && (
                        <Image src={`/logo${resolvedTheme === 'dark' ? 'Dark' : 'Light'}.svg`} alt='ACM at ACC' height={64} width={64} className='ml-5 my-3' />
                    )}
                    {isSmallScreen && (
                        <Image src={`/logo${resolvedTheme === 'dark' ? 'Dark' : 'Light'}.svg`} alt='ACM at ACC' height={48} width={48} className='ml-5 my-3' />
                    )}
                    <TypographyH3 className='mx-5'><a href='/'>
                        ACC ACM Student Chapter</a></TypographyH3>
                </div>
                <div className='flex flex-1 items-center justify-end space-x-2 pr-6'>
                    <div className='hidden sm:flex sm:space-x-4 md:flex md:space-x-6 text-sm'>
                        <nav className='hidden md:flex md:items-center sm:gap-4 md:gap-6 select'>
                            <TypographyMuted className='transition-colors hover:text-foreground text-foreground/60'><a href='#about' onClick={handleClick}>About Us</a></TypographyMuted>
                            <TypographyMuted className='transition-colors hover:text-foreground text-foreground/60'><a href='#hackathons' onClick={handleClick}>Hackathons</a></TypographyMuted>
                            <TypographyMuted className='transition-colors hover:text-foreground text-foreground/60'><a href='#events' onClick={handleClick}>Events</a></TypographyMuted>
                            <TypographyMuted className='transition-colors hover:text-foreground text-foreground/60'><a href='#resources' onClick={handleClick}>Resources</a></TypographyMuted>
                            <TypographyMuted className='transition-colors hover:text-foreground text-foreground/60'><a href='#contact' onClick={handleClick}>Contact</a></TypographyMuted>
                        </nav>
                    </div>
                    <ThemeSelector />
                    <Sheet>
                        <SheetTrigger className='flex items-center space-x-6 ml-6 md:hidden' asChild>
                            <Button variant='outline' size='icon' className='shrink-0 my-3 bg-card/20 backdrop-blur-sm'>
                                <Menu className='w-6 h-12 ' />
                                <span className='sr-only'>Open navigation</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent className='md:hidden'>
                            <nav className='flex flex-col items-center justify-end gap-6 select'>
                                <div className='flex flex-row items-center space-x-2'>
                                    <Image src={`/logo${resolvedTheme === 'dark' ? 'Dark' : 'Light'}.svg`} alt='ACM at ACC' height={48} width={48} className='ml-5 my-3' />
                                    <TypographyH1>ACM at ACC</TypographyH1>
                                </div>
                                <TypographyMuted className='transition-colors hover:text-foreground text-foreground/60'><a href='#about'>About Us</a></TypographyMuted>
                                <TypographyMuted className='transition-colors hover:text-foreground text-foreground/60'><a href='#hackathons'>Hackathons</a></TypographyMuted>
                                <TypographyMuted className='transition-colors hover:text-foreground text-foreground/60'><a href='#events'>Events</a></TypographyMuted>
                                <TypographyMuted className='transition-colors hover:text-foreground text-foreground/60'><a href='#resources'>Resources</a></TypographyMuted>
                                <TypographyMuted className='transition-colors hover:text-foreground text-foreground/60'><a href='#contact'>Contact</a></TypographyMuted>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header >
    );
}

