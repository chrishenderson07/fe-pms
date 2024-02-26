'use client'

import { useRef } from 'react'
import UseFadeIn from '@/app/_hooks/UseFadeIn'

import {
	Card,
	CardContent,
	CardDescription,
	CardTitle,
} from '@/app/_components/ui/card'

import WhatsappIcon from './WhatsappIcon'

import { Button } from '@/app/_components/ui/button'

import Link from 'next/link'
import { TabletMainImage } from './TabletMainImage'
export const NotebookSection = () => {
	const whatsappLink =
		'https://api.whatsapp.com/send?phone=5517991850473&text=Ol%C3%A1.%20Obrigado%20por%20entrar%20em%20contato.%20Aguarde%20que%20retornaremos%20assim%C2%A0que%C2%A0poss%C3%ADvel.'

	const cardRef = {
		card1: useRef(null),
		card2: useRef(null),
		card3: useRef(null),
		card4: useRef(null),
	}
	UseFadeIn(cardRef.card1, 100, 1)
	UseFadeIn(cardRef.card2, 100, 1.5)
	UseFadeIn(cardRef.card3, 100, 2)
	UseFadeIn(cardRef.card4, 100, 2.5)
	return (
		<section className="w-full bg-gradient-to-t from-[#061826] to-[#020B12]">
			<div className="mx-auto  w-full w-max-[1260px] bg-notebook-section bg-cover rounded-[42px]">
				<div className="bg-[#E7E7E7] w-full h-full rounded-[42px] bg-opacity-60 sm:pb-4 py-12">
					<div
						id="sobre"
						className="titleBox flex flex-col items-center gap-4">
						<TabletMainImage />

						<h2 className="sm:text-5xl md:text-4xl text-3xl text-[#272727] font-bold text-center">
							PMS (Process Management System)
						</h2>

						<div className="cardContainer w-11/12 md:w-11/12 grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 grid-rows-1">
							<Card
								ref={cardRef.card1}
								className=" bg-gradient-to-tr from-[#232528] to-[#3C4047]  pt-7 pb-2 px-0 text-center shadow-sm ">
								<CardTitle className="mb-3 text-2xl">Único</CardTitle>
								<CardContent className="text-sm">
									<CardDescription className="text-white">
										O PMS foi desenvolvido para ser uma ferramenta única no
										setor Sucroenergético
									</CardDescription>
								</CardContent>
							</Card>
							<Card
								ref={cardRef.card2}
								className=" bg-gradient-to-tr from-[#232528] to-[#3C4047]  pt-7 pb-2 px-0 text-center shadow-sm ">
								<CardTitle className="mb-3 text-2xl">Facilidade</CardTitle>
								<CardContent className="text-sm">
									<CardDescription className="text-white">
										Simula seu Balanço de Massa e Energia de forma simples,
										intuitiva e customizada para cada planta
									</CardDescription>
								</CardContent>
							</Card>
							<Card
								ref={cardRef.card3}
								className="flex-1 bg-gradient-to-tr from-[#232528] to-[#3C4047]  pt-7 pb-2 px-0 text-center shadow-sm ">
								<CardTitle className="mb-3 text-2xl">Planejamento</CardTitle>
								<CardContent className="text-sm">
									<CardDescription className="text-white">
										Utilize o BME para planejamento de curto, médio e longo
										prazo aderente à capacidade da planta
									</CardDescription>
								</CardContent>
							</Card>
							<Card
								ref={cardRef.card4}
								className="flex-1 bg-gradient-to-tr from-[#232528] to-[#3C4047]  pt-7 pb-2 px-0 text-center shadow-sm ">
								<CardTitle className="mb-3 text-2xl">Análises</CardTitle>
								<CardContent className="text-sm">
									<CardDescription className="text-white">
										Faça análises de cenários, correlação e receita de maneira
										rápida e confiável, sem exigir anos de experiência.
									</CardDescription>
								</CardContent>
							</Card>
						</div>

						<Link
							href={whatsappLink}
							passHref>
							<Button className="mt-4 sm:mt-8 bg-[#282A2E] text-white flex gap-4 text-xl font-bold rounded-3xl py-8 px-10 shadow-lg transition-transform hover:bg-[#282A2E] hover:-translate-y-4">
								<WhatsappIcon />
								<h3>Entre em contato</h3>
							</Button>
						</Link>
					</div>
				</div>
			</div>
		</section>
	)
}
