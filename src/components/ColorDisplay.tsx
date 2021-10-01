import React from 'react'

import styles from '../styles/ColorDisplay.module.scss'

interface Props {
	color: string
	name: string
}

const ColorDisplay: React.FunctionComponent<Props> = ({
	color,
	name,
}) => (
	<div className={styles.colorDisplay}>
		<span className={styles.colorDisplayColor} style={{ backgroundColor: color }}/>
		<div className={styles.colorDetails}>
			<span>{name}</span>
			<span>{color}</span>
		</div>
	</div>
)

export default ColorDisplay
