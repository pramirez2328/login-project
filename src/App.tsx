import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import MyFeed from './MyFeed';
import NewAccount from './components/newAccount/NewAccount';
import ForgotPassword from './components/forgotPassword/ForgotPassword';

import './App.css';
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/myfeed' element={<MyFeed />} />
        <Route path='/new_account' element={<NewAccount />} />
        <Route path='/forgot_password' element={<ForgotPassword />} />
      </Routes>
    </div>
  );
}

export default App;
