import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Article } from "./pages/article";
// import { Janken } from "./pages/Janken";

const App = () => {
  return (
    <BrowserRouter>
      <h1>react app</h1>
      {/* 🔽 追加 */}
      <ul>
        <li>
          <Link to="/article">コラムをひく</Link>
        </li>
        <li>
          {/* <Link to="/janken">じゃんけん</Link> */}
        </li>
      </ul>
      <hr />
      <Routes>
        <Route path="/article" element={<Article />} />
        {/* <Route path="/janken" element={<Janken />} /> */}
      </Routes>
    </BrowserRouter>
  );
};
export default App;
