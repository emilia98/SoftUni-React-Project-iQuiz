import Register from "./components/Authentication/Register";
import Home from "./components/Home";
import { Routes, Route } from 'react-router-dom';
import Login from "./components/Authentication/Login/Login";
import Header from "./components/Header";
import CreateQuestion from "./components/Quiz/Questions/Create";

function App() {
 
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={ <Home /> }/>
        <Route path="/register" element={ <Register /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/create" element={ < CreateQuestion/>} />
      </Routes>
      
    </div>
    
  );
}

export default App;
