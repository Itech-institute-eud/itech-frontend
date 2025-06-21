import { NextApiRequest } from 'next'

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url)

	let page = searchParams.get('page')

	let year = searchParams.get('year')
	let search = searchParams.get('search')

	const response = await fetch(
		`https://itech-dashboard-app.onrender.com/api/students?limit=10&page=${page}&year=${year}&search=${search}`
	)

	const data = await response.json()

	return new Response(JSON.stringify(data), {
		status: 200,
		headers: { 'Content-Type': 'application/josn' },
	})
}
