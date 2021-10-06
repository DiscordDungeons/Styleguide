import React from 'react'

import styles from '../styles/ColorDisplay.module.scss'

import Col from './layout/Grid/Col'
import Row from './layout/Grid/Row'

interface Props {
	color: string
	name: string
}

const ColorDisplay: React.FunctionComponent<Props> = ({
	color,
	name,
}) => (
	<Col xs={12} sm={8} md={6} lg={3}>
		<Row naturalHeight>
			<div className={styles.color} style={{ backgroundColor: color }}></div>
		</Row>
		<Row flexColumn>
			<br />
			<h5>{name}</h5>
			<p>{color}</p>
		</Row>
	</Col>
)

export default ColorDisplay
