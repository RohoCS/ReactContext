import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavMenu from "./components/NavMenu";
import { elContent } from "./const";
import Settings from "./components/Settings";
import { ThemeProvider } from "./context/ThemeContext";
import { LangProvider } from "./context/LangContext.jsx";

import "./App.css";

function App() {
  return (
    <Router>
      <ThemeProvider>
        <LangProvider>
          <Settings />
          <NavMenu />
          <Routes>
            {elContent.map((item, index) => (
              <Route key={index} path={item.link} element={item.el}></Route>
            ))}
          </Routes>
        </LangProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
