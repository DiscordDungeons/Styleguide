import { NextPage } from 'next'
import React from 'react'
import Col from '../../components/layout/Grid/Col'
import Row from '../../components/layout/Grid/Row'
import StylePage from '../../components/misc/StylePage'

const GridBox: React.FunctionComponent = ({
	children,
}) => (
	<div style={{
		backgroundColor: '#f4f6f7',
		height: 32,
		textAlign: 'center',
		lineHeight: '32px',
	}}>
		{children}
	</div>
)

const Grid: NextPage = () => {
	return (
		<StylePage title={'Grid | Discord Dungeons Styleguide'}>
			<Row>
				<header>
					<Col lg={6}>
						<h1>Grid</h1>

						<p>
							The grid requires a containing element to wrap site contents and house our grid system.
							The grid container is a fluid width, with a max-width of 1920px (our most common desktop resolution) and min-width of 1024px.
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
						{[...Array(12)].map(() => (
							<Col xs={1} sm={1} md={1} lg={1} xl={1}>
								<GridBox>
								.col-1
								</GridBox>
							</Col>
						))}
					</Row>

					<Row>
						{[...Array(4)].map(() => (
							<Col xs={3} sm={3} md={3} lg={3} xl={3}>
								<GridBox>
									.col-3
								</GridBox>
							</Col>
						))}
					</Row>

					<Row>
						{[...Array(3)].map(() => (
							<Col xs={4} sm={4} md={4} lg={4} xl={4}>
								<GridBox>
									.col-4
								</GridBox>
							</Col>
						))}
					</Row>

					<Row>
						<Col xs={6} sm={6} md={6} lg={6} xl={6}>
							<GridBox>
								.col-6
							</GridBox>
						</Col>

						<Col xs={6} sm={6} md={6} lg={6} xl={6}>
							<GridBox>
								.col-6
							</GridBox>
						</Col>
					</Row>

					<Row>
						<Col xs={4} sm={4} md={4} lg={4} xl={4}>
							<GridBox>
								.col-4
							</GridBox>
						</Col>
						
						<Col xs={8} sm={8} md={8} lg={8} xl={8}>
							<GridBox>
								.col-8
							</GridBox>
						</Col>
					</Row>
				</Col>
			</Row>

			<Row>
				<Col>
					<Row>
						<Col xs={12} sm={8} md={6} lg={3}>
							<h2>Column Offset</h2>
						</Col>
					</Row>
				
					<Row>
						<Row>
							<Col xs={6} sm={6} md={6} lg={6} xl={6} xsOffset={4}>
								<GridBox>
							.col-6.offset-4
								</GridBox>
							</Col>
						</Row>

						<Row>
							<Col xs={4} sm={4} md={4} lg={4} xl={4} xsOffset={3}>
								<GridBox>
							.col-4.offset-3
								</GridBox>
							</Col>

							<Col xs={4} sm={4} md={4} lg={4} xl={4}>
								<GridBox>
							.col-4
								</GridBox>
							</Col>
						</Row>

						<Row>
							<Col xs={6} sm={6} md={6} lg={6} xl={6} xsOffset={4}>
								<GridBox>
							.col-6.offset-4
								</GridBox>
							</Col>
						</Row>
					</Row>
				</Col>
			</Row>
		</StylePage>
	)
}

export default Grid
