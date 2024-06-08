import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../page"
import { AdminController } from "../page/admin"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Home />} />
                <Route path={'/admin'} element={<AdminController />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router