'use client'

import Image from 'next/image'
import Link from 'next/link'

export function NavMenu() {
	const logoImage = require('../../../public/logotipo.png')
	return (
		<nav className="sm:px-8 flex flex-col gap-4 md:flex-row items-center justify-between">
			<Link href="/">
				<Image
					src={logoImage}
					width={120}
					height={120}
					alt="Logotipo PMS"
				/>
			</Link>
			<ul className="flex gap-4 sm:gap-8">
				<Link
					href="#sobre"
					className="transition-all hover:-translate-y-2 hover:text-[#4FAE5C]">
					Sobre
				</Link>
				<Link
					href="#bme"
					className="transition-all hover:-translate-y-2 hover:text-[#4FAE5C] ">
					BME
				</Link>
				<Link
					href="#planejamento"
					className="transition-all hover:-translate-y-2 hover:text-[#4FAE5C]">
					Planejamento
				</Link>
				<Link
					href="#mais"
					className="transition-all hover:-translate-y-2 hover:text-[#4FAE5C]">
					Mais
				</Link>
			</ul>
		</nav>
	)
}
