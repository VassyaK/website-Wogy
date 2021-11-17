import "./App.scss";
import Header from "./Сomponents/Header/Header";
import Footer from "./Сomponents/Footer/Footer";
import Main from "./Сomponents/Main/Main";
import StoreWogyBY from "./Сomponents/StoreWogyBY/StoreWogyBY";
import StoreWogyMalinovka from "./Сomponents/StoreWogyMalinovka/StoreWogyMalinovka";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Information from "./Сomponents/Information/Information";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Main />
        <Routes> 
          <Route path="/home" element={<Main/>} />         
          <Route path="/WogyBY" element={<StoreWogyBY/>} />
          <Route path="/Wogy_Malinovka" element={<StoreWogyMalinovka/>} />
          <Route path="/inform" element={<Information/>} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
