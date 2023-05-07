import {Route, BrowserRouter  as Router, Routes } from "react-router-dom";
import DashboardPage from "./pages/dashboard/DashboardPage";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardPage/>} />
        {/* <Route path="/matricula" element={<Matricula />}/> */}
      </Routes>
     </Router>
  );
}

export default App;
