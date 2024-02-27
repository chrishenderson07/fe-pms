'use client'

import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { FreeMode, Pagination, Navigation, Autoplay } from 'swiper/modules'

import { Card, CardContent } from '@/app/_components/ui/card'

import item1 from '../../../public/carrousel-item1.webp'
import item2 from '../../../public/carrousel-item2.webp'
import item3 from '../../../public/carrousel-item3.webp'
import item4 from '../../../public/carrousel-item4.webp'
import item5 from '../../../public/carrousel-item5.webp'
import item6 from '../../../public/carrousel-item6.webp'
import item7 from '../../../public/carrousel-item7.webp'

export const SituationCarrousel = () => {
	const items = [
		{
			image: item1,
			text: 'Utilização de softwares convencionais que não oferecem praticidade e confiabilidade',
		},
		{
			image: item2,
			text: 'Falta de mão de obra especializada para rodar BME de forma precisa',
		},
		{
			image: item3,
			text: 'Treinamentos de BME ensinam cálculos por operação unitária, não fechando o balanço, além de serem genéricos',
		},
		{
			image: item4,
			text: 'Planejamento é realiza do sem aderência à capacidade da planta',
		},
		{
			image: item5,
			text: 'Dificuldade para identificação de gargalos',
		},
		{
			image: item6,
			text: 'Análise de cenários levam muito tempo e demandam mão de obra extremamente especializada',
		},
		{
			image: item7,
			text: 'Decisões técnicas e comerciais são tomada s com base em dados superficiais',
		},
	]
	return (
		<>
			<Swiper
				slidesPerView={3}
				spaceBetween={30}
				freeMode={true}
				loop={true}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				pagination={{
					clickable: true,
				}}
				navigation={true}
				breakpoints={{
					320: {
						slidesPerView: 1,
						spaceBetween: 20,
					},
					425: {
						slidesPerView: 2,
						spaceBetween: 30,
					},
					768: {
						slidesPerView: 3,
						spaceBetween: 30,
					},
				}}
				modules={[FreeMode, Pagination, Navigation, Autoplay]}
				className="mt-10">
				{items.map((item, index) => (
					<SwiperSlide key={index}>
						<Card>
							<CardContent
								style={{
									backgroundImage: `url(${item.image.src})`,
									backgroundSize: 'cover',
								}}
								className="h-[500px] flex flex-col justify-end pb-10 rounded-xl">
								<h4>{item.text}</h4>
							</CardContent>
						</Card>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	)
}
