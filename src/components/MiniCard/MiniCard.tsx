// icons
import { FaClock } from "react-icons/fa"
// styles
import styles from "./styles.module.css"

// MiniCard
function MiniCard(): JSX.Element {
    return (
        <div className={styles.card}>
            <FaClock className={styles.icon} />
            <div className={styles.text}>
                <h3 className={styles.head}>Junior React</h3>
                <p className={styles.description}>Без фильтров</p>
            </div>
        </div>
    )
}

export default MiniCard