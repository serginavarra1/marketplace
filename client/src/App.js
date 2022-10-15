import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Products from './components/products/Products'
import Chat from './components/chat/Chat'
import LoginFrom from './components/authentication/LoginFrom'
import RegisterFrom from './components/authentication/RegisterFrom'


const App = () => {

  return (
    <>
        <BrowserRouter>
            <Routes>
              <Route path='/' element={<Products/>}/>
              <Route path='/upload'/>
              <Route path='/chats' element={<Chat/>}/>
              <Route path='/favourites'/>
              <Route path='/profile'/>
              <Route path='/login' element={<LoginFrom/>}/>
              <Route path='/register' element={<RegisterFrom/>}/>
            </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
