import React from 'react'
import classNames from 'classnames'

type NumberAttr =
  | number
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '11'
  | '12';

type ColSize = boolean | 'auto' | NumberAttr

interface Props {
	/** The number of columns to span on extra small devices */
	xs?: ColSize
	/** The number of columns to span on small devices */
	sm?: ColSize
	/** The number of columns to span on medium devices */
	md?: ColSize
	/** The number of columns to span on large devices */
	lg?: ColSize
	/** The number of columns to span on extra large devices */
	xl?: ColSize

	/**  Offset by a number width on XS and up */
	xsOffset?: ColSize
	/**  Offset by a number width on SM and up */
	smOffset?: ColSize
	/**  Offset by a number width on MD and up */
	mdOffset?: ColSize
	/**  Offset by a number width on LG and up */
	lgOffset?: ColSize
	/**  Offset by a number width on XL and up */
	xlOffset?: ColSize
	/**  Make a column first in order within a row */
	first?: boolean

	/**  Make a column first in order on XS and up */
	firstXs?: boolean
	/**  Make a column first in order on SM and up */
	firstSm?: boolean
	/**  Make a column first in order on MD and up */
	firstMd?: boolean
	/**  Make a column first in order on LG and up */
	firstLg?: boolean
	/**  Make a column first in order on XL and up */
	firstXl?: boolean
	/**  Make a column last in order on XS and up */
	
	last?: boolean
	/**  Make a column last in order on XS and up */
	lastXs?: boolean
	/**  Make a column last in order on SM and up */
	lastSm?: boolean
	/**  Make a column last in order on MD and up */
	lastMd?: boolean
	/**  Make a column last in order on LG and up */
	lastLg?: boolean
	/**  Make a column last in order on XL and up */
	lastXl?: boolean

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

const Col: React.FunctionComponent<Props> = ({
	children,

	xs,
	sm,
	md,
	lg,
	xl,

	xsOffset,
	smOffset,
	mdOffset,
	lgOffset,
	xlOffset,
	first,

	firstXs,
	firstSm,
	firstMd,
	firstLg,
	firstXl,

	last,
	lastXs,
	lastSm,
	lastMd,
	lastLg,
	lastXl,

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
	<div className={classNames('col', {
		'col-xs': xs === 'auto',
		'col-sm': sm === 'auto',
		'col-md': md === 'auto',
		'col-lg': lg === 'auto',
		'col-xl': xl === 'auto',

		[`col-xs-${xs ?? ''}`]: typeof xs === 'number',
		[`col-sm-${sm ?? ''}`]: typeof sm === 'number',
		[`col-md-${md ?? ''}`]: typeof md === 'number',
		[`col-lg-${lg ?? ''}`]: typeof lg === 'number',
		[`col-xl-${xl ?? ''}`]: typeof xl === 'number',

		[`col-xs-offset-${xsOffset ?? ''}`]: typeof xsOffset === 'number',
		[`col-sm-offset-${smOffset ?? ''}`]: typeof smOffset === 'number',
		[`col-md-offset-${mdOffset ?? ''}`]: typeof mdOffset === 'number',
		[`col-lg-offset-${lgOffset ?? ''}`]: typeof lgOffset === 'number',
		[`col-xl-offset-${xlOffset ?? ''}`]: typeof xlOffset === 'number',

		first,
		'first-xs': firstXs,
		'first-sm': firstSm,
		'first-md': firstMd,
		'first-lg': firstLg,
		'first-xl': firstXl,

		last,
		'last-xs': lastXs,
		'last-sm': lastSm,
		'last-md': lastMd,
		'last-lg': lastLg,
		'last-xl': lastXl,

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

export default Col
