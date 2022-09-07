import Head from 'next/head'
import PropTypes from 'prop-types'
import { SSRProvider } from 'react-bootstrap'

function Layout({ children }) {
	return (
		<>
			<Head>
				<title>Next JS Template</title>
				<meta name='description' content='Description of simple Next JS template' />
			</Head>
			<SSRProvider>
				<main>{children}</main>
			</SSRProvider>
		</>
	)
}

Layout.propTypes = {
	children: PropTypes.any
}

export default Layout
