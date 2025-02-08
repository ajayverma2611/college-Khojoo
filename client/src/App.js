import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import FeedBack from './Presentation/Pages/FeedBack';
import Home from './Presentation/Pages/Home';
import MockTestPage from './Presentation/Pages/MockTestPage';
import Navbar from './Presentation/Components/Navbar';
import InstructionPage from './Presentation/Pages/InstructionPage';

function App() {
  const location = useLocation();
  const shownavbar = location.pathname !== "/signup" && location.pathname !== "/login";
  return (
    <div>
      {shownavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/helpandfeedback" element={<FeedBack />} />
        <Route path="/tests" element={<MockTestPage />}/>
        <Route path="/instructionpage" element={<InstructionPage />} />
      </Routes>
    </div>
  );
}
function AppWrapper(){
  return(
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  )
}

export default AppWrapper;
