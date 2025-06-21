export async function GET(request: Request) {
	const { searchParams } = new URL(request.url)
	const page = searchParams.get('page')
	const year = searchParams.get('year')
	const search = searchParams.get('search')

	if (search) {
		const response = await fetch(
			`https://itech-dashboard-app.onrender.com/api/students/searchStudent?search=${search}`
		)
		const data = await response.json()
		return new Response(JSON.stringify(data), {
			status: 200,
			headers: { 'Content-Type': 'application/josn' },
		})
	}

	const response = await fetch(
		`https://itech-dashboard-app.onrender.com/api/students?limit=10&page=${page}&year=${year}&search=${search}`
	)
	const data = await response.json()
	return new Response(JSON.stringify(data), {
		status: 200,
		headers: { 'Content-Type': 'application/josn' },
	})
}
