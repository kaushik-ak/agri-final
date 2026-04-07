import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import DigitalKisanPortalPage from "./pages/DigitalKisanPortal/DigitalKisanPortal"
import SoilHealthPage from "./pages/SoilHealth/SoilHealth"
import KisanNewsPage from "./pages/KisanNews/KisanNews"
import SinglePostTemplatePage from "./pages/SinglePostTemplate";
 
function AppRoutes() {
    const location = useLocation();
 
    return (
        <Routes key={location.pathname}>
            <Route path="/" element={<DigitalKisanPortalPage />} />
            <Route path="/DigitalKisanPortalPage" element={<DigitalKisanPortalPage />} />
            <Route path="/SoilHealthPage" element={<SoilHealthPage />} />
            <Route path="/KisanNewsPage" element={<KisanNewsPage />} />
            <Route path="/post/post/:post_id" element={<SinglePostTemplatePage />} />
        </Routes>
    );
}
 
function App() {
    return (
        <Router>
            <div className="app">
                <AppRoutes />
            </div>
        </Router>
    );
}
 
export default App;
