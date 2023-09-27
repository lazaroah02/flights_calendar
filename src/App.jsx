import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import CalendarPage from './pages/CalendarPage'
import FlightsPage from './pages/FlightsPage'
import Page404 from './pages/Page404'

function App() {
  return (
    <Router>
      <>
        <Routes>
            <Route path = "/" element = {<CalendarPage/>}/>
            <Route path = "/flights/:date" element = {<FlightsPage/>}/>
            <Route path = "*" element = {<Page404/>}/>
        </Routes>
      </>
    </Router>
  )
}

export default App
