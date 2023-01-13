import { Route, Routes } from "react-router-dom";
import { Verdensmaalene } from "../../Pages/Verdensmaalene/Verdensmaalene";
import { Delmaalene } from "../../Pages/Delmaalene/Delmaal";
import { Udfordringer } from "../../Pages/Udfordringer/Udfordringer";
import { Kontakt } from "../../Pages/Kontakt/Kontakt";

const AppRouter = () => {
  return (
    <Routes>
      <Route index element={<Verdensmaalene />} />
      <Route path="/Delmaalene" element={<Delmaalene />} />
      <Route path="/Udfordringer" element={<Udfordringer />} />
      <Route path="/Kontakt" element={<Kontakt />} />
    </Routes>
  );
};

export default AppRouter;
