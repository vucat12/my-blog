import routes from "./router";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../common-components/Footer";

function Routing() {

  return (
    <BrowserRouter>
      <Routes>
          {routes.map(element => (<Route 
          element={<div className="min-height-70vh">{element.content}</div>}
          key={element.title}
          path={element.path}
          />))}
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default Routing;
