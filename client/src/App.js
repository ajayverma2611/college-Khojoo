import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import FeedBack from './Presentation/Pages/FeedBack';

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<FeedBack />} />
    </Routes>
   </BrowserRouter>
  );
}

export default App;
