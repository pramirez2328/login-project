import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import MyFeed from './MyFeed';
import NewAccount from './components/newAccount/NewAccount';

import './App.css';
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/myfeed' element={<MyFeed />} />
        <Route path='/new-account' element={<NewAccount />} />
      </Routes>
    </div>
  );
}

export default App;
