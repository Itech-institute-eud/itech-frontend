'use client'

interface IYearFilterProps {
	year: string
	setYear: (val: string) => void
}

function generateYearsFrom2020(): string[] {
	const currentYear = new Date().getFullYear()
	const years: string[] = []
	for (let year = 2020; year <= currentYear; year++) {
		years.push(String(year))
	}
	return years
}

const YearFilter = ({ setYear, year }: IYearFilterProps) => {
	const years = generateYearsFrom2020()
	return (
		<div className="bg-white flex items-center space-x-5 rounded-3xl p-1 text-primary-links">
			{years.map((item, i) => (
				<span
					onClick={() => setYear(item)}
					key={i}
					className={`
            text-xs
            ${
							year === item
								? 'bg-primary-desc text-white px-3 py-1 rounded-2xl'
								: 'text-xs px-3 cursor-pointer transition-colors'
						}
            `}
				>
					{item}
				</span>
			))}
		</div>
	)
}

export default YearFilter
