import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import NavMenu from "./components/NavMenu";
import { elContent } from "./const";
// import Settings from "./components/Settings";
import { ThemeProvider } from "./context/ThemeContext";
import { LangProvider } from "./context/LangContext.jsx";

import "./App.css";
import Header from "./components/Header/Header";
import Notifications from "./components/Notifications/Notifications";

function App() {
  return (
    <Router>
      <ThemeProvider>
        <LangProvider>
          <Header />
          <Notifications />
          <div className="app">
            <Routes>
              {elContent.map((item, index) => (
                <Route key={index} path={item.link} element={item.el}></Route>
              ))}
            </Routes>
          </div>
        </LangProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
