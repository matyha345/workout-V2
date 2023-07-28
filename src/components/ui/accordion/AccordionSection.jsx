import styles from './Accordion.module.scss'
import { FiArrowDown } from 'react-icons/fi'
import { FiArrowUp } from 'react-icons/fi'

const AccordionSection = ({
	section,
	isActiveSection,
	setActiveIndex,
	sectionIndex,
	activeSectionsCount
}) => {
	const toggleSection = () => {
		if (activeSectionsCount === 1 && isActiveSection) {
			return
		}

		const nextIndex = isActiveSection ? null : sectionIndex
		setActiveIndex(nextIndex)
	}

	return (
		<div>
			<div className={styles.title} onClick={toggleSection}>
				<div>{section.title}</div>
				<div>
					{isActiveSection ? (
						<FiArrowUp fontSize={20} color='white' />
					) : (
						<FiArrowDown fontSize={20} />
					)}
				</div>
			</div>
			{isActiveSection && <p className={styles.text}>{section.content}</p>}
		</div>
	)
}

export default AccordionSection
