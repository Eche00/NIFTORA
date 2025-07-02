import { BrowserRouter, Route, Routes } from "react-router";
import Container from "./components/Container";
import Home from "./pages/Home";

function App() {
  return (
    <div className=" w-full overflow-x-hidden">
      <BrowserRouter>
      <Routes>
          <Route element={<Container />}>
            <Route path="/" element={<Home />} />
          </Route>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App