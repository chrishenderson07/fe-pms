import { Heart } from 'lucide-react'

export const Footer = () => {
	return (
		<footer className="sm:px-12 py-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-between bg-[#030303]">
			<div>
				<p className="text-white text-center sm:text-left">
					TELEFONE. (17) 99185-0473
				</p>
				<p className="text-white text-center sm:text-left">
					EMAIL. CONTATO@PMS.APP.BR
				</p>
				<p className="text-white text-center sm:text-left">
					© 2023 PMS. Todos os direitos reservados.
				</p>
			</div>
			<div>
				<p className="text-white text-center sm:text-left flex items-center gap-1">
					Desenvolvido com <Heart size={16} /> por
					<a
						href="https://nerodesign.com.br/"
						target="_blank">
						<strong>Nero Design</strong>
					</a>
				</p>
			</div>
		</footer>
	)
}
