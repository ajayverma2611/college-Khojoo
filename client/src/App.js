import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import FeedBack from './Presentation/Pages/FeedBack';
import Home from './Presentation/Pages/Home';
import MockTestPage from './Presentation/Pages/MockTestPage';
import Navbar from './Presentation/Components/Navbar';
import InstructionPage from './Presentation/Pages/InstructionPage';
import SignIn from './Presentation/Pages/signIn';
import SignUp from './Presentation/Pages/signUp';
import Test from './Presentation/Pages/Test';
import Profile from './Presentation/Pages/Profile';
import FeedbackModal from './Presentation/Components/feedbackModal';

function App() {
  const location = useLocation();
  const shownavbar = location.pathname !== "/signup" && location.pathname !== "/login" && location.pathname !== "/test";
  return (
    <div>
      {shownavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/helpandfeedback" element={<FeedBack />} />
        <Route path="/tests" element={<MockTestPage />}/>
        <Route path="/instructionpage" element={<InstructionPage />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/test" element={<Test />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/modal" element={<FeedbackModal/>}/>
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
