import './App.css'
import {Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Blog from './pages/Blog';
import ReadtheBraindump from './pages/ReadtheBraindump';
import KnowMe from './pages/KnowMe';

function App() {

  return (
    <>
      <div className='relative '>
        <div className='absolute top-0 left-0 w-full h-full z-10'>
          <Navbar></Navbar>
        </div>
      </div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/blog/:id' element={<ReadtheBraindump></ReadtheBraindump>}></Route>
        <Route path='/knowme' element={<KnowMe></KnowMe>}></Route>
      </Routes>
    </>
  )
}

export default App
