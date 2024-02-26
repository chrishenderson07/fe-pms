'use client'
import { Button as ShadButton } from '@/app/_components/ui/button'

import WhatsappIcon from './WhatsappIcon'
import { useState } from 'react'

interface GhostButtonProps {
	className?: string
}

export const GhostButton = ({ className }: GhostButtonProps) => {
	const [iconColor, setIconColor] = useState('#fff')

	const externalLink =
		'https://api.whatsapp.com/send?phone=5517991850473&text=Ol%C3%A1.%20Obrigado%20por%20entrar%20em%20contato.%20Aguarde%20que%20retornaremos%20assim%C2%A0que%C2%A0poss%C3%ADvel.'
	return (
		<a
			href={externalLink}
			className={className}>
			<ShadButton
				onMouseEnter={() => setIconColor('#030D15')}
				onMouseLeave={() => setIconColor('#fff')}
				variant={'ghost'}
				className="flex gap-3  text-xl font-bold rounded-3xl border-solid border-4 border-[#112843] py-8 px-10 shadow-lg transition-all hover:-translate-y-5"
				style={{ boxShadow: "0px 0px 25px 10px rgba('56, 95, 170, 0.9')" }}>
				<WhatsappIcon fill={iconColor} />
				Entre em contato
			</ShadButton>
		</a>
	)
}
