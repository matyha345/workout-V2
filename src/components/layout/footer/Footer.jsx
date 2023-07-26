import styles from './Footer.module.scss'

import { menu } from './menu.data'
import FooterLink from './FooterLink'
const Footer = () => {
	return (
		<section className={styles.wrapper}>
			<ul className={styles.content}>
				{menu.map((item, index) => (
					<div key={`_link_${index}`}>
						<FooterLink
							title={item.title}
							link={item.link}
							svg={item.svg}
						/>
					</div>
				))}
			</ul>
		</section>
	)
}

export default Footer
