import React from 'react'

import styles from '../../styles/layout.module.scss'

const Layout: React.FunctionComponent = ({
	children,
}) => (
	<main className={styles.layout}>
		{children}
	</main>
)

export default Layout
