import { Link } from 'react-router-dom'
import styles from './Footer.module.scss'

const FooterLink = ({ link, svg, title }) => {
	return (
		<Link className={styles.link} to={link}>
			<div className={styles.svg}>
				<img src={svg} alt='svgIcons' />
			</div>
			<p className={styles.text}>{title}</p>
		</Link>
	)
}
export default FooterLink
