import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import FeedBack from './Presentation/Pages/FeedBack';
import Home from './Presentation/Pages/Home';

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<FeedBack />} />
      <Route path="/home" element={<Home />} />
    </Routes>
   </BrowserRouter>
  );
}

export default App;
