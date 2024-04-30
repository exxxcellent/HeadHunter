// icons
import { FaSearch, FaSlidersH } from "react-icons/fa";
// styles
import styles from "./styles.module.css"

// Search
function Search(): JSX.Element {
    return (
        <header className={styles.header}>
            <div className={styles.search}>
                <FaSearch className={styles.search_icon} />
                <input type="text"
                    placeholder="Должность, ключевые слова"
                    className={styles.search_input} />
            </div>
            <button className={styles.button}>
                <FaSlidersH className={styles.button_icon} />
            </button>
        </header>
    )
}

export default Search