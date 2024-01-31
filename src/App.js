import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Firstpage } from './components/Firstpage';
import Mainpage from './components/Mainpage';

function App() {

  return (
   
   <BrowserRouter>
      <Routes>
         <Route path='/' element={<Firstpage/>}/>
         <Route path='/mainpage' element={<Mainpage/>}/>     
      </Routes>
   </BrowserRouter>
 
  );
}

export default App;
