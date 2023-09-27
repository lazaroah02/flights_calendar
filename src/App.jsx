import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import CalendarPage from './pages/CalendarPage'
import FlightsPage from './pages/FlightsPage'

function App() {
  return (
    <Router>
      <>
        <Routes>
            <Route path = "/" element = {<CalendarPage/>}/>
            <Route path = "/flights/:date" element = {<FlightsPage/>}/>
            <Route path = "*" element = {"404 Not Found"}/>
        </Routes>
      </>
    </Router>
  )
}

export default App
