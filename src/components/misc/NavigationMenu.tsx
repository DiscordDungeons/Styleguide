import { Navigation } from 'react-minimal-side-navigation'
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css'

import { useRouter } from 'next/router'
import React from 'react'

const NavigationMenu: React.FunctionComponent = () => {
	const router = useRouter()

	console.log('router', router)

	return (
		<Navigation
			activeItemId={router.pathname}
			onSelect={({ itemId }) => {
				router.push(itemId)
			}}
			items={[
				{
					title: 'Style',
					itemId: '',
					subNav: [
						{
							title: 'Colors',
							itemId: '/style/colors',
						},
						{
							title: 'Typography',
							itemId: '/style/typography',
						},
						{
							title: 'Icons',
							itemId: '/style/icons',
						},
					],
				},
			]}
		/>
	)
}

export default NavigationMenu
