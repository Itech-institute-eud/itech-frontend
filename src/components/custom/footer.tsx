'use client'

import { useEffect, useState } from 'react'

import FacebookLogo from '../../../public/icons/fackbookLogo'
import MainLogo from '../../../public/icons/mainLogo'
import Container from './container'
import Title from './title'
import LinkedInLogo from '../../../public/icons/linkedin'
import InstagramLogo from '../../../public/icons/instagram'
import GithubLogo from '../../../public/icons/github-logo'
import Link from 'next/link'

const Footer = () => {
	const [currentYear, setCurrentYear] = useState(0)

	useEffect(() => {
		setCurrentYear(new Date().getFullYear())
	}, [])

	const links: any = {
		Resources: {
			links: [
				{ label: 'Home', href: '/' },
				{ label: 'About Us', href: '/about' },
				{ label: 'Courses', href: '/courses' },
				{ label: 'I-Tech Certified List', href: '/certificate' },
				{ label: 'I-Tech Solutions', href: '/solutions' },
				{ label: 'Contact Us', href: '/contact' },
			],
			title: 'Resources',
		},
		Social: {
			links: [
				{
					text: 'Follow us on Facebook',
					link: 'https://www.facebook.com/share/1GBUwLpfpM/?mibextid=wwXIfr',
					icon: <FacebookLogo />,
				},
				{
					text: 'Follow us on Instagram',
					link: 'https://www.instagram.com/itech_bangalore/profilecard/?igsh=MWc1dWZlaHhjZHNnbg==',
					icon: <InstagramLogo />,
				},
				{
					text: 'Follow us on Github',
					link: 'https://github.com/itech-institute',
					icon: <GithubLogo className="text-3xl" />,
				},
				{
					text: 'Follow us on Linkedin',
					link: 'https://www.linkedin.com/company/i-tech-institute-of-computer-s/',
					icon: <LinkedInLogo />,
				},
			],
			title: 'Social Media',
		},
		'lower-footer': [
			`@${currentYear} All Rights Reserved. Designed and Developed by I-Tech Institute Of Computers`,
			['Terms of service', 'Privacy Policy', 'Security', 'Sitemap'],
		],
	}

	return (
		<Container className="bg-black">
			<footer className=" bg-black  text-primary-links flex flex-col  lg:py-10">
				<div className="flex justify-between flex-col gap-5 lg:flex-row">
					<div className="flex-1/2 flex items-start">
						<MainLogo />
					</div>
					{/* Resource starts here */}
					<div className="flex-1/2">
						<Title text={links.Resources.title} />
						<div className="my-3 flex flex-col gap-6 list-none cursor-pointer">
							{links['Resources'].links.map((item: any, i: number) => (
								<Link href={item.href} key={i}>
									{item.label}
								</Link>
							))}
						</div>
					</div>
					<div className="flex-1/2">
						<Title text={links.Social.title} />
						<div className="my-3 flex flex-col gap-6 list-none cursor-pointer">
							{links['Social'].links.map((item: any, i: number) => (
								<a target="_blank" className="flex items-center space-x-4" href={item.link} key={i}>
									{item.icon} <span>{item.text}</span>
								</a>
							))}
						</div>
					</div>
				</div>
				<div className="flex flex-col my-5 gap-5 items-center lg:flex-row">
					<div className="flex-1/2 text-center">{links['lower-footer'][0]}</div>
				</div>
			</footer>
		</Container>
	)
}

export default Footer

// width: 1441;
// height: 446;
// gap: 64px;
// padding-top: 48px;
// padding-right: 80px;
// padding-bottom: 48px;
// padding-left: 80px;

// font-family: Inter;
// font-weight: 600;
// font-size: 20px;
// line-height: 20px;
// letter-spacing: 0px;
// text-align: center;

// width: 452.5;
// height: 136;
// gap: 24px;
