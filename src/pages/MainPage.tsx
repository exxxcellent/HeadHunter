// components
import Activity from "../components/Activity/Activity"
import ListCards from "../components/ListCards/ListCards"
import ListMiniCards from "../components/ListMiniCards/ListMiniCards"
import Search from "../components/Search/Search"

// Main page
function MainPage(): JSX.Element {
    return (
        <>
            <Search />
            <Activity />
            <ListMiniCards />
            <ListCards />
        </>
    )
}

export default MainPage