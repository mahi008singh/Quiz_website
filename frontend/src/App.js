
import Quizplay from "./components/Quizplay" 
import { QuizContext } from "./Context/QuizHolder";
import { useContext, useState } from "react";
import Header from './components/Header'
import Home from './pages/Home';
import Practice from './pages/Practice'
import Compete from './pages/Compete'
import Signup from './pages/Signup';
import Login from './pages/Login'
import Categ from './components/Categ';
import Review from './components/Review';
import Codeques from './components/Codeques';
import Contact from './pages/Contact'
import Sendotp from "./pages/Sendotp";
import Privatecomp from "./components/privatecomp";
import Dashboard from "./pages/adminpage/Dashboard";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Upload from "./pages/adminpage/Upload";
import Manage from "./pages/adminpage/Manage";
import Companies from "./pages/Companies";
import Logout from "./pages/Logout";
import Protected from "./pages/Protected";
import Privateroute from "./pages/Privateroute";
import Profile from "./pages/Profile"

function App() {
  let is_admin=localStorage.getItem('admin')
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
              <Route path={'/Sendotp'} element={<Sendotp/>} />
              <Route path={'/profile'} element={<Profile/>}/>
              
              
                 <Route path={'/companies'} element={<Protected Component={Companies}/>} />
              
          
              <Route path={'/Signup'} element={<Signup/>} />
              <Route path={'/Login'} element={<Login/>} />
              <Route path={'/Logout'} element={<Logout/>} />
              {/* admin routes */}

               <Route path={"/admin"} element={<Privateroute/>}>

                  <Route path="dashboard" element={<Protected Component={Dashboard}/>}/>
                     
                  <Route path="upload" element={<Protected Component={Upload}/>}/>
                  <Route path="manage" element={<Protected Component={Manage}/>}/>

               </Route>
              

       </Routes>
       </BrowserRouter>  
    </>
  );
}

export default App;
