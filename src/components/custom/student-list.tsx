'Use Clinet'

import { useEffect, useState } from 'react'

import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table'
import Pagination from './pagination'

interface IStudent {
	_id: string
	name: string
	courses: string[] // Replace `any` with a specific type if you know the structure of the course objects
	armyNo: string
	monthAndYear: string // ISO date string (e.g., '2025-01-30')
	email: string
	totalCertificates: number
}

export interface IResponse {
	data: IStudent[]
	totalPages: number
	currentPage: number
}

const StudentList = ({ year, page, search, onPageChange }: any) => {
	const [data, setData] = useState<IResponse | null>(null) // Store the fetched data
	const [loading, setLoading] = useState(true) // Track loading state
	const [error, setError] = useState(null) // Track any error

	useEffect(() => {
		const fetchData = async () => {
			const params = new URLSearchParams({
				year,
				page,
				search,
			})

			try {
				setLoading(true)
				const res = await fetch(`/api/students?${params.toString()}`)
				const json = await res.json()
				setData(json)
				setLoading(false)
			} catch (error: any) {
				setError(error.messgae)
				setLoading(false)
				console.error('Error fetching data:', error)
			}
		}
		fetchData()
	}, [year, page])

	if (loading) return <p>Loading...</p>
	if (error) return <p>Error: {error}</p>

	return (
		<>
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead className="w-[100px]">ID</TableHead>
						<TableHead>Name</TableHead>
						<TableHead>Army No</TableHead>
						<TableHead>Date</TableHead>
						<TableHead>Courses</TableHead>
						<TableHead className="text-right">Total Certificates</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{Array.isArray(data?.data) &&
						data.data?.map((student: IStudent) => (
							<TableRow key={student._id}>
								<TableCell className="font-medium">{student._id}</TableCell>
								<TableCell>{student.name}</TableCell>
								<TableCell>{student.armyNo || '-'}</TableCell>
								<TableCell>{student.monthAndYear}</TableCell>
								<TableCell>
									<ol>
										{student.courses.map((item: string, i: number) => (
											<li className="uppercase" key={i}>
												{item}
											</li>
										))}
									</ol>
								</TableCell>
								<TableCell className="text-right">{student.totalCertificates}</TableCell>
							</TableRow>
						))}
				</TableBody>
			</Table>
			<Pagination
				totalPages={data?.totalPages && data?.totalPages}
				currentPage={data?.currentPage && data?.currentPage}
				onPageChange={onPageChange}
			/>
		</>
	)
}

export default StudentList
