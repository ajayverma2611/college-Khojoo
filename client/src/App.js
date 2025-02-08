import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import FeedBack from './Presentation/Pages/FeedBack';
import Home from './Presentation/Pages/Home';
<<<<<<< Updated upstream
=======
import MockTestPage from './Presentation/Pages/MockTestPage';
import Navbar from './Presentation/Components/Navbar';
import InstructionPage from './Presentation/Pages/InstructionPage';
import Profile from './Presentation/Pages/Profile';
>>>>>>> Stashed changes

function App() {
  return (
<<<<<<< Updated upstream
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<FeedBack />} />
      <Route path="/home" element={<Home />} />
    </Routes>
   </BrowserRouter>
=======
    <div>
      {shownavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/helpandfeedback" element={<FeedBack />} />
        <Route path="/tests" element={<MockTestPage />}/>
        <Route path="/instructionpage" element={<InstructionPage />} />
        <Route path="/profile" element={<Profile/>}/>
        
      </Routes>
    </div>
>>>>>>> Stashed changes
  );
}

export default App;
