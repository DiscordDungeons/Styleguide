import React from 'react'

import styles from '../styles/ShadowDisplay.module.scss'

import Col from './layout/Grid/Col'
import Row from './layout/Grid/Row'

interface Props {
	size: string
}

const ShadowDisplay: React.FunctionComponent<Props> = ({
	size,
}) => (
	<Col xs={12} sm={8} md={6} lg={3}>
		<Row naturalHeight>
			<div className={`${styles.shadowDisplay} shadow-${size}`}></div>
		</Row>
		<Row flexColumn>
			<br />
			<h4>{size}</h4>
		</Row>
	</Col>
)

export default ShadowDisplay
