import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Products from './products/Products'
import Chat from './chat/Chat'

const Navbar = () => {
    return (
        <div>
            <BrowserRouter>
                <nav className="navbar navbar-expand-lg bg-light">
                    <div class="container-fluid">
                        <Link className="navbar-brand" to="/">Home</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/upload">Upload</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/chats">Chats</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/favourites">Favourites</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/profile">Profile</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="body-container">
                    <Routes>
                        <Route path='/upload' element={<h1>Upload</h1>}/>
                        <Route path='/chats' element={<Chat/>}/>
                        <Route path='/favourites' element={<h1>favourites</h1>}/>
                        <Route path='/profile' element={<h1>profile</h1>}/>
                        <Route path='/' element={<Products/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default Navbar;
