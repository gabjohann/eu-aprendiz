export function Header() {
	return (
		<header>
			<nav className="flex items-center justify-center gap-5 py-4 text-xs text-white bg-darkBlue">
				<button
					type="button"
					onClick={() =>
						document
							.getElementById('services')
							?.scrollIntoView({ behavior: 'smooth' })
					}
				>
					SERVIÇOS
				</button>
				<button
					type="button"
					onClick={() =>
						document
							.getElementById('videos')
							?.scrollIntoView({ behavior: 'smooth' })
					}
				>
					VÍDEOS
				</button>
				<button
					type="button"
					onClick={() =>
						document
							.getElementById('contact')
							?.scrollIntoView({ behavior: 'smooth' })
					}
				>
					CONTATO
				</button>
			</nav>
		</header>
	)
}
