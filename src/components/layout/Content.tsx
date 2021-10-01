import React from 'react'

import styles from '../../styles/layout.module.scss'

const Content: React.FunctionComponent = ({
	children,
}) => (
	<div className={styles.content}>
		{children}
	</div>
)

export default Content
