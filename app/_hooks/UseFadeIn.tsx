import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

const UseFadeIn = <T extends HTMLElement>(
	elementoRef: React.RefObject<T>,
	translateY?: number,
	duration?: number,
	delay?: number,
) => {
	useEffect(() => {
		const elemento = elementoRef.current
		gsap.registerPlugin(ScrollTrigger)

		const fadeInTimeLine = gsap.timeline({
			scrollTrigger: {
				trigger: elemento,
				start: 'top 90%', // Quando o topo do elemento atinge 80% do topo da janela
				end: 'bottom 20%', // Quando o final do elemento atinge 20% do topo da janela
			},
		})

		fadeInTimeLine.from(elemento, {
			opacity: 0,
			translateY: translateY || -30,
			duration: duration || 1,
			delay: delay || 0,
		})

		fadeInTimeLine.to(elemento, {
			opacity: 1,
			translateY: 0,
			duration: duration || 1,
			delay: delay || 0,
		})
		return () => {
			fadeInTimeLine.kill()
		}
	}, [elementoRef, translateY, duration, delay])
}

export default UseFadeIn
