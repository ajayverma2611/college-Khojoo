import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<h1>Welcome to our Website</h1>} />
    </Routes>
   </BrowserRouter>
  );
}

export default App;
