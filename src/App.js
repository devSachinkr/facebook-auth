import FacebookLogin from "./components/facebook-login";
import Header from "./components/header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import PageInsights from "./components/page-insights";
const App = () => {

  return (
    
    <div className="">
      <Header />
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<FacebookLogin/>}/>
      <Route path="/pages" element={<PageInsights/>}/>

      </Routes>
    </div>
  );
};

export default App;
