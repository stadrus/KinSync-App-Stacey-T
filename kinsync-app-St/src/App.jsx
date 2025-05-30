import { HashRouter, Link, Routes, Route } from 'react-router'
import './App.css'
import Header from './component/Header'
import Footer from './component/Footer'
import Home from './component/Home'
import About from './component/about/About'
import Login from './component/Login'
import Register from './component/Register'
import Dashboard from './component/user-profile/Dashboard'
import Content from './component/user-profile/Content'
import EventList from './component/EventList'

function App() {
  

  return (
    <>
      <HashRouter>
        <div>
          <Header />
            <nav>
              <Link to='/Home'>Home</Link> | <Link to='/About'>About Us</Link>
            </nav>
            <Routes>
                <Route path='/Home' element={<Home /> }/>
                <Route path='/About' element={ <About /> }/>
                <Route path="/Register" element={ <Register /> }/>
                <Route path='Login' element={<Login />}/>
                <Route path="/Dashboard" element={<Dashboard /> }/>
                <Route path="/Content" element={<Content /> }/>
                <Route path="/EventList" element={<EventList /> }></Route>
            </Routes>
          <Footer />
        </div>
      </HashRouter> 
    </>
  )
}

export default App
