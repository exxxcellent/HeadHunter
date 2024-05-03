// react-router-dom
import { Link } from "react-router-dom"
// icons
import { FaArrowLeft, FaEyeSlash, FaHeart, FaShare } from "react-icons/fa"
// styles
import styles from "./styles.module.css"

// VacancyHeader
function VacancyHeader(): JSX.Element {
    return (
        <header className={styles.header}>
            <Link to="/" className={styles.icon}>
                <FaArrowLeft className={styles.link_icon} />
            </Link>
            <div className={styles.controls}>
                <FaEyeSlash />
                <FaShare />
                <FaHeart />
            </div>
        </header>
    )
}

export default VacancyHeader