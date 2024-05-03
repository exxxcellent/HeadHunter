// react-router-dom
import { Route, Routes } from "react-router-dom"
// pages
import MainPage from "./pages/MainPage"
import FavoritePage from "./pages/FavoritePage"
import MessagesPage from "./pages/MessagesPage"
import ProfilePage from "./pages/ProfilePage"
import ErrorPage from "./pages/ErrorPage"
import VacancyPage from "./pages/VacancyPage"
// components
import Navigation from "./components/Navigation/Navigation"

// Application
function App(): JSX.Element {
    return (
        <div className="container">
            <Routes>
                <Route path="/"
                    element={<MainPage />} />
                <Route path="/favorite"
                    element={<FavoritePage />} />
                <Route path="/messages"
                    element={<MessagesPage />} />
                <Route path="/profile"
                    element={<ProfilePage />} />
                <Route path="/vacancy/:id"
                    element={<VacancyPage />} />
                <Route path="*"
                    element={<ErrorPage />} />
            </Routes>
            <Navigation />
        </div>
    )
}

export default App