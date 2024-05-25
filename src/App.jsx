import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/dashboard/Dashboard';
import ReadOut from './pages/readout/ReadOut';
import BookShelf from './pages/bookshelf/BookShelf';
import Explore from './pages/explore/Explore';
import MyNotes from './pages/myNotes/MyNotes';
import Saved from './pages/saved/Saved';
import Shared from './pages/shared/Shared';
import Download from './pages/download/Download';
import Upload from './pages/upload/Upload';
import SearchResult from './pages/searchResult/SearchResult';
import Settings from './pages/settings/Settings';
import Home from './pages/home/Home';
import Signup from './pages/signup/Signup';
import Login from './pages/login/Login';
import ForgotPassword from './pages/resetPassword/forgotPassword/ForgotPassword';
import PasswordReset from './pages/resetPassword/passwordReset/PasswordReset';
import NewPassword from './pages/resetPassword/newPassword/NewPassword';
import PasswordDone from './pages/resetPassword/passwordDone/PasswordDone';

function App() {
  return (
    <BrowserRouter>
      <div className='bookworm-main'>
      <Routes>
        <Route path = '/' element = {<Home />} />
        <Route path = '/dashboard' element = {<Dashboard />} />  
        <Route path = '/readout' element = {<ReadOut />} />         
        <Route path = '/bookshelf' element = {<BookShelf />} />
        <Route path = '/explore' element = {<Explore />} />
        <Route path = '/mynotes' element = {<MyNotes />} />
        <Route path = '/download' element = {<Download />} />
        <Route path = '/upload' element = {<Upload />} />
        <Route path = '/saved' element = {<Saved />} />
        <Route path = '/shared' element = {<Shared />} />
        <Route path = '/searchresult' element = {<SearchResult />} />
        <Route path = '/settings' element = {<Settings />} />
        <Route path = '/signup' element = {<Signup />} />
        <Route path = '/login' element = {<Login />} />

        <Route path = '/forgotpassword' element = {<ForgotPassword />} />
        <Route path = '/passwordreset' element = {<PasswordReset />} />
        <Route path = '/newpassword' element = {<NewPassword />} />
        <Route path = '/passworddone' element = {<PasswordDone />} />

      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
