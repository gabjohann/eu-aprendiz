import * as Dialog from '@radix-ui/react-dialog'
import { X, type LucideProps } from 'lucide-react'

type ServiceCardProps = {
	icon: React.FC<LucideProps>
	title: string
	cardDescription: string
	description: React.ReactNode | string
	color: 'orange' | 'blue'
}

export function ServiceCard({
	icon: Icon,
	title,
	cardDescription,
	description,
	color,
}: ServiceCardProps) {
	const bgColor = color === 'orange' ? 'bg-orange' : 'bg-lightBlue'
	const textColor = color === 'orange' ? 'text-darkBlue' : 'text-white'
	const bgButtonColor = color === 'orange' ? 'bg-darkBlue' : 'bg-orange'
	const btnShadow = color === 'orange' ? 'blueButton' : 'orangeButton'

	return (
		<div
			className={`${bgColor} ${textColor} pt-14 md:w-44 lg:w-52 w-40 text-center relative p-5 flex flex-col items-center h-full min-h-[280px]`}
		>
			<div id="service-card" className="relative w-full">
				<div className="tape" />
			</div>

			<Icon size={32} strokeWidth={1.5} className="mb-3" />

			<div className="flex flex-col items-center justify-between flex-grow w-full text-center">
				<p className="font-semibold">{title}</p>
				<p className="flex-grow text-sm">{cardDescription}</p>

				<Dialog.Root>
					<Dialog.Trigger asChild>
						<button
							type="button"
							className={`uppercase text-white text-xs ${bgButtonColor} py-3 px-6 rounded ${btnShadow} mt-3`}
						>
							Saiba mais
						</button>
					</Dialog.Trigger>

					<Dialog.Portal>
						<Dialog.Overlay className="fixed inset-0 bg-blackA6 data-[state=open]:animate-overlayShow" />
						<Dialog.Content className="fixed left-1/2 top-1/2 w-80 md:w-10/12 max-w-[640px] max-h-[640px] overflow-y-auto -translate-x-1/2 -translate-y-1/2 rounded-md bg-gray1 p-[25px] shadow-[var(--shadow-6)] focus:outline-none data-[state=open]:animate-contentShow">
							<Dialog.Title className="m-0 text-[17px] font-medium text-mauve12">
								{title}
							</Dialog.Title>
							<Dialog.Description className="mb-5 mt-2.5 text-[15px] leading-normal text-mauve11 whitespace-pre-line">
								{description}
							</Dialog.Description>

							<Dialog.Close asChild>
								<button
									type="button"
									className="absolute right-2.5 top-2.5 inline-flex size-[25px] appearance-none items-center justify-center rounded-full text-darkBlue  hover:bg-violet4  focus:outline-none"
									aria-label="Close"
								>
									<X />
								</button>
							</Dialog.Close>
						</Dialog.Content>
					</Dialog.Portal>
				</Dialog.Root>
			</div>
		</div>
	)
}
