import { useState } from 'react'
import styles from './accordion.module.scss'
import AccordionSection from './AccordionSection'

const Accordion = ({ sections }) => {
	const [activeIndex, setActiveIndex] = useState(0)

	const activeSectionsCount = sections.reduce(
		(count, section, index) => (index === activeIndex ? count + 1 : count),
		0
	)

	return (
		<div className={styles.wrapper}>
			{sections.map((section, index) => (
				<AccordionSection
					section={section}
					key={`_map_${index}`}
					isActiveSection={index === activeIndex}
					setActiveIndex={setActiveIndex}
					sectionIndex={index}
					activeSectionsCount={activeSectionsCount}
				/>
			))}
		</div>
	)
}

export default Accordion
