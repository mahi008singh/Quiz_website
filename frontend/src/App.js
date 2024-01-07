
import Quizplay from "./components/Quizplay" 
import { QuizContext } from "./Context/QuizHolder";
import { useContext } from "react";
import Header from './components/Header'
import Home from './pages/Home';
import Practice from './pages/Practice'
import Compete from './pages/Compete'
import Signup from './pages/Signup';
import Login from './pages/Login'
import Categ from './Cat-component/Categ';
import Review from './components/Review';
import Codeques from './components/Codeques';
import Contact from './pages/Contact'
import Privatecomp from "./components/privatecomp";
import Dashboard from "./pages/adminpage/Dashboard";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Upload from "./pages/adminpage/Upload";
import Manage from "./pages/adminpage/Manage";
import Companies from "./pages/Companies";
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
              <Route path={'/Review'} element={<Review/>} />
              <Route path={'/Contact'} element={<Contact/>} />
              <Route path={'/companies'} element={<Companies/>} />
          
              <Route path={'/Signup'} element={<Signup/>} />
              <Route path={'/Login'} element={<Login/>} />

              {/* admin routes */}

              <Route path="/admin/dashboard" element={<Dashboard/>}/>
              <Route path="/admin/upload" element={<Upload/>}/>
              <Route path="/admin/manage" element={<Manage/>}/>



       </Routes>
       </BrowserRouter>  
    </>
  );
}

export default App;
