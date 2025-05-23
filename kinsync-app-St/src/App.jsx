
import { BrowserRouter, Link, Route, Routes } from 'react-router'
import './App.css'
import Header from './component/Header'
import Footer from './component/Footer'
import Home from './component/Home'
import About from './component/About'
import Login from './component/Login'
import Register from './component/Register'
import Dashboard from './component/Dashboard'
import Content from './component/Content'
import EventList from './component/EventList'

function App() {
  

  return (
    <>
       <BrowserRouter>
      <div className='app'>
      <Header />
          <nav>
            <Link to='/Home'>Home</Link> | <Link to='/About'>About Us</Link>
          </nav>
            <Routes>
              <Route path='/Home' element={<Home />} />
              <Route path='/About' element={ <About />} />
              <Route path='/Login' element={<Login />}> </Route>
              <Route path='/Register' element={<Register />}> </Route>
              <Route path='/Dashboard' element={<Dashboard />}> </Route>
              <Route path='/Content' element={<Content />}> </Route>
              <Route path='/EventList' element={<EventList />}> </Route>
            </Routes>
       <Footer />
      </div>
       </BrowserRouter>
     
    </>
  )
}

export default App
