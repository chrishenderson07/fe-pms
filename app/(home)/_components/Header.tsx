'use client'

import { useRef } from 'react'
import UseFadeIn from '../../_hooks/UseFadeIn'

import { NavMenu } from './Nav'

export function Header() {
	const elementoRef = useRef(null)
	UseFadeIn(elementoRef)

	return (
		<header
			className="w-full h-[450px] sm:h-[600px] py-4"
			style={{
				backgroundImage:
					'radial-gradient(at center, rgba(6,24,38,1) 0%, rgba(2,11,17,1) 75%)',
			}}>
			<div className="mx-auto w-full max-w-[1260px]">
				<NavMenu />
				<h1
					ref={elementoRef}
					className="text-4xl sm:text-6xl font-bold text-center mt-14">
					Seu Processo em suas Mãos
				</h1>
			</div>
		</header>
	)
}
