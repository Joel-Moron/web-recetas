import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";


function App() {

  return (
    <div className=' flex flex-col min-h-screen max-w-screen items-center bg-gray-300'>
      <Header />
      <main className="w-full max-w-[1172px] flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>

      <Footer />
    </div>

  )
}

export default App
