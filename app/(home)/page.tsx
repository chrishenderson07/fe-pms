import { CarrouselSection } from './_components/CarrouselSection'
import { ContactSection } from './_components/ContactSection'
import { Header } from './_components/Header'
import { ModulesSection } from './_components/ModulesSection'
import { NotebookSection } from './_components/NotebookSection'
import { PlanejamentoSection } from './_components/PlanejamentoSection'
import { TestimonialSection } from './_components/TestimonialSection'
const Home = () => {
	return (
		<>
			<Header />
			<NotebookSection />
			<CarrouselSection />
			<ModulesSection />
			<PlanejamentoSection />
			<TestimonialSection />
			<ContactSection />
		</>
	)
}

export default Home
