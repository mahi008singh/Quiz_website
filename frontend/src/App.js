
import Quizplay from "./components/Quizplay" 
import { QuizContext } from "./Context/QuizHolder";
import { useContext } from "react";
import Header from './components/Header'
import Home from './Home';
import Practice from './Practice'
import Compete from './Compete'
import Signup from './Signup';
import Login from './Login'
import Categ from './Cat-component/Categ';
import Review from './components/Review';
import Codeques from './components/Codeques';

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
            <Route path={'/Codeques'} element={<Codeques/>}/>
            <Route path={'/Signup'} element={<Signup/>} />
            <Route path={'/Login'} element={<Login/>} />
            <Route path={'/Review'} element={<Review/>} />


       </Routes>
       </BrowserRouter>  
    </>
  );
}

export default App;
