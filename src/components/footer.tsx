'use client'

import Image from 'next/image';
import { useTheme } from 'next-themes';


export default function Footer() {
	const { theme } = useTheme();

	return (
		<footer>
			<div className='container flex h-20 max-w-screen-2xl items-center justify-between'>

				<div className='flex items-center space-x-6 mb-6'>
					<Image src={`/placeholder${theme === 'dark' ? 'Dark' : 'Light'}.svg`} alt='ACM at ACC' height={64} width={64} />
					<div className='flex items-center space-x-6'>
						<p className='text-foreground/60'> © 2024 ACM at ACC | © 2024 ACC CS Club</p>
					</div>
				</div>
				<nav className='flex md:items-center gap-6 select mb-6'>
					<a className='transition-colors hover:text-foreground text-foreground/60' href=''>About Us</a>
					<a className='transition-colors hover:text-foreground text-foreground/60' href='#'>Events</a>
					<a className='transition-colors hover:text-foreground text-foreground/60' href='#'>Resources</a>
					<a className='transition-colors hover:text-foreground text-foreground/60' href='#'>Hackathons</a>
					<a className='transition-colors hover:text-foreground text-foreground/60' href='#'>Contact</a>
				</nav>
			</div>
		</footer>
	);
}