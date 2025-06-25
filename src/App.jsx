
//Hooks
import { Outlet } from 'react-router-dom'

//Css
import './App.css'

//Components
import NavBar from './components/NavBar'

function App() {

  return (
    <>
      <div>
        <NavBar />
        <Outlet />
      </div>
    </>
  )
}

export default App
