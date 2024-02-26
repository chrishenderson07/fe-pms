import { SituationCarrousel } from './SituationCarrousel'

export const CarrouselSection = () => {
	return (
		<section className="w-full py-12 bg-carrousel-section bg-cover">
			<h2 className="sm:text-5xl md:text-4xl text-3xl text-white font-bold text-center">
				Situação Atual
			</h2>
			<div className="carrousel">
				<SituationCarrousel />
			</div>
		</section>
	)
}
