import { Route, Routes } from "react-router";

import NewNumber from "./pages/NewNumber";
import App from "./App";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="new-number" element={<NewNumber />} />
      </Route>
    </Routes>
  );
}
