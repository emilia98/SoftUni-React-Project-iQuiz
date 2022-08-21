import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import Register from "./components/Authentication/Register";
import Home from "./components/Home";

import Login from "./components/Authentication/Login/Login";
import Header from "./components/Header";
import CreateQuestion from "./components/Quiz/Questions/Create";
import { QuestionList } from "./components/Quiz/Questions/QuestionList";
import { AuthProvider } from './contexts/AuthContext';
import PrivateRoute from "./components/Common/PrivateRoute";
import Logout from './components/Authentication/Logout/Logout';
import QuestionDelete from './components/Quiz/Questions/Delete/QuestionDelete';

function App() {
 
  return (
    <AuthProvider>
      <ToastContainer />
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
        <Route path="/logout" element={(
          <PrivateRoute>
            <Logout />
          </PrivateRoute>
        )} />
        <Route path="/question/delete/:id" element={(
          <PrivateRoute>
            <QuestionDelete /> 
          </PrivateRoute>
        )} />
      </Routes>
    </div>
    </AuthProvider>
  );
}

export default App;