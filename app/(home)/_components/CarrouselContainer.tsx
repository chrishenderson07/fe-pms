'use client'

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/app/_components/ui/carousel'

import logoBatatais from '../../../public/logo-batatais.webp'
import logoUsinas from '../../../public/logo-usinas.webp'
import logoDomingos from '../../../public/logo-sao-domingos.webp'
import Image from 'next/image'
import Autoplay from 'embla-carousel-autoplay'

export const CarrouselContainer = () => {
	return (
		<Carousel
			plugins={[
				Autoplay({
					autoplay: true,
					delay: 4000,
				}),
			]}
			opts={{
				loop: true,
				active: true,
			}}>
			<CarouselContent>
				<CarouselItem className="flex justify-center">
					<Image
						src={logoBatatais}
						alt="Logo Usinas Batatais"
						className="rounded-xl"
					/>
				</CarouselItem>
				<CarouselItem className="flex justify-center">
					<Image
						src={logoUsinas}
						alt="Logo Usinas Lins"
						className="rounded-xl"
					/>
				</CarouselItem>
				<CarouselItem className="flex justify-center">
					<Image
						src={logoDomingos}
						alt="Logo Usina São Domingos"
						className="rounded-xl"
					/>
				</CarouselItem>
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	)
}
