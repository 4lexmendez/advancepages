import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Courses from './pages/Courses'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
       <div className='flex flex-col justify-between
       h-screen'>
         <Navbar />
         <main className='continer mx-auto px-3 pb-12'>
           <Routes>
             <Route path='/' element={<Home />} />
             <Route path='/about' element={<About />} />
             <Route path='/courses' element={<Courses />} />
             <Route path='/notfound' element={<NotFound />} />
             <Route path='/*' element={<NotFound />} />
           </Routes>
           </main>
           <Footer />

      
      
      </div>

    </Router>
   
  )
}

export default App;
