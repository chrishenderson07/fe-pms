import { CarrouselContainer } from './CarrouselContainer'

export const TestimonialSection = () => {
	return (
		<section className="w-full bg-[#061826] py-8 sm:py-16">
			<div className="flex flex-col sm:flex-row gap-4 w-11/12 md:w-10/12 mx-auto px-8 sm:px-4  ">
				<div className="content flex-1">
					<h3 className="text-[#EEEEEE] text-3xl font-bold text-center sm:text-left">
						Comprove a nossa excelência com nossas avaliações.
					</h3>
				</div>
				<div className="testimonial flex-1 ">
					<CarrouselContainer />
				</div>
			</div>
		</section>
	)
}
