import React from 'react'
import classNames from 'classnames'

interface Props {
	/** Reverse the order of the row's children */
	reverse?: boolean 
	/**  Row children heights match their contents */
	naturalHeight?: boolean
	/**  Arrange row children vertically */
	flexColumn?: boolean
	/**  Align row children to the beginning of the row */
	start?: boolean
	/**  Align row children to the center of the row */
	center?: boolean
	/**  Align row children to the end of the row */
	end?: boolean
	/**  Align row children to the top of the row */
	top?: boolean
	/**  Align row children to the middle of the row */
	middle?: boolean
	/**  Align row children to the bottom of the row */
	bottom?: boolean
	/**  Apply equal space around each row child */
	around?: boolean
	/**  Apply equal space between each row child */
	between?: boolean

	/** Show an element */
	show?: boolean
	/** Show an element on XS and up */
	showXs?: boolean
	/** Show an element on XS only */
	showXsOnly?: boolean
	/** Show an element on SM and up */
	showSm?: boolean
	/** Show an element on SM only */
	showSmOnly?: boolean
	/** Show an element on MD and up */
	showMd?: boolean
	/** Show an element on MD only */
	showMdOnly?: boolean
	/** Show an element on LG and up */
	showLg?: boolean
	/** Show an element on LG only */
	showLgOnly?: boolean
	/** Show an element on XL screens */
	showXl?: boolean

	/** Hide an element */
	hide?: boolean
	/** Hide an element on XS and up */
	hideXs?: boolean
	/** Hide an element on XS only */
	hideXsOnly?: boolean
	/** Hide an element on SM and up */
	hideSm?: boolean
	/** Hide an element on SM only */
	hideSmOnly?: boolean
	/** Hide an element on MD and up */
	hideMd?: boolean
	/** Hide an element on MD only */
	hideMdOnly?: boolean
	/** Hide an element on LG and up */
	hideLg?: boolean
	/** Hide an element on LG only */
	hideLgOnly?: boolean
	/** Hide an element on XL screens */
	hideXl?: boolean	
}

const Row: React.FunctionComponent<Props> = ({
	children,
	reverse,
	naturalHeight,
	flexColumn,
	start,
	center,
	end,
	top,
	middle,
	bottom,
	around,
	between,

	show,
	showXs,
	showXsOnly,
	showSm,
	showSmOnly,
	showMd,
	showMdOnly,
	showLg,
	showLgOnly,
	showXl,

	hide,
	hideXs,
	hideXsOnly,
	hideSm,
	hideSmOnly,
	hideMd,
	hideMdOnly,
	hideLg,
	hideLgOnly,
	hideXl,
}) => (
	<div className={classNames('row', {
		reverse,
		'natural-height': naturalHeight,
		'flex-column': flexColumn,
		start,
		center,
		end,
		top,
		middle,
		bottom,
		around,
		between,

		show,
		'show-xs': showXs,
		'show-sm': showSm,
		'show-md': showMd,
		'show-lg': showLg,
		'show-xl': showXl,

		'show-xs-only': showXsOnly,
		'show-sm-only': showSmOnly,
		'show-md-only': showMdOnly,
		'show-lg-only': showLgOnly,

		hide,
		'hide-xs': hideXs,
		'hide-sm': hideSm,
		'hide-md': hideMd,
		'hide-lg': hideLg,
		'hide-xl': hideXl,

		'hide-xs-only': hideXsOnly,
		'hide-sm-only': hideSmOnly,
		'hide-md-only': hideMdOnly,
		'hide-lg-only': hideLgOnly,
	})}>
		{children}
	</div>
)

export default Row
