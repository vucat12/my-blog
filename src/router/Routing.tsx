import routes from "./router";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function Routing() {

  return (
    <BrowserRouter>
      <Routes>
          {routes.map(element => (<Route 
          element={element.content}
          key={element.title}
          path={element.path}
          />))}
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;
