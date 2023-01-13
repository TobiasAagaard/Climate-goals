import "./App.scss";

import { Header } from "./Components/Partials/Header/Header";
import { Navbar, NavArr } from "./Components/Partials/Navigation/Navbar";
import { Main } from "./Components/Partials/Main/Main";
import { Footer } from "./Components/Partials/Footer/Footer";

import { BrowserRouter } from "react-router-dom";
import AppRouter from "./Components/App/AppRouter/AppRouter";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Navbar data={NavArr} />
        <Main>
          <AppRouter />
        </Main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
