// components
import VacancySubDesc from "../VacancySubDesc/VacancySubDesc"
import VacancyViews from "../VacancyViews/VacancyViews"
// icons
import { FaRubleSign } from "react-icons/fa"
// styles
import styles from "./styles.module.css"
import VacancyCompany from "../VacancyCompany/VacancyCompany"

// VacancyMain
function VacancyMain(): JSX.Element {
    return (
        <main className={styles.vacancy}>
            <h2 className={styles.title}>Стажер backend </h2>
            <h3 className={styles.cost}>от 50000 <FaRubleSign className={styles.cost_icon} /> на руки</h3>
            <VacancySubDesc />
            <VacancyViews />
            <VacancyCompany />
        </main>
    )
}

export default VacancyMain