import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Products from './components/products/Products'
import Chat from './components/chat/Chat'
import LoginFrom from './components/authentication/LoginFrom'
import RegisterFrom from './components/authentication/RegisterFrom'


const App = () => {

  const showNav = true;

  return (
    <>
        <BrowserRouter>
          { showNav ? <Navbar></Navbar> : <div/>}
          <div className="body-container">
            <Routes>
              <Route path='/' element={<Products/>}/>
              <Route path='/upload'/>
              <Route path='/chats' element={<Chat/>}/>
              <Route path='/favourites'/>
              <Route path='/profile'/>
            </Routes>
          </div>
          <div className="auth-div">
            <Routes>
              <Route path='/login' element={<LoginFrom/>}/>
              <Route path='/register' element={<RegisterFrom/>}/>
            </Routes>
          </div>
        </BrowserRouter>
      
    </>
  );
}

export default App;
