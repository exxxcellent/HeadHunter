// react-router-dom
import { Link } from "react-router-dom"
// icons
import { FaCheckCircle, FaHeart, FaRubleSign, FaSuitcase } from "react-icons/fa"
// styles
import styles from "./styles.module.css"

// Activity
function Card(): JSX.Element {
    return (
        <Link to="/vacancy/1"
            className={styles.card}>
            <header className={styles.header}>
                <div className={styles.header_text}>Сейчас просматривают 22 чел.</div>
                <FaHeart className={styles.favorite} />
            </header>
            <main className={styles.main}>
                <h4 className={styles.head}>Middle Frontend Develover (React)</h4>
                <h3 className={styles.cost}>от 270 000 <FaRubleSign className={styles.cost_icon} /></h3>
                <div className={styles.description}>
                    <p>Санкт-Перебург</p>
                    <p>Lesta Games <FaCheckCircle /></p>
                    <p><FaSuitcase /> Опыт от 1 года до 3 лет</p>
                </div>
            </main>
            <footer className={styles.footer}>
                <p className={styles.published}>Опубликовано вчера</p>
                <p className={styles.employerIsActive}>Рабодатель сейчас онлайн</p>
                <button className={styles.button}>Откликнуться</button>
            </footer>
        </Link>
    )
}

export default Card