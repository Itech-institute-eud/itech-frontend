'Use Clinet'

import { useEffect, useState } from 'react'
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table'
import Pagination from './pagination'
import Loading from './loading'
import { useAtom } from 'jotai'
import { studentAtom } from '@/jotai/student-atom'

interface IStudent {
	_id: string
	name: string
	courses: string[]
	armyNo: string
	monthAndYear: string
	totalCertificates: number
}

export interface IResponse {
	data: IStudent[]
	totalPages: number
	currentPage: number
}

const StudentList = ({ year, page, onPageChange }: any) => {
	const [data, setData] = useAtom(studentAtom)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	useEffect(() => {
		const fetchData = async () => {
			const params = new URLSearchParams({
				year,
				page,
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

	if (loading) return <Loading />
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
						data?.data?.map((student: IStudent) => (
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
