import './App.scss';
import Header from './Сomponents/Header/Header';
import Footer from './Сomponents/Footer/Footer';
import Main from './Сomponents/Main/Main';
import StoreWogyBY from './Сomponents/StoreWogyBY/StoreWogyBY';
import StoreWogyMalinovka from './Сomponents/StoreWogyMalinovka/StoreWogyMalinovka';
import { BrowserRouter, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Main/>
        <Route path= '/StoreWogyBY' component = {StoreWogyBY}/>
        <Route path= '/StoreWogyMalinovka' component = {StoreWogyMalinovka}/>        
        <Footer/>      
      </div>
    </BrowserRouter>
    
  );
}

export default App;
