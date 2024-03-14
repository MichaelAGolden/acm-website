import { ModeToggle } from './theme-toggle';
import AcmLogo from './ui/acmLogo';
import Image from 'next/image';


export default function Navbar() {

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 supports-[backdrop-filter]:bg-background/60  dark:backdrop-filter:backdrop-blur-md dark:bg-background/60">
            <div className='container flex h-20 max-w-screen-2xl items-center'>
                <div className='mr-4 hidden md:flex'>
                    <a className='mr-6 flex items-center space-x-2' href='/'>
                        <AcmLogo />
                        <span className='hidden font-bold sm:inline-block'>ACM at ACC</span>
                    </a>
                    <nav className='flex items-center gap-6 text-sm'>
                        <a className='transition-colors hover:text-foreground/80 text-foreground/60' href='#'>About Us</a>
                        <a className='transition-colors hover:text-foreground/80 text-foreground/60' href='#'>Riverhacks</a>
                        <a className='transition-colors hover:text-foreground/80 text-foreground/60' href='#'>Sponsor Us</a>
                        <a className='transition-colors hover:text-foreground/80 text-foreground/60' href='#'>Contact</a>
                    </nav>
                </div>
                <div className='flex flex-1 items-center justify-between space-x-2 md:justify-end' >
                    <ModeToggle />
                </div>
            </div>
        </header >
    );
}

