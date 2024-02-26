'use client'

import { useRef } from 'react'

import Image from 'next/image'

import contactImage from '../../../public/imagem-contato.webp'
import Link from 'next/link'
import { Button } from '@/app/_components/ui/button'
import WhatsappIcon from './WhatsappIcon'
import UseFadeIn from '@/app/_hooks/UseFadeIn'

export const ContactSection = () => {
	const whatsappLink =
		'https://api.whatsapp.com/send?phone=5517991850473&text=Ol%C3%A1.%20Obrigado%20por%20entrar%20em%20contato.%20Aguarde%20que%20retornaremos%20assim%C2%A0que%C2%A0poss%C3%ADvel.'

	const imageRef = useRef(null)
	const titleRef = useRef(null)
	const subTitleRef = useRef(null)
	const buttonRef = useRef(null)
	UseFadeIn(imageRef, -50)
	UseFadeIn(titleRef, 30)
	UseFadeIn(subTitleRef, 30)
	UseFadeIn(buttonRef, 50)

	return (
		<section
			id="mais"
			className="w-full bg-[#061826] py-16">
			<div className="flex flex-col items-center sm:flex-row gap-10 w-11/12 md:w-8/12 mx-auto px-4 py-12">
				<div className="testimonial flex-1">
					<Image
						ref={imageRef}
						src={contactImage}
						alt="Pessoas usando o PMS"
					/>
				</div>

				<div className="content flex-1 flex flex-col gap-2 justify-center">
					<h3
						ref={titleRef}
						className="text-[#EEEEEE] text-5xl font-bold">
						Fale conosco{' '}
					</h3>
					<h4
						ref={subTitleRef}
						className="text-2xl sm:w-4/4">
						Entre em contato e conheça mais sobre o PMS
					</h4>
					<Link
						href={whatsappLink}
						ref={buttonRef}
						passHref>
						<Button className="mt-4 sm:mt-8 bg-[#18894C] text-white flex gap-4 text-xl font-bold rounded-3xl py-8  shadow-lg transition-transform hover:bg-[#1e9a58] hover:-translate-y-4">
							<WhatsappIcon />
							<h3>Entre em contato</h3>
						</Button>
					</Link>
				</div>
			</div>
		</section>
	)
}
