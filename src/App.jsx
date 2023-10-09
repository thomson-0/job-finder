
import './App.css'
import Footer from './Components/Footer'
import Job from './Components/Job'

import Nav from './Components/Nav'
import Search from './Components/Search'
import Switch from './Components/Switch'
import Value from './Components/Value'

function App() {
  

  return (
    <div className=' max-w-5xl mx-auto'>
      <Nav/>
      <Search/>
      <Job/>
      <Value/>
      <Switch/>
      <Footer/>
      
    </div>
  )
}

export default App
