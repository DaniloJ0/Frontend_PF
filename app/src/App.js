import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import DashboardPage from "./pages/dashboard/DashboardPage";
import "./App.css";
import InfoPage from "./pages/informacion/InfoPage.jsx";

function App() {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/informacion" element={<InfoPage/>}/>
          {/* <Route path="/recomendaciones" element={</>}/> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
