import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Article } from "./pages/article";
// import { InlineStyle } from "./pages/map";
import {SimpleLeaflet} from "./pages/map";
// import { styles } from "./pages/map";
// import { ReactBingmaps } from 'react-bingmap';
// import { Janken } from "./pages/Janken";
// import { Marker, InfoWindow } from "https://www.bing.com/api/maps/mapcontrol?callback=GetMap&";


const App = () => {
  return (
    <BrowserRouter>
      <h1>react app</h1>
      {/* π½ θΏ½ε  */}
      <ul>
        <li>
          <Link to="/article">γ³γ©γ γγ²γ</Link>
        </li>
        <Link to="/map">map</Link>
        <li>
          {/* <Link to="/janken">γγγγγ</Link> */}
        </li>
        {/* <ReactBingmaps 
    bingmapKey = "" > 
  </ReactBingmaps> */}
      </ul>
      <hr />
      <Routes>
      <Route path="/article" element={<Article />} />
        <Route path="/map" element={<InlineStyle />} />
        <SimpleLeaflet />
        {/* <Route path="/janken" element={<Janken />} /> */}
      </Routes>
    </BrowserRouter>
  );
};
export default App;
