import { Route, Routes } from "react-router-dom";
import { Start } from "../../Pages/Start";
import { CleanUp } from "../../Pages/CleanUp";

const AppRouter = () => {
  return (
    <Routes>
      <Route index element={<Start />} />
      <Route path="/CleanUp" element={<CleanUp />} />
    </Routes>
  );
};

export default AppRouter;
