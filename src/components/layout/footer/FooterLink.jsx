import { Link, useLocation } from 'react-router-dom'
import styles from './Footer.module.scss'
import cn from 'clsx'


const FooterLink = ({ link, svg, title }) => {
	const location = useLocation()

	const isActive = location.pathname === link

	return (
		<Link
			className={cn(styles.link, {
				[styles.active]: isActive
			})}
			to={link}
		>
			<div className={styles.svg}>
				<img width={40} src={svg} alt='svgIcons' />
			</div>
			<p className={styles.text}>{title}</p>
		</Link>
	)
}
export default FooterLink
