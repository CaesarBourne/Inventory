import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Components/Layout/Layout";
import ResLayout from "./Components/Layout/ResLayout";
import SingleRes from "./Components/SingleResource/SingleRes";
import Home from "./Pages/Home/Home";
import ManageTypes from "./Pages/ManageTypes/ManageTypes";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="mtypes" element={<ManageTypes />} />
            <Route path="types" element={<ResLayout />}>
              <Route path=":type" element={<SingleRes />} />
            </Route>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
