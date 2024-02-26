import Image from 'next/image'

import telapms1 from '../../../public/tela-pms1.webp'
import telapms2 from '../../../public/tela-pms2.webp'

export const PlanejamentoSection = () => {
	return (
		<section
			id="planejamento"
			className="w-full bg-[#061826] py-16">
			<div className="notebook-container flex flex-col  gap-4 w-11/12 md:w-11/12 mx-auto px-4 py-12 bg-[#E5E5E5] rounded-[42px] shadow-2xl">
				<div className="container flex flex-col items-center sm:flex-row gap-10">
					<div className="content sm:w-1/2 flex flex-col gap-3">
						<h2 className="font-bold text-[#112843] pl-3 text-2xl sm:text-3xl border-l-[3px] border-solid border-[#112843]">
							PMS - Módulo Planejamento
						</h2>
						<p className="text-[#484545] text-md sm:text-xl">
							Faça ou revise o Plano Safra integrado com o BME em poucos cliques
						</p>

						<ul className="text-[#484545]  list-disc">
							<li>Compare diferentes revisões em tabelas e gráficos</li>
							<li>Construa um planejamento de 10 anos de forma automática</li>
							<li>Planejamento 100% aderente a capacidade da planta</li>
						</ul>
					</div>
					<Image
						src={telapms1}
						alt="Tela do sistema PMS"
						className="w-full sm:w-1/2"
					/>
				</div>
				<div className="container flex flex-col gap-10 sm:flex-row sm:items-center ">
					<Image
						src={telapms2}
						alt="Tela do sistema PMS"
						className="w-full sm:w-1/2 order-2 sm:order-1"
					/>

					<div className="content sm:w-1/2 flex flex-col gap-3 order-1 sm:order-2 ">
						<h2 className="font-bold text-[#112843] pl-3 text-2xl sm:text-3xl border-l-[3px] border-solid border-[#112843]">
							PMS - Análises
						</h2>
						<p className="text-[#484545] text-md sm:text-xl">
							O PMS roda dezenas de cenários em segundos, permitindo uma análise
							rápida e visual.
						</p>

						<ul className="text-[#484545]  list-disc">
							<li>Receita bruta x mix</li>
							<li>Energia x Bagaco</li>
							<li>Etanol Anidro x Bagaço</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	)
}
