'use client'

import Image from 'next/image';
import { useTheme } from 'next-themes';
import useSmoothScroll from '../lib/useSmoothScroll';


export default function Footer() {
	const { theme } = useTheme();
	const smoothScroll = useSmoothScroll();

	return (
		<footer>
			<div className='container flex h-20 items-center justify-between'>
				<div className='flex items-center space-x-6 mb-6 ml-6'>
					<Image src={`/logo${theme === 'dark' ? 'Light' : 'Dark'}.svg`} alt='ACM at ACC' height={64} width={64} />
					<div className='flex flex-col md:flex-row items-center space-x-6'>
						<p className='text-foreground/60'> © 2024 ACC ACM Student Chapter <br /> © 2024 ACC CS Club</p>
					</div>
				</div>
				<nav className='hidden sm:flex md:items-center gap-4 md:gap-6 select mb-6 mr-6'>
					<a className='transition-colors hover:text-foreground text-foreground/60' href='#about' onClick={smoothScroll}>About Us</a>
					<a className='transition-colors hover:text-foreground text-foreground/60' href='#hackathons' onClick={smoothScroll}>Hackathons</a>
					<a className='transition-colors hover:text-foreground text-foreground/60' href='#events' onClick={smoothScroll}>Events</a>
					<a className='transition-colors hover:text-foreground text-foreground/60' href='#resources' onClick={smoothScroll}>Resources</a>
					<a className='transition-colors hover:text-foreground text-foreground/60' href='#contact' onClick={smoothScroll}>Contact</a>
				</nav>
			</div>
		</footer>
	);
}