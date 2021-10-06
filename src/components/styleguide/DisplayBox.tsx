
import React from 'react'

import styles from '../../styles/DisplayBox.module.scss'

interface Props {
	title: string
}

const DisplayBox: React.FunctionComponent<Props> = ({
	title,
	children,
}) => (
	<div className={styles.container}>
		<div className={styles.header}>
			<span className={styles.title}>{title}</span>
		</div>
		<div className={styles.content}>
			{children}
		</div>
	</div>
)

export default DisplayBox

