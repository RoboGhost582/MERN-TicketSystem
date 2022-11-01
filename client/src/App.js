import Navbar from "./Components/Navbar";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import { useContext } from "react";
import UserContext from "./Context/UserContext";


function App() {
  const { currentUser } = useContext(UserContext);
  return (
    <div className>
      <Navbar />
      <Login />
      
    </div>
  );
}

export default App;
