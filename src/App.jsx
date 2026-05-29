import Home from "./pages/home.jsx";
import Base from "./pages/layout/base.jsx";
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={
          <Base>
            <Home />
          </Base>}
        />
      </Routes>
    </>
  )
}

export default App
