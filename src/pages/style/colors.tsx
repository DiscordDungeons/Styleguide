import { NextPage } from 'next'
import ColorDisplay from '../../components/ColorDisplay'
import Col from '../../components/layout/Grid/Col'
import Row from '../../components/layout/Grid/Row'
import StylePage from '../../components/misc/StylePage'

const Colors: NextPage = () => {
	return (
		<StylePage title={'Colors | Discord Dungeons Styleguide'}>
			<Row>
				<header>
					<Col lg={6}>
						<h1>Colors</h1>

						<p>
							The Discord Dungeons color palette consists of primary and charting colors.
							Discord Dungeons Blue should be used as a primary color.
							Our charting colors map to specific events for statistics and graphs.
						</p>
					</Col>
				</header>
			</Row>
			
			<Row>
				<Col>
					<Row>
						<Col xs={12} sm={8} md={6} lg={3}>
							<h2>Primary</h2>
						</Col>
					</Row>
					<Row>

						<ColorDisplay color="#4D9DE0" name='DRPG Light Blue'/>
						<ColorDisplay color="#495BB4" name='DRPG Dark Blue' />
						<ColorDisplay color="#3B4255" name='Independence'/>
						<ColorDisplay color="#3C9E94" name='Pine Green'/>
						<ColorDisplay color="#F3F7F9" name='Off White'/>

						<ColorDisplay color="#F8F9FA" name='Cultured'/>
						<ColorDisplay color="#E1E4E8" name='Gainsboro'/>
						<ColorDisplay color="#2F3A47" name='Dark grey'/>

					</Row>
				</Col>
			</Row>

			<Row>
				<Col>
					<Row>
						<Col xs={12} sm={8} md={6} lg={3}>
							<h2>Charting</h2>
						</Col>
					</Row>
					<Row>
						<ColorDisplay color="#E93541" name="Imperial Red" />
						<ColorDisplay color="#FFA62B" name="Orange" />
						<ColorDisplay color="#FFDD1F" name="Yellow" />

						<ColorDisplay color="#469B46" name="May Green" />
						<ColorDisplay color="#55B455" name="Bud Green" />
						<ColorDisplay color="#71C171" name="Mantis" />
					</Row>
				</Col>
			</Row>

			
		</StylePage>
	)
}

export default Colors
