import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { HomePage } from "./components/HomePage";
import { Header } from "./components/Header";



function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index path="/" element={<HomePage/>} />
        </Routes>
  
      </BrowserRouter>
    </>
  );
}

export default App;
