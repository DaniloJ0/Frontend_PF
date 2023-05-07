import "./App.css";
import Main from "./components/main/Main";
import "./components/sidebar/SideBar.jsx"
import SideBar from "./components/sidebar/SideBar.jsx";
function App() {
  return (
    <>
      <div className="container">
        <SideBar />
        <Main />
      </div>
    </>
  );
}

export default App;
