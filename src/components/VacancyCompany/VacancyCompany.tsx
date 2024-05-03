// icons
import { FaStar } from "react-icons/fa"
// styles
import styles from "./styles.module.css"

// VacancyCompany
function VacancyCompany(): JSX.Element {
    return (
        <div className={styles.company}>
            <header className={styles.header}>
                <div className={styles.head}>
                    <h4 className={styles.title}>Websovet</h4>
                    <div className={styles.stars}>
                        <FaStar className={styles.star} />
                        <FaStar className={styles.star} />
                        <FaStar className={styles.star} />
                        <FaStar className={styles.star} />
                        <FaStar className={styles.star} />
                    </div>
                </div>
                <img src="#" className={styles.image} />
            </header>
            <main className={styles.main}>
                <p className={styles.city}>Великий новгород</p>
            </main>
        </div>
    )
}

export default VacancyCompany