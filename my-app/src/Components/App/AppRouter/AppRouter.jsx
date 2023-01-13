import { Route, Routes } from "react-router-dom";
import { Verdensmaalene } from "../../Pages/Verdensmaalene/Verdensmaalene";
import { CleanUp } from "../../Pages/CleanUp";

const AppRouter = () => {
  return (
    <Routes>
      <Route index element={<Verdensmaalene />} />
      <Route path="/CleanUp" element={<CleanUp />} />
    </Routes>
  );
};

export default AppRouter;
