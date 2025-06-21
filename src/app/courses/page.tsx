import CourseGrid from '@/components/custom/course-grid'
import Heading from '@/components/custom/heading'
import {
	AICourses,
	DataAnalytics,
	DevelopmentCourses,
	ProgrammingCourses,
	SoftwareCourses,
	UIUXCourses,
} from '@/data'

import React from 'react'

const page = () => {
	return (
		<main>
			<Heading title={'Programming  Courses'} />
			<CourseGrid courses={ProgrammingCourses} />
			<Heading title={'Software Courses'} />
			<CourseGrid courses={SoftwareCourses} />
			<Heading title={'Data Analytic Courses'} />
			<CourseGrid courses={DataAnalytics} />
			<Heading title={'Development Courses'} />
			<CourseGrid courses={DevelopmentCourses} />
			<Heading title={'UI/UX Courses'} />
			<CourseGrid courses={UIUXCourses} />
			<Heading title={'Artificial inteligence Courses'} />
			<CourseGrid courses={AICourses} />
		</main>
	)
}

export default page
