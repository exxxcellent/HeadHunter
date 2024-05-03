// styles
import styles from "./styles.module.css"

// VacancyHeader
function VacancySubDesc(): JSX.Element {
    return (
        <>
            <div className={styles.desc}>
                <p className={styles.desc_el}>Требуемый опыт: нет опыта</p>
                <p className={styles.desc_el}>Стажировка, удаленная работа</p>
                <p className={styles.desc_el}>Доступно для соискателей с инвалидностью</p>
            </div>
        </>
    )
}

export default VacancySubDesc