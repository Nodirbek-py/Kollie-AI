import { Route, Routes } from "react-router";

import NewNumber from "./pages/NewNumber";
import Identity from "./pages/Identity";
import RIS from "./pages/RIS";
import App from "./App";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="new-number" element={<NewNumber />} />
        <Route path="new-number/identity-type" element={<Identity />} />
        <Route path="new-number/ris-form" element={<RIS />} />
      </Route>
    </Routes>
  );
}
