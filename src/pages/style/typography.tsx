import { NextPage } from 'next'
import Col from '../../components/layout/Grid/Col'
import Row from '../../components/layout/Grid/Row'
import StylePage from '../../components/misc/StylePage'
import FontDisplay from '../../components/styleguide/FontDisplay'

const Typography: NextPage = () => {
	return (
		<StylePage title={'Typography | Discord Dungeons Styleguide'}>

			<Row>
				<header>
					<Col lg={6}>
						<h1>Typography</h1>

						<p>
							The Discord Dungeons typography is based on two distinct font families.
							For regular text, we use Lato.
							For "spicy" text we use Futura.
						</p>
					</Col>
				</header>
			</Row>
			<Row>
				<FontDisplay family={'Lato'} />
				<FontDisplay family={'Futura'} />
				<FontDisplay family={'Inter'} />
			</Row>

		</StylePage>
	)
}

export default Typography
