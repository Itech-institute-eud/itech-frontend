'use client'

import React, { useState } from 'react'
import { IResponse } from './student-list'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { X } from 'lucide-react'

const SearchBar = ({ search, setSearch }: { search: string; setSearch: any }) => {
	const [data, setData] = useState<IResponse | null>(null)
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)

	async function handleOnSubmit(e: React.FormEvent<HTMLFormElement>) {
		try {
			const params = new URLSearchParams({ search })
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

	if (loading) return <p>Loading...</p>
	if (error) return <p>Error: {error}</p>

	return (
		<form
			onSubmit={handleOnSubmit}
			className="w-full mx-auto flex justify-end my-5  items-center space-x-2"
		>
			<div className="relative w-[50%]  md:max-w-[40%]">
				<Input
					value={search}
					onChange={(e: any) => setSearch(e.target.value)}
					className="rounded-md bg-white/50 placeholder:text-white active:outline-none border-none"
					placeholder="Search by your certified name"
				/>
				{search.length >= 1 && (
					<X onClick={() => setSearch('')} className="absolute top-1.5 right-2" />
				)}
			</div>
			<Button className="bg-black text-white" type="submit">
				Go
			</Button>
		</form>
	)
}

export default SearchBar
