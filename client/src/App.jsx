import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider} from "./context/AuthContext";

import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/'element={<h1 className="text-4X1 font-bold">Home page</h1>}></Route>
          <Route path='/login'element={<LoginPage></LoginPage>}></Route>
          <Route path='/register'element={<RegisterPage></RegisterPage>}></Route>
          <Route path='/tasks'element={<h1 className="text-4X1 font-bold">Task page</h1>}></Route>
          <Route path='/add-task'element={<h1 className="text-4X1 font-bold">New task</h1>}></Route>
          <Route path='/task/:id'element={<h1 className="text-4X1 font-bold">Update task</h1>}></Route>
          <Route path='/profile'element={<h1 className="text-4X1 font-bold">Profile</h1>}></Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
    
  )
}

export default App
