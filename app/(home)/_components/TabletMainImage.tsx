'use client'

import Image from 'next/image'

import tabletImage from '../../../public/maintablet.png'
import { useRef } from 'react'
import UseFadeIn from '../../_hooks/UseFadeIn'

export const TabletMainImage = () => {
	const elementoRef = useRef(null)

	UseFadeIn(elementoRef, 50, 1)
	return (
		<Image
			ref={elementoRef}
			src={tabletImage}
			alt="Table com sistema PMS"
			className="notebookImage sm:-mt-[300px] -mt-[180px] sm:w-2/3 w-full -ml-4 sm:ml-0"
		/>
	)
}
