'use client'


interface IMonthFilter {
	month: string
	setMonth: (val: any) => void
}

const MonthFilter = ({ setMonth, month }: IMonthFilter) => {
	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	]

	return (
		<div className="bg-white flex items-center space-x-5 rounded-3xl p-1 text-primary-links">
			{months.map((item, i) => (
				<span
					onClick={() => setMonth(item)}
					key={i}
					className={`
          text-xs
          ${
						month === item
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

export default MonthFilter
