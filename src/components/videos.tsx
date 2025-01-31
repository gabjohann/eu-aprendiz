import { VideoCard } from './video-card'

export function Videos() {
	return (
		<section
			id="videos"
			className="pb-10 mx-auto my-0 md:max-w-2xl lg:max-w-4xl"
		>
			<h1 className="mb-8 text-xl text-center text-darkBlue">Vídeos</h1>

			<div className="grid grid-cols-2 gap-2 mx-4 md:grid-cols-4">
				<VideoCard
					title="como anexar meu atestado"
					link="https://youtu.be/SlXYRp7tbKk"
				/>
				<VideoCard
					title="como devo me vestir"
					link="https://www.youtube.com/shorts/9m0zBYE69eo?feature=share"
				/>
				<VideoCard
					title="ouça nosso podcast"
					link="https://www.youtube.com/@FalaAprendiz"
				/>
				<VideoCard
					title="conheça o Senac"
					link="https://youtu.be/s1ljxraSywc"
				/>
			</div>
		</section>
	)
}
