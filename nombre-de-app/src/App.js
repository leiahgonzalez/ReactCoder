
import './App.css';
import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Cartcontent from './components/Cartcontent/Cartcontent';
import DataProvider from './components/Context/Datacontext';

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Header/>}/>
          <Route path='/cart' element={<Cartcontent/>} />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  
  );
};

export default App;
