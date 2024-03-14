'use client'
import * as React from 'react'
import { useTheme } from 'next-themes'
import Image from 'next/image'

export default function AcmLogo() {
	const { theme } = useTheme()

	return (
		<Image
			src={`/acmLogo${theme === 'dark' ? 'Light' : 'Dark'}.png`}
			alt="ACM Logo"
			width={64}
			height={64}
		/>
	)
}