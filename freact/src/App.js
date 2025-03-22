import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogss from './components/Dialogss/Diaologss';
import Newss from './components/Newss/News';
import Music from './components/Musics/Musics'
import Settingss from './components/Settingss/Settings';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return(
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
       <Routes>
        <Route path='/profile' Component={Profile}/>
        <Route path='/dialogss'Component={Dialogss}/>
        <Route path='/news' Component={Newss}/>
        <Route path='/music'Component={Music}/>
        <Route path='/setting' Component={Settingss}/>
        </Routes>

        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
