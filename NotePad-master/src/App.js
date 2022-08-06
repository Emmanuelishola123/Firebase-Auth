import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ResetPassword from "./pages/ResetPassword";
import { AnimatePresence } from "framer-motion";
import { ContextProvider } from "./context/NoteContext";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <ContextProvider>
        <AnimatePresence exitBeforeEnter>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="reset-password" element={<ResetPassword />} />
            <Route path="*" element='No Page Found...' />
          </Routes>
        </AnimatePresence>
      </ContextProvider>
    </BrowserRouter>
  );
}

export default App;
