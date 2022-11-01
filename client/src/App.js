import Navbar from "./Components/Navbar";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import HomePage from "./Pages/HomePage";
import { Routes, Route } from 'react-router-dom'
import NewTicket from "./Pages/NewTicket";
import Ticket from "./Pages/Ticket";


function App() {
  return (
    <div className>
      <Navbar />
      <Routes >
        <Route path="/" element={<HomePage />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/newticket" element={<NewTicket />}/>
        <Route path="/tickets" element={<Ticket />}/>
        
      </Routes>
    </div>
  );
}

export default App;
