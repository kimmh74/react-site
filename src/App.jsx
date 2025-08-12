import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
// import { useState } from "react";
import "./App.css";
import "./compo/css/style.css"
import Login from "./compo/Login";
import Home from "./compo/Home";
import Layout from "./compo/Layout";
import Comment from "./compo/Comment";
import CommentList from "./compo/CommentList";
import Day03_0811 from "./compo/Day3_0811";
import App_0811 from "./compo/App_0811";
import Counter from "./compo/Componet/Counter";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h1>React 과제방</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/react-site/" element={<Layout />} />
          <Route index element={<Home />} />
          <Route path="/react-site/login" element={<Login />} />
          <Route path="/react-site/0811" element={<App_0811 />} />
          <Route path="/react-site/0812" element={<App_0812 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;