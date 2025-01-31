import logoImg from './assets/logo.jpeg'
import { Header } from './components/header'
import { Videos } from './components/videos'
import { Contact } from './components/contact'
import { Services } from './components/services'

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

			<Services />
			<Videos />

			<Contact />
		</>
	)
}
