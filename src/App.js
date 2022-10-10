import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<p>Not found page</p>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
