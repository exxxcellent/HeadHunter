// styles
import Card from "../Card/Card"
import styles from "./styles.module.css"

// Activity
function ListCards(): JSX.Element {
    return (
        <div className={styles.container}>
            <h2 className={styles.head}>Вакансии для вас</h2>
            <div className={styles.list}>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <button className={styles.button}>Еще 1583 вакансии</button>
        </div>
    )
}

export default ListCards