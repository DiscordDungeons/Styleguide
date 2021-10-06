
import React from 'react'

import styles from '../../styles/FontDisplay.module.scss'

import Col from '../layout/Grid/Col'
import Row from '../layout/Grid/Row'
import DisplayBox from './DisplayBox'

interface Props {
	family: string
}

const FontDisplay: React.FunctionComponent<Props> = ({
	family,
}) => (
	<Row>
		<DisplayBox title={family}>
			<div style={{ fontFamily: family }}>
				<Row>
					<Col>
						<h1>h1: The quick brown fox jumps over the lazy dog.</h1>
						<h2>h2: The quick brown fox jumps over the lazy dog.</h2>
						<h3>h3: The quick brown fox jumps over the lazy dog.</h3>
						<h4>h4: The quick brown fox jumps over the lazy dog.</h4>
						<h5>h5: The quick brown fox jumps over the lazy dog.</h5>
						<h6>h6: The quick brown fox jumps over the lazy dog.</h6>

						<p style={{ maxWidth: 256 }}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Etiam urna felis, fringilla mattis leo id, rhoncus malesuada diam.
						</p>
					</Col>
				</Row>

				<Row>
					<Col>
						<h1 className={'subtext'}>h1: The quick brown fox jumps over the lazy dog.</h1>
						<h2 className={'subtext'}>h2: The quick brown fox jumps over the lazy dog.</h2>
						<h3 className={'subtext'}>h3: The quick brown fox jumps over the lazy dog.</h3>
						<h4 className={'subtext'}>h4: The quick brown fox jumps over the lazy dog.</h4>
						<h5 className={'subtext'}>h5: The quick brown fox jumps over the lazy dog.</h5>
						<h6 className={'subtext'}>h6: The quick brown fox jumps over the lazy dog.</h6>

						<p style={{ maxWidth: 256 }}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Etiam urna felis, fringilla mattis leo id, rhoncus malesuada diam.
						</p>
					</Col>
				</Row>
			</div>
		</DisplayBox>
	</Row>
)

export default FontDisplay

