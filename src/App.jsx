import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Index from "@/page/index";
import Home from "@/components/Home";

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Index />} />
      <Route path="/home" exact element={<Home />} />
    </Routes>
  );
}

export default App;
