import { Route, Routes } from "react-router-dom";
import { Start } from "../../Pages/Start";
import { MitCo2 } from "../../Pages/MitCo2";

const AppRouter = () => {
  return (
    <Routes>
      <Route index element={<Start />} />
      <Route path="/MitCo2" element={<MitCo2 />} />
    </Routes>
  );
};

export default AppRouter;
