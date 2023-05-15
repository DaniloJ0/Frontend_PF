import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import DashboardPage from "./pages/dashboard/DashboardPage";
import "./App.css";
import InfoPage from "./pages/informacion/InfoPage.jsx";
import Sugerencias from "./pages/sugerencias/Sugerencias";
import OtrosLugares from "./pages/lugares/OtrosLugares";

function App() {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/informacion" element={<InfoPage/>}/>
          <Route path="/sugerencias" element={<Sugerencias/>}/>
          <Route path="/otroslugares" element={<OtrosLugares />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
