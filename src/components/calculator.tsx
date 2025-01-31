import { type FormEvent, useState } from 'react'
import { X } from 'lucide-react'
import * as Dialog from '@radix-ui/react-dialog'
import { NumericFormat } from 'react-number-format'

interface Result {
	inss: number
	fgts: number
	transportationAllowance: number
	irrf: number
	netSalary: number
}

export function Calculator() {
	const [salary, setSalary] = useState<string>('')
	const [result, setResult] = useState<Result | null>(null)

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault()

		const salaryValue = Number.parseFloat(
			salary.replace('R$', '').replace('.', '').replace(',', '.'),
		)

		const inss = salaryValue * 0.08
		const fgts = salaryValue * 0.02
		const transportationAllowance = salaryValue * 0.06
		const irrf = salaryValue * 0.08

		const netSalary =
			salaryValue - (inss + fgts + transportationAllowance + irrf)

		// Definindo os resultados
		setResult({
			inss,
			fgts,
			transportationAllowance,
			irrf,
			netSalary,
		})
	}

	const formatCurrency = (value: number): string => {
		return value
			.toLocaleString('pt-BR', {
				style: 'currency',
				currency: 'BRL',
				minimumFractionDigits: 2,
				maximumFractionDigits: 2,
			})
			.replace('R$', 'R$')
	}

	const handleClose = () => {
		setSalary('')
		setResult(null)
	}

	return (
		<Dialog.Root onOpenChange={handleClose}>
			<Dialog.Trigger asChild>
				<button
					type="button"
					className="py-3 text-white rounded bg-lightBlue blueButton hover:font-bold"
				>
					Calcule seu salário
				</button>
			</Dialog.Trigger>

			<Dialog.Portal>
				<Dialog.Overlay className="fixed inset-0 bg-blackA6 data-[state=open]:animate-overlayShow" />
				<Dialog.Content className="fixed left-1/2 top-1/2 w-80 md:w-10/12 max-w-[640px] max-h-[640px] overflow-y-auto -translate-x-1/2 -translate-y-1/2 rounded-md bg-gray1 p-[25px] shadow-[var(--shadow-6)] focus:outline-none data-[state=open]:animate-contentShow">
					<Dialog.Title className="m-0 text-[17px] font-medium text-mauve12">
						Calcule seu salário
					</Dialog.Title>
					<Dialog.Description className="mb-5 mt-2.5 text-[15px] leading-normal text-mauve11 whitespace-pre-line">
						<form onSubmit={handleSubmit} className="flex items-center gap-4">
							<NumericFormat
								value={salary}
								onValueChange={(values) => setSalary(values.value)}
								type="text"
								placeholder="Informe seu salário bruto"
								className="w-full p-2 border rounded"
								thousandSeparator="."
								decimalSeparator=","
								prefix="R$"
								allowNegative={false}
							/>
							<button
								type="submit"
								className="px-4 py-2 font-semibold text-center text-white rounded bg-lightBlue"
							>
								Ok
							</button>
						</form>

						{result && (
							<div className="mt-4">
								<p>
									<strong>INSS:</strong> {formatCurrency(result.inss)}
								</p>
								<p>
									<strong>FGTS:</strong> {formatCurrency(result.fgts)}
								</p>
								<p>
									<strong>IRRF:</strong> {formatCurrency(result.irrf)}
								</p>
								<p>
									<strong>Vale Transporte:</strong>
									{formatCurrency(result.transportationAllowance)}
								</p>
								<br />
								<p>
									<strong>Salário Líquido:</strong>{' '}
									{formatCurrency(result.netSalary)}
								</p>
							</div>
						)}
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
	)
}
