import React from 'react'

interface PaginationProps {
	currentPage: number | undefined
	totalPages: number | undefined
	onPageChange: (page: number) => void
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
	if (!currentPage || !totalPages) {
		return
	}

	return (
		<div className="flex justify-center mt-8">
			<nav className="inline-flex items-center space-x-2">
				<button
					onClick={() => onPageChange(currentPage - 1)}
					disabled={currentPage === 1}
					className="px-3 py-1 border rounded-md text-sm disabled:opacity-50"
				>
					Prev
				</button>
				<span className="text-xl font-semibold">{currentPage}</span>
				<button
					onClick={() => onPageChange(currentPage + 1)}
					disabled={currentPage === totalPages}
					className="px-3 py-1 border rounded-md text-sm disabled:opacity-50"
				>
					Next
				</button>
			</nav>
		</div>
	)
}

export default Pagination
