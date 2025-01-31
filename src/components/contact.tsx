export function Contact() {
	return (
		<section id="contact" className="px-8 py-10 bg-darkBlue">
			<div className="max-w-6xl mx-auto my-0">
				<h1 className="mb-8 text-xl text-center text-white">Contato</h1>
				<div className="grid grid-cols-2 gap-12">
					<div>
						<p className="text-lg font-medium text-orange">Endereço:</p>
						<p className="text-sm text-white max-w-72">
							R. Mathias Velho, 255 - Centro, Canoas - RS, 92310-300
						</p>

						<p className="pt-8 text-lg font-medium text-orange">Telefone:</p>
						<p className="text-sm text-white">(51) 9 9840-3596</p>
					</div>

					<div>
						<p className="text-lg font-medium text-orange">Fale Conosco:</p>
						<p className="pt-2 pb-4 text-xs text-white/50">
							Preencha o formulário abaixo e um de nossos consultores entrará em
							contato.
						</p>

						<form className="flex flex-col space-y-3">
							<input
								type="text"
								placeholder="Nome"
								className="px-3 py-2 outline-none"
							/>
							<input
								type="email"
								placeholder="E-mail"
								className="px-3 py-2 outline-none"
							/>
							<input
								type="number"
								placeholder="Telefone"
								className="px-3 py-2 outline-none"
							/>
							<textarea
								placeholder="Digite sua mensagem aqui..."
								className="px-3 py-2 outline-none h-36"
							/>

							<button
								type="submit"
								className="py-4 text-white rounded bg-orange"
							>
								Enviar
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	)
}
