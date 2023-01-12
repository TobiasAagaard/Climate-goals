import "./App.scss";

import { Header } from "./Components/Partials/Header/Header";
import {Nav, NavArr} from "./Components/Partials/Navigation/Navbar"
import { Main } from "./Components/Partials/Main/Main";

import { BrowserRouter, Form } from "react-router-dom";
import AppRouter from "./Components/App/AppRouter/AppRouter";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Nav data={NavArr} />
        <Main>
          <AppRouter />
        </Main>
      </div>
    </BrowserRouter>
  );
}

export default App;
