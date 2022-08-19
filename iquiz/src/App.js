import Register from "./components/Authentication/Register";
import Home from "./components/Home";
import { Routes, Route } from 'react-router-dom';
import Login from "./components/Authentication/Login/Login";

function App() {
 
  return (
    <div>
      <h1>Hello World</h1>
      <Routes>
        <Route path="/" element={ <Home /> }/>
        <Route path="/register" element={ <Register /> } />
        <Route path="/login" element={ <Login /> } />
      </Routes>
      
    </div>
    
  );
}

export default App;

/*
<Register />
*/

/*
 <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={
                                <Suspense fallback={<span>Loading....</span>}>
                                    <Register />
                                </Suspense>
                            } />
                            <Route path="/create" element={(
                                <PrivateRoute>
                                    <CreateGame />
                                </PrivateRoute>
                            )} />
                            <Route element={<GameOwner />}>
                                <Route path="/games/:gameId/edit" element={<EditGame />} />
                            </Route>
                            <Route element={<PrivateRoute />}>
                                <Route path="/logout" element={<Logout />} />
                            </Route>
                            <Route path="/catalog" element={<Catalog />} />
                            <Route path="/catalog/:gameId" element={<GameDetails />} />
                        </Routes>
*/