import { useRouter } from 'next/router'
import React from 'react'
import { NextPage } from 'next'
import Head from 'next/head'
import Sidebar from '../layout/Sidebar'
import Layout from '../layout/Layout'
import Content from '../layout/Content'
import Image from 'next/image'
import NavigationMenu from './NavigationMenu'
import logo from '../../../public/logo.png'

interface StylePageProps {
	title?: string
}

const StylePage: NextPage<StylePageProps> = ({
	title,
	children,
}) => {
	const router = useRouter()

	console.log('router', router)

	return (
		<div>
			<Head>
				<title>{title}</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Layout>
				<Sidebar>
					<div className="center">
						<span className="mx-2 text-2xl font-semibold text-black">
							<Image src={logo} />
						</span>
					</div>

					<NavigationMenu />
				</Sidebar>
				<Content>
					{children}
				</Content>
			</Layout>
		</div>
	)
}

export default StylePage