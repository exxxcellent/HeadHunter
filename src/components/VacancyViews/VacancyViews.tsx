// icons
import { FaEye, FaUserCircle } from "react-icons/fa"
// styles
import styles from "./styles.module.css"

// VacancyHeader
function VacancyViews(): JSX.Element {
    return (
        <>
            <div className={styles.views}>
                <div className={styles.view}>
                    <div className={styles.view_header}>
                        <p>83 человека</p>
                        <FaUserCircle />
                    </div>
                    <div>
                        уже откликнулось
                    </div>
                </div>
                <div className={styles.view}>
                    <div className={styles.view_header}>
                        <p>31 человек</p>
                        <FaEye />
                    </div>
                    <div>
                        сейчас смотрят
                    </div>
                </div>
            </div>
        </>
    )
}

export default VacancyViews