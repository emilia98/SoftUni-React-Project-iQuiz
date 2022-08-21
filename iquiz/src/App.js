import Register from "./components/Authentication/Register";
import Home from "./components/Home";
import { Routes, Route } from 'react-router-dom';
import Login from "./components/Authentication/Login/Login";
import Header from "./components/Header";
import CreateQuestion from "./components/Quiz/Questions/Create";
import { QuestionList } from "./components/Quiz/Questions/QuestionList";
import { AuthProvider } from './contexts/AuthContext';
import PrivateRoute from "./components/Common/PrivateRoute";

function App() {
 
  return (
    <AuthProvider>
    <div>
      <Header />
      <Routes>
        <Route path="/" element={ <Home /> }/>
        <Route path="/register" element={ <Register /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/create" element={(
          <PrivateRoute> 
            <CreateQuestion/> 
          </PrivateRoute>
        )} />
        <Route path="/questionlist" element = {< QuestionList /> } />
      </Routes>
      
    </div>
    </AuthProvider>
  );
}

export default App;
