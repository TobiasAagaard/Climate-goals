import "./App.scss";

import { Header } from "./Components/Partials/Header/Header";
import { NavDes } from "./Components/Partials/Navigation/NavDes";
import { Main } from "./Components/Partials/Main/Main";

import { BrowserRouter } from "react-router-dom";
import AppRouter from "./Components/App/AppRouter/AppRouter";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <NavDes />
        <Main>
          <AppRouter />
        </Main>
      </div>
    </BrowserRouter>
  );
}

export default App;
