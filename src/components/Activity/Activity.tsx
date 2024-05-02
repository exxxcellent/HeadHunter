// icons
import { FaBurn } from "react-icons/fa"
// styles
import styles from "./styles.module.css"

// Activity
function Activity(): JSX.Element {
    return (
        <div className={styles.activity}>
            <header className={styles.header}>
                <div className={styles.head}>
                    <FaBurn className={styles.head_icon} />
                    <span className={styles.text}>Ваша активность</span>
                </div>
                <div>
                    0%
                </div>
            </header>
            <input type="range"
                className={styles.range}
                value={50}
            />
        </div>
    )
}

export default Activity