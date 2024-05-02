// react-router-dom
import { Route, Routes } from "react-router-dom"
// pages
import MainPage from "./pages/MainPage"
// components
import Navigation from "./components/Navigation/Navigation"

// Application
function App(): JSX.Element {
    return (
        <div className="container">
            <Routes>
                <Route path="/" element={<MainPage />} />
            </Routes>
            <Navigation />
        </div>
    )
}

export default App