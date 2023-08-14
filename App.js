import './App.css';
import Login from './components/Auth/Login';
import Logout from './components/Auth/Logout';
import SubList from './components/HP1/SubList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hp1Preview from './components/HP1/Hp1Preview';
import Subcribe from './components/HP1/Subcribe';
import TakeQuiz from './components/TakeQuiz/TakeQuiz';
import Dashboard from './components/Dashboard/Dashboard';
import Signup from './components/Auth/Signup';
import CardList from './components/SurfEBook/Search';
import ForgotPassword from './components/Auth/ForgotPass';
import Hp2Preview from './components/Previews/HP2Preview';
import Hp3Preview from './components/Previews/HP3Preview';
import Hp2Subcribe from './components/Subcriptions/Hp2Sub';
import Hp3Subcribe from './components/Subcriptions/Hp3Sub';
import CCPreview from './components/Previews/CC';
import InterstellaPrev from './components/Previews/Interstella';
import AngPreview from './components/Previews/LearnAn';
import DunePreview from './components/Previews/Dune';
import TheSPrev from './components/Previews/TheSilent';
import HFJPrev from './components/Previews/HeadFirstJava';
import InterSubcribe from './components/Subcriptions/InterSub';
import CCSubcribe from './components/Subcriptions/CCSub';
import AngSubcribe from './components/Subcriptions/AngularSub';
import JavaSubcribe from './components/Subcriptions/JavaSub';
import TheSilPSubcribe from './components/Subcriptions/TheSPsub';
import DuneSubcribe from './components/Subcriptions/DuneSub';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import QuizList from './components/TakeQuiz/Quiz';



function App() {

  return (
  <div>
    <BrowserRouter>
    <Routes>
      
      <Route path='/' element={<Login/>} />
      <Route path='/signup' element={<Signup/>}></Route>
        <Route path ='/logout' element={<Logout/>} ></Route>
          <Route path='/surf' element={<CardList/>}></Route>
          <Route path='/preview1' element={<Hp1Preview/>}></Route>
          <Route path='/dashboard' element={<Dashboard/>}></Route>
          <Route path='/subcribehp1' element={<Subcribe/>}></Route>
          <Route path='/takequiz' element={<TakeQuiz/>}></Route>
          <Route path='/sub' element={<SubList/>}></Route>
          <Route path='/forgpass' element={<ForgotPassword/>}></Route>
          <Route path='/quiz' element={<QuizList/>}></Route>
          {/* Previews */}
          <Route path='/hp2preview' element={<Hp2Preview/>}></Route>
          <Route path='/hp3preview' element={<Hp3Preview/>}></Route>
          <Route path='/interprev' element={<InterstellaPrev/>}></Route>
          <Route path='/ccprev' element={<CCPreview/>}></Route>
          <Route path='/angularprev' element={<AngPreview/>}></Route>
          <Route path='/thesprev' element={<TheSPrev/>}></Route>
          <Route path='/hfjprev' element={<HFJPrev/>}></Route>
          <Route path='/duneprev' element={<DunePreview/>}></Route>
          {/* Subcriptions */}
          <Route path='/hp2sub' element={<Hp2Subcribe/>}></Route>
          <Route path='/hp3sub' element={<Hp3Subcribe/>}></Route>
          <Route path='/intersub' element={<InterSubcribe/>}></Route>
          <Route path='/ccsub' element={<CCSubcribe/>}></Route>
          <Route path='/angsub' element={<AngSubcribe/>}></Route>
          <Route path='/hfjsub' element={<JavaSubcribe/>}></Route>
          <Route path='/thespsub' element={<TheSilPSubcribe/>}></Route>
          <Route path='/dunesub' element={<DuneSubcribe/>}></Route>
          
    </Routes>
  </BrowserRouter>  
   <ToastContainer /> 
  </div>
  )  
      
}

export default App;
