import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import MyFeed from './MyFeed';

import './App.css';
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/myfeed' element={<MyFeed />} />
      </Routes>
    </div>
  );
}

export default App;
