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
import { TypographyH1, TypographyH2, TypographyH3, TypographyH4, TypographyLead, TypographyNavLink, TypographyMuted, TypographySmall, TypographyP } from '@/components/typography/typography';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useRef, useEffect } from 'react';


export default function Navbar() {
    const { resolvedTheme, setTheme } = useTheme();
    const [isSheetOpen, setSheetOpen] = React.useState(false);


    const [isMediumScreen, setIsMediumScreen] = React.useState(false);
    const [isSmallScreen, setIsSmallScreen] = React.useState(false);

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

    const navbarRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const handleHashChange = () => {
            const { hash } = window.location;
            if (hash) {
                const section = document.querySelector(hash);
                if (section) {
                    const navbarHeight = navbarRef.current?.offsetHeight || 0;
                    const sectionTop = section.getBoundingClientRect().top + window.pageYOffset;
                    const offsetPosition = sectionTop - navbarHeight;
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth',
                    });
                }
            }
        };

        handleHashChange();
        window.addEventListener('hashchange', handleHashChange);

        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/50 backdrop-blur-2xl supports-[backdrop-filter]:bg-inherit dark:backdrop-blur-2xl dark:border-border/50 ">
            <div className='container flex xs:flex-row sm:flex-row md:flex-row h-20px items-center justify-between'>
                <div className='flex items-center min-w-fit'>
                    {isMediumScreen && (
                        <Image src={`/logo${resolvedTheme === 'dark' ? 'Dark' : 'Light'}.svg`} alt='ACC ACM Logo' height={64} width={64} className='ml-5 my-3' />
                    )}
                    {isSmallScreen && (
                        <Image src={`/logo${resolvedTheme === 'dark' ? 'Dark' : 'Light'}.svg`} alt='ACC ACM Logo' height={48} width={48} className='ml-5 my-3' />
                    )}
                    <Link href='/' passHref>
                        <div className='m-5 min-w-fit'>
                            <TypographyH4 className=' sm:inline sm:line-clamp-1'>Austin Community College</TypographyH4>
                            <TypographyLead className='hidden md:line-clamp-1 md:inline'>Association for Computing Machinery</TypographyLead>
                            <TypographyMuted className='md:hidden'>Association for Computing Machinery</TypographyMuted>
                            <TypographyMuted className='line-clamp-1'>Student Chapter</TypographyMuted>
                        </div>
                    </Link>
                </div>
                <div className='flex items-center justify-end space-x-2 pr-6'>
                    <div className={`mr-2 flex-auto min-w-0 ${isMediumScreen ? 'flex space-x-4' : 'hidden'} md:flex md:space-x-6 text-sm`}>
                        <nav className='flex items-center gap-4 select'>
                            <Link href='#hackathons' passHref><TypographyNavLink className='lg:inline-flex hidden'>Hackathons</TypographyNavLink></Link>
                            <Link href='#about' passHref><TypographyNavLink className='md:inline-flex hidden'>About Us</TypographyNavLink></Link>
                            <Link href='#events' passHref><TypographyNavLink className='sm:inline-flex hidden'>Events</TypographyNavLink></Link>
                            <Link href='#resources' passHref><TypographyNavLink className='xs:inline-flex hidden'>Resources</TypographyNavLink></Link>
                            <Link href='#contact' passHref><TypographyNavLink className='inline-flex'>Contact</TypographyNavLink></Link>
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
                                <Link href='#about' passHref><TypographyNavLink >About Us</TypographyNavLink></Link>
                                <Link href='#hackathons' passHref><TypographyNavLink >Hackathons</TypographyNavLink></Link>
                                <Link href='#events' passHref><TypographyNavLink >Events</TypographyNavLink></Link>
                                <Link href='#resources' passHref><TypographyNavLink >Resources</TypographyNavLink></Link>
                                <Link href='#contact' passHref><TypographyNavLink >Contact</TypographyNavLink></Link>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header >
    );
}


export function NavbarHackathon() {
    const { resolvedTheme, setTheme } = useTheme();
    const [isSheetOpen, setSheetOpen] = React.useState(false);


    const [isMediumScreen, setIsMediumScreen] = React.useState(false);
    const [isSmallScreen, setIsSmallScreen] = React.useState(false);

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
                        <Image src={`/logo${resolvedTheme === 'dark' ? 'Dark' : 'Light'}.svg`} alt='ACC ACM Student Chapter' height={64} width={64} className='ml-5 my-3' />
                    )}
                    {isSmallScreen && (
                        <Image src={`/logo${resolvedTheme === 'dark' ? 'Dark' : 'Light'}.svg`} alt='ACC ACM Student Chapter' height={48} width={48} className='ml-5 my-3' />
                    )}
                    <Link href='/' passHref><div className='m-5 min-w-fit'>
                        <TypographyH4 className=' sm:inline sm:line-clamp-1'>Austin Community College</TypographyH4>
                        <TypographyLead className='hidden md:line-clamp-1 md:inline'>Association for Computing Machinery</TypographyLead>
                        <TypographyMuted className='md:hidden'>Association for Computing Machinery</TypographyMuted>
                        <TypographyMuted className='line-clamp-1'>Student Chapter</TypographyMuted>
                    </div></Link>
                </div>
                <div className='flex flex-1 items-center justify-end space-x-2 pr-6'>
                    <div className='hidden sm:flex sm:space-x-4 md:flex md:space-x-6 text-sm'>
                        <nav className='hidden md:flex md:items-center sm:gap-4 md:gap-6 select'>
                            <Link href="#about" passHref><TypographyNavLink>About Riverhacks</TypographyNavLink></Link>
                            <Link href="#schedule" passHref><TypographyNavLink>Schedule</TypographyNavLink></Link>
                            <Link href="#faq" passHref><TypographyNavLink>FAQ</TypographyNavLink></Link>
                            <Link href="#sponsors" passHref><TypographyNavLink>Sponsors</TypographyNavLink></Link>
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
                                <Link href="#about" passHref><TypographyNavLink>About Riverhacks</TypographyNavLink></Link>
                                <Link href="#schedule" passHref><TypographyNavLink>Schedule</TypographyNavLink></Link>
                                <Link href="#faq" passHref><TypographyNavLink>FAQ</TypographyNavLink></Link>
                                <Link href="#sponsors" passHref><TypographyNavLink>Sponsors</TypographyNavLink></Link>

                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header >
    );
}

