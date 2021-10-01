import { NextPage } from 'next'
import StylePage from '../../components/misc/StylePage'

const Typography: NextPage = () => {
	return (
		<StylePage title={'Typography | Discord Dungeons Styleguide'}>
			Typography to use
			<hr />
			Lato
			

			<h1>The quick brown fox jumps over the lazy dog.</h1>
			<h2>The quick brown fox jumps over the lazy dog.</h2>
			<h3>The quick brown fox jumps over the lazy dog.</h3>
			<h4>The quick brown fox jumps over the lazy dog.</h4>
			<h5>The quick brown fox jumps over the lazy dog.</h5>
			<h6>The quick brown fox jumps over the lazy dog.</h6>

			<hr />

			<div style={{ fontFamily:'Futura' }}>
				Futura

				<h1>The quick brown fox jumps over the lazy dog.</h1>
				<h2>The quick brown fox jumps over the lazy dog.</h2>
				<h3>The quick brown fox jumps over the lazy dog.</h3>
				<h4>The quick brown fox jumps over the lazy dog.</h4>
				<h5>The quick brown fox jumps over the lazy dog.</h5>
				<h6>The quick brown fox jumps over the lazy dog.</h6>
			</div>

			<hr />

			<div style={{ fontFamily:'Helvetica' }}>
				Helvetica

				<h1>The quick brown fox jumps over the lazy dog.</h1>
				<h2>The quick brown fox jumps over the lazy dog.</h2>
				<h3>The quick brown fox jumps over the lazy dog.</h3>
				<h4>The quick brown fox jumps over the lazy dog.</h4>
				<h5>The quick brown fox jumps over the lazy dog.</h5>
				<h6>The quick brown fox jumps over the lazy dog.</h6>
			</div>

			<div style={{ fontFamily:'Comic Sans MS' }}>
				Comic Sans

				<h1>The quick brown fox jumps over the lazy dog.</h1>
				<h2>The quick brown fox jumps over the lazy dog.</h2>
				<h3>The quick brown fox jumps over the lazy dog.</h3>
				<h4>The quick brown fox jumps over the lazy dog.</h4>
				<h5>The quick brown fox jumps over the lazy dog.</h5>
				<h6>The quick brown fox jumps over the lazy dog.</h6>
			</div>
		</StylePage>
	)
}

export default Typography
