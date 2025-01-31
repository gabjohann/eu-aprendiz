type VideoCardProps = {
	title: string
	link: string
}

export function VideoCard({ title, link }: VideoCardProps) {
	return (
		<div className="flex flex-col items-center w-40 h-auto px-4 pt-12 pb-8 bg-videoCard lg:w-52">
			<p className="pb-16 text-base text-center uppercase text-orange">
				{title}
			</p>

			<div className="flex items-end flex-grow w-full">
				{' '}
				{/* Alinha o botão na parte inferior */}
				<button
					type="button"
					className="w-full px-6 py-3 text-xs text-white uppercase rounded bg-orange orangeButton"
				>
					<a href={link} target="_blank" rel="noreferrer">
						Saiba mais
					</a>
				</button>
			</div>
		</div>
	)
}
