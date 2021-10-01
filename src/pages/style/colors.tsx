import { NextPage } from 'next'
import ColorDisplay from '../../components/ColorDisplay'
import StylePage from '../../components/misc/StylePage'

const Colors: NextPage = () => {
	return (
		<StylePage title={'Colors | Discord Dungeons Styleguide'}>
			Colors to use

			<ColorDisplay color="#70DBFF" name='Baby Blue'/>
		</StylePage>
	)
}

export default Colors
