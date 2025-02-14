import Layout from "./components/Layout";
import { Routes, Route } from "react-router";
import Cocktails from "./pages/Cocktails";
import CocktailDetail from "./pages/CocktailDetail";
import Home from "./pages/Home";
import "./App.css";

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cocktails" element={<Cocktails />} />
          <Route path="/cocktails/:id/:slug" element={<CocktailDetail />} />
        </Routes>
      </Layout>
    </>
  );
};
export default App;
