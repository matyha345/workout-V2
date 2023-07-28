import { useLocation } from 'react-router-dom'
import Footer from './footer/Footer'
import styles from './Layout.module.scss'
import cn from 'clsx'
import { useCheckToken } from '../../hooks/useCheckToken'

const Layout = ({ customStyle, children, bgImage, backLink = '/home', heading, logout }) => {
	const { pathname } = useLocation()

	useCheckToken()

	return (
		<section
			className={cn(styles.wrapper, { [styles.otherPage]: !!heading })}
			style={{ ...customStyle, backgroundImage: `url(${bgImage})` }}
			
			
		>
			{heading && <h1 className={styles.heading}>{heading}</h1>}

			{logout && <div className={styles.logout}>{logout}</div>}

			{children && <div className={styles.children}>{children}</div>}

			{pathname !== '/auth' && pathname !== '/reg' && pathname !== '/start' && (
				<Footer />
			)}
		</section>
	)
}

export default Layout
