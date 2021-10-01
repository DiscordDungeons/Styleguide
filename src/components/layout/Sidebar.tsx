import React from 'react'

import styles from '../../styles/layout.module.scss'

const Sidebar: React.FunctionComponent = ({
	children,
}) => (
	<div className={styles.sidebar}>
		<div className={styles.sidebarContent}>
			{children}
		</div>
	</div>
)

export default Sidebar
