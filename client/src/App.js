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
import Materials from './Presentation/Components/Materials';

function App() {
  const location = useLocation();
  const shownavbar = location.pathname !== "/signup" && location.pathname !== "/signin" && location.pathname !== "/test";
  return (
    <div style={{boxSizing:'border-box'}}>
      {shownavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/helpandfeedback" element={<FeedBack />} />
        <Route path="/tests" element={<MockTestPage />}/>
        <Route path="/instructionpage" element={<InstructionPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/test" element={<Test />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/materials" element={<Materials />} />
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
