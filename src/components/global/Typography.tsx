import classNames from 'classnames'
import React from 'react'

interface TypographyHeaderProps {
	light?: boolean
	subTitle?: boolean
	lightColor?: boolean
}

interface TypographyProps {
	light?: boolean,
	thin?: boolean,
}

export const H1: React.FunctionComponent<TypographyHeaderProps> = ({ children, ...props }) => <h1 className={classNames(props)}>{children}</h1>
export const H2: React.FunctionComponent<TypographyHeaderProps> = ({ children, ...props }) => <h2 className={classNames(props)}>{children}</h2>
export const H3: React.FunctionComponent<TypographyHeaderProps> = ({ children, ...props }) => <h3 className={classNames(props)}>{children}</h3>
export const H4: React.FunctionComponent<TypographyHeaderProps> = ({ children, ...props }) => <h4 className={classNames(props)}>{children}</h4>

export const Text: React.FunctionComponent<TypographyProps> = ({ children, ...props }) => <p className={classNames(props)}>{children}</p>
export const Span: React.FunctionComponent<TypographyProps> = ({ children, ...props }) => <span className={classNames(props)}>{children}</span>
