
import Quizplay from "./components/Quizplay" 
import { QuizContext } from "./Context/QuizHolder";
import { useContext } from "react";
import Header from './components/Header'
import Home from './Home';
import Practice from './Practice'
import Compete from './Compete'
import Signup from './Signup'
import Categ from './Cat-component/Categ'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  return (
    <>
       <BrowserRouter>
          <Header/>
       <Routes>
            <Route path={'/'} element={<Home/>} />
            <Route path={'/Compete'} element={<Compete/>} />
            <Route path={'/Practice'} element={<Practice/>} />
            <Route path={'/Quizplay'} element={ <Quizplay/>} />
            <Route path={'/Categ'} element={<Categ/>}/>
            <Route path={'/Signup'} element={<Signup/>} />

       </Routes>
       </BrowserRouter>  
    </>
  );
}

export default App;
