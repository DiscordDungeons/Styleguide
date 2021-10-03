import { NextPage } from 'next'
import Col from '../../components/layout/Grid/Col'
import Row from '../../components/layout/Grid/Row'
import StylePage from '../../components/misc/StylePage'
import ShadowDisplay from '../../components/ShadowDisplay'


const Shadows: NextPage = () => {
	return (
		<StylePage title={'Shadows | Discord Dungeons Styleguide'}>
			<Row>
				<header>
					<Col lg={6}>
						<h1>Shadows</h1>

						<p>
							wow! Amazing!
						</p>
					</Col>
				</header>
			</Row>
			
			<Row>
				<ShadowDisplay size={'sm'} />
				<ShadowDisplay size={'default'} />
				<ShadowDisplay size={'md'} />
				<ShadowDisplay size={'lg'} />
				<ShadowDisplay size={'xl'} />
				<ShadowDisplay size={'2xl'} />
			</Row>
		</StylePage>
	)
}

export default Shadows
