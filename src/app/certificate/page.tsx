'use client'

import Container from '@/components/custom/container'
import Heading from '@/components/custom/heading'
import SearchBar from '@/components/custom/search-bar'
import StudentList from '@/components/custom/student-list'
import YearFilter from '@/components/custom/YearFilter'
import { useState } from 'react'

const page = () => {
	const [year, setYear] = useState(String(new Date().getFullYear()))
	const [page, setPage] = useState(1)
	const [search, setSearch] = useState('')

	return (
		<Container>
			<Heading title={'I-TECH CERTIFIED LIST'} />
			<Heading title={'BRANCH CERTIFIED & Military BATCH (PARA/MEG CENTER/ASC) '} />
			<div className="hidden  w-full md:flex items-center justify-center my-5">
				<YearFilter setYear={setYear} year={year} />
			</div>
			<SearchBar search={search} setSearch={setSearch} />
			<div className="w-full">
				<StudentList year={year} page={page} search={search} onPageChange={setPage} />
			</div>
		</Container>
	)
}

export default page
