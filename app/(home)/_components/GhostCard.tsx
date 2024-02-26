'use client'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
} from '@/app/_components/ui/card'
import Image from 'next/image'

interface GhostCardProps {
	className: string
	imageSource: string
	cardContent: string
}

export const GhostCard = ({
	className,
	imageSource,
	cardContent,
}: GhostCardProps) => {
	return (
		<div className={className}>
			<Card className=" h-full max-h-64   lg:w-[280px] bg-[rgba(16,20,24,0.57)] backdrop-blur-sm  rounded-3xl border-solid border-[#393939] border-[1px]">
				<CardHeader>
					<Image
						src={imageSource}
						alt="Icone do sistema PMS"
						width={76}
						height={76}
						className="border-solid border-[#393939] border-[1px] rounded-2xl p-3"
					/>
				</CardHeader>
				<CardContent>
					<CardDescription className="text-white text-sm font-bold">
						{cardContent}
					</CardDescription>
				</CardContent>
			</Card>
		</div>
	)
}
