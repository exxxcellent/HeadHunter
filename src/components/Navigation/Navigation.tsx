// react-router-dom
import { NavLink } from "react-router-dom"
// icons
import { FaComment, FaHeart, FaSearch, FaUser } from "react-icons/fa"
// styles
import styles from "./styles.module.css"

// Navigation
function Navigation(): JSX.Element {
    return (
        <nav className={styles.nav}>
            <NavLink to="/"
                className={styles.link}>
                <FaSearch />
                <span>Поиск</span>
            </NavLink>
            <NavLink to="favorite"
                className={styles.link}>
                <FaHeart />
                <span>Избранное</span>
            </NavLink>
            <NavLink to="/messages"
                className={styles.link}>
                <FaComment />
                <span>Сообщения</span>
            </NavLink>
            <NavLink to="/profile"
                className={styles.link}>
                <FaUser />
                <span>Профиль</span>
            </NavLink>
        </nav>
    )
}

export default Navigation