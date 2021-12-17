
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  
return(
  <div>
  <Router>
    <Routes>
    <Route path="/" element={<Login />}></Route>
    <Route path="/signup" element={<Signup />}></Route>
    <Route
            path="/map"
            element={
              <ProtectedRoute>
                <Home/>
              </ProtectedRoute>
            }
          ></Route>
    </Routes>
  </Router>
</div>
)
 
}
export default App;
