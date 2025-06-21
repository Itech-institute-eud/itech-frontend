import React from 'react'
import Card from './card'

export interface Course {
	title: string
	description: string
	imagePath: string
}

interface CourseGridProps {
	courses: Course[]
}

const CourseGrid: React.FC<CourseGridProps> = ({ courses }) => {
	return (
		<div className="px-4 py-8 max-w-7xl mx-auto">
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
				{courses.map((course, i) => (
					<Card title={course.title} path={course.imagePath} desc={course.description} key={i} />
				))}
			</div>
		</div>
	)
}

export default CourseGrid
