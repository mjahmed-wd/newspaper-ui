import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import "./assets/styles/styles.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LandingPage from "./pages/Landing/Landing";

const App = () => {

  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}>
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App