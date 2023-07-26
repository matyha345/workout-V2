import { useProfile } from "../useProfile"
import styles from './Statistics.module.scss'

const Statistics = () => {

    const {data} = useProfile()

    return <div className={styles.wrapper}>
        {data?.statistics?.map(statistics => (
            <div className={styles.count} key={statistics.label}>
                <div className={styles.heading}>{statistics.label}</div>
                <div className={styles.number}>{statistics.value}</div>
            </div>
        ))}
    </div>
}
export default Statistics