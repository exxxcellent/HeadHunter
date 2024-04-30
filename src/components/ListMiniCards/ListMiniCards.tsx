// components
import MiniCard from "../MiniCard/MiniCard"
// styles
import styles from "./styles.module.css"

// MiniCard
function ListMiniCards(): JSX.Element {
    return (
        <div className={styles.list}>
            <MiniCard />
            <MiniCard />
            <MiniCard />
            <MiniCard />
        </div>
    )
}

export default ListMiniCards