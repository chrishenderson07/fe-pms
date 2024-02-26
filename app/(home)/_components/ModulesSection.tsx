import {
	Card,
	CardContent,
	CardDescription,
	CardTitle,
} from '@/app/_components/ui/card'
import Image from 'next/image'

import { GhostButton } from './GhostButton'
import { GhostCard } from './GhostCard'

import tabletImage2 from '../../../public/tablet2.webp'
import demandaIcon from '../../../public/icon/demanda.svg'
import estabilidadeIcon from '../../../public/icon/estabilidade.svg'
import fluxoDeTrabalho from '../../../public/icon/fluxo-de-trabalho.svg'
import economize from '../../../public/icon/economize-agua.svg'
import processo from '../../../public/icon/processo.svg'

export const ModulesSection = () => {
	return (
		<section
			id="bme"
			className="w-full py-14 bg-[#061826]">
			<h2 className="sm:text-5xl md:text-4xl text-3xl text-white font-bold text-center">
				PMS - Módulo BME
			</h2>
			<div className="flex flex-col justify-center items-center pb-24">
				<div className="cardContainer md:w-11/12 flex flex-col gap-3 md:flex-row sm:justify-center sm:gap-3  mt-8">
					<Card className="bg-transparent md:w-1/4 pt-7 pb-2 px-0 text-center border-0">
						<CardTitle className="mb-3 text-2xl">Customizado</CardTitle>
						<CardContent className="text-sm">
							<CardDescription className="text-white">
								De forma 100% customizada para cada planta,o BME oferece apenas
								opções  e inputs existentes na planta
							</CardDescription>
						</CardContent>
					</Card>
					<Card className="bg-transparent md:w-1/4 pt-7 pb-2 px-0 text-center border-0">
						<CardTitle className="mb-3 text-2xl">Prático</CardTitle>
						<CardContent className="text-sm">
							<CardDescription className="text-white">
								Com o PMS, entender o processo e como ele se comporta se torna
								uma tarefa fácil
							</CardDescription>
						</CardContent>
					</Card>
					<Card className="bg-transparent md:w-1/4 pt-7 pb-2 px-0 text-center border-0">
						<CardTitle className="mb-3 text-2xl">Organizado</CardTitle>
						<CardContent className="text-sm">
							<CardDescription className="text-white">
								Estruturado de forma organizada e intuitiva, permite visualizar
								o fluxograma de cada área, com abas para entradas de dados para
								fluxos e equipamentos
							</CardDescription>
						</CardContent>
					</Card>
				</div>

				<GhostButton />
			</div>

			<div className="notebook-container flex flex-col xl:flex-row items-center w-11/12 md:w-10/12 mx-auto lg:mt-52 sm:pl-10 py-6 px-4 bg-[#020B12] rounded-[42px] shadow-extraLarge ">
				<div className="md:w-3/5 z-50">
					<h2 className="text-center xl:text-left text-white text-4xl font-bold">
						Rodar BME nunca
						<br />
						foi tão fácil
					</h2>
				</div>

				<div className=" flex flex-col items-center sm:w-5/5 mt-8 xl:-mt-16 relative">
					<Image
						src={tabletImage2}
						alt="Tablet com o sistema PMS"
					/>
					<div className="grid md:grid-cols-2 md:items-stretch gap-4 ">
						<GhostCard
							className=" lg:absolute lg:-top-16 lg:-left-36 xl:-top-32 xl:-left-44"
							imageSource={processo}
							cardContent="No seu processo existem várias opções para operar?"
						/>
						<GhostCard
							className=" lg:absolute lg:-top-4 lg:right-0 xl:-top-24 xl:right-0"
							imageSource={estabilidadeIcon}
							cardContent="Estabilidade = Eficiência Otimize e encontre o ponto de equilíbrio do seu processo e opere com estabilidade"
						/>
						<GhostCard
							className=" lg:absolute lg:bottom-12 lg:-left-32 xl:bottom-52 xl:-left-52"
							imageSource={demandaIcon}
							cardContent="Com o PMS, definir como deseja operar, demanda poucos cliques"
						/>
						<GhostCard
							className=" lg:absolute lg:-bottom-32 lg:-right-0 xl:-bottom-12 xl:-left-32"
							imageSource={fluxoDeTrabalho}
							cardContent="Se o seu processo é ou não capaz, com limites previamente definidos, o PMS irá te dizer"
						/>
						<GhostCard
							className="lg:absolute lg:bottom-32 lg:-right-24 xl:bottom-4  xl:-right-12"
							imageSource={economize}
							cardContent="Veja onde estão seus principais consumidores de água através do Balanço Hídrico"
						/>
					</div>
				</div>
			</div>
		</section>
	)
}
