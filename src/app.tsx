import { Backpack, DollarSign, Handshake, Info } from 'lucide-react'
import logoImg from './assets/logo.jpeg'
import { Header } from './components/header'
import { ServiceCard } from './components/service-card'
import { VideoCard } from './components/video-card'

export function App() {
	return (
		<>
			<Header />
			<section className="w-full bg-[#02006E]">
				<img
					src={logoImg}
					alt="eu aprendiz logo"
					className="w-1/5 mx-auto my-0"
				/>
			</section>

			<section className="py-10 mx-auto my-0 md:max-w-4xl ">
				<h1 className="text-xl text-center text-darkBlue">Serviços</h1>

				<div className="grid grid-cols-2 p-3 m-2 bg-black mt-14 md:grid-cols-4 gap-x-3 gap-y-16 justify-items-center ">
					<ServiceCard
						icon={Handshake}
						title="Normas de convivência"
						cardDescription="Aqui você vai saber sobre algumas normas e regras básicas do Senac-RS."
						description={
							<div className="flex flex-col gap-4">
								<p>
									As normas de convivência são regras que orientam o
									comportamento para garantir respeito e harmonia no ambiente.
								</p>
								<p>
									No <strong>Senac</strong>, são as seguintes:
								</p>
								<p>
									<strong>Vestimenta:</strong> Proibido o uso de regatas, shorts
									ou saias curtas, decotes profundos ou cropped, aplicável a
									todos os gêneros.
								</p>
								<p>
									<strong>Relacionamento:</strong> Gestores não devem ter
									relações afetivas pessoais com colaboradores diretos.
								</p>
								<p>
									<strong>Crachá:</strong> É obrigatório o uso do crachá de
									identificação.
								</p>
								<p>
									<strong>Horários:</strong> Respeitar horários; tolerância de
									<span className="text-red-500"> 10 </span>
									minutos de atraso e <span className="text-red-500">20 </span>
									minutos de intervalo.
								</p>
							</div>
						}
						color="orange"
					/>
					<ServiceCard
						icon={Info}
						title="Dicas"
						cardDescription="Aqui você vai aprender um pouco mais sobre o Senac e como você pode se destacar."
						description={
							<p>
								O Senac como ambiente profissional, traz diversas oportunidades:
								a maior delas é a socialização. As atividades e experiências
								exigem muita comunicação com colegas e professores, permitindo
								que até mesmo as pessoas mais tímidas possam ser ouvidas. Assim,
								aproveite o Senac para explorar seu lado mais curioso, proativo
								e interessado. Use as atividades para trabalhar em equipe e se
								comunicar com o grupo: compartilhe suas ideias e ouça novas
								perspectivas. <br />
								Lembre-se: Juntos, chegaremos até a Lua.
							</p>
						}
						color="blue"
					/>
					<ServiceCard
						icon={Backpack}
						title="​Venha ser um aprendiz"
						cardDescription="Este espaço é destinado para quem está começando no mercado de trabalho, aqui você irá perceber que não é tão difícil como parece."
						description="No programa de Jovem Aprendiz, você pode desenvolver habilidades valiosas para sua carreira profissional.
						A aprendizagem profissional se destaca como um diferencial no seu currículo então, quem acabou de entrar no mercado de trabalho não pode ficar de fora!
						Na sua rotina, pode ficar tranquilo: o programa foi feito para que você consiga conciliar estudos e trabalho.
						E fica melhor: seu estudo vira dinheiro. Com o seu próprio salário, as possibilidades são infinitas: pode investir, presentear e construir sua própria independência financeira. Sem dúvidas, o fruto do seu trabalho pode te levar longe."
						color="orange"
					/>
					<ServiceCard
						icon={DollarSign}
						title="Meu primeiro salário"
						cardDescription="Aqui você vai aprender tudo sobre seu primeiro salário, tudo o que lhe é descontado e também a como calcular esses descontos."
						description={
							<div className="flex flex-col gap-3">
								<strong>
									Para calcular o seu salario liquido você precisa saber dos
									principais descontos que são aplicados:
								</strong>
								<p>
									<strong>INSS </strong>- é descontado{' '}
									<span className="text-red-500">8%</span> do salário bruto.
								</p>
								<p>
									<strong>FGTS </strong>- desconto de{' '}
									<span className="text-red-500">2%</span> do salário bruto.
								</p>
								<p>
									Vale Transporte - desconto de{' '}
									<span className="text-red-500">6%</span> do salário bruto.
								</p>
								<p>
									<strong>IRRF (Imposto de Renda Retido na Fonte)</strong> -
									desconto de <span className="text-red-500"> 8% </span>
									do salário bruto.{' '}
									<span className="italic">
										Esse depende do salário do Jovem Aprendiz.
									</span>
								</p>
								<p>
									Você tem que saber o seu salário bruto, que é o valor total,
									para poder saber qual será seu salário líquido, que é o valor
									com descontos. Em seguida some os valores dos descontos
									obrigatórios{' '}
									<strong>(INSS, FGTS, vale transporte, etc)</strong>. Depois
									<span className="underline"> subtraia</span> os descontos do
									salário bruto. Por exemplo, se um Jovem Aprendiz recebe um
									salário bruto de <strong>R$ 700</strong> os descontos seriam:
									<br />
									<ul className="text-center">
										<li>
											<strong>INSS:</strong>{' '}
											<span className="text-red-500">8%</span> de R$700,00 ={' '}
											<span className="text-green-500">R$56,00</span>
										</li>
										<li>
											<strong>FGTS:</strong>{' '}
											<span className="text-red-500">2%</span> de R$700,00 ={' '}
											<span className="text-green-500">R$14,00</span>
										</li>
										<li>
											<strong>Vale Transporte:</strong>{' '}
											<span className="text-red-500">6%</span> de R$700,00 ={' '}
											<span className="text-green-500">R$42,00</span>
										</li>
									</ul>
									<p className="pt-4 underline">
										Total de descontos: R$ 56,00 + R$ 14,00 + R$ 42,00 = R$
										112,00 Salário Líquido: R$ 700,00 - R$ 112,00 = R$ 588,00
									</p>
									<br />
									<p>
										Porém, se você não começou a trabalhar desde o inicio do mês
										você terá os dias anteriores não trabalhados{' '}
										<strong>descontados</strong>. Digamos que você começou no
										dia 8/10, no final do mês você terá os dias 1, 2, 3, 4, 5, 6
										e 7 descontados. Para calcular você vai dividir o seu
										salário bruto pelos dias uteis do mês que você começou.
										<br />
										<strong>Exemplo</strong>: R$ 700,00 dividido por 23 (dias do
										mês 10 de 2024)
									</p>
								</p>
							</div>
						}
						color="blue"
					/>
				</div>
			</section>

			<section className="pb-10 mx-auto my-0 md:max-w-2xl lg:max-w-4xl">
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

			<section className="px-8 py-10 bg-darkBlue">
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
								Preencha o formulário abaixo e um de nossos consultores entrará
								em contato.
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
		</>
	)
}
