import Day from '../Day'
import { useCalendar } from '../../customHooks/useCalendar'
import { useNavigate } from 'react-router-dom'
import { MONTHS } from '../../data'
import './index.css'

function Calendar() {
    const {month, year, updateMonth} = useCalendar()
    const navigate = useNavigate()

    //this method generate a grid with the days of the calendar
    function generateDays() {
        const numberOfDays = MONTHS[month].days;
        const weekNumberDay = new Date(`${year}-${month+1}-1`).getDay()
        //array that contains the days of the month
        let days = Array.from(
                {length: numberOfDays}, 
                (_, index) => <Day key={index} dayNumber={index+1} handleNavigate={handleNavigate} />
            ); 
        //array that contains the days of the last month visible in the first week of grid
        let daysDisabled = Array.from(
                {length: weekNumberDay}, 
                (_, index) => <Day key={`disabledDay${index}`} disabled = {true} dayNumber={index+1}  />
            );
        return daysDisabled.concat(days)
    }

    function handleNavigate(day){
        navigate(`/flights/${day}-${month+1}-${year}`)
    }

    return ( 
        <>
            <section className = "calendar-months-navigator">
                <div>{MONTHS[month].name} {year}</div>
                <button onClick = {() => updateMonth(month - 1)}>{"<"}</button>
                <button onClick = {() => updateMonth(month + 1)}>{">"}</button>
            </section>
            <section className = "calendar-grid-header">
                <div>Domingo</div>
                <div>Lunes</div>
                <div>Martes</div>
                <div>Miercoles</div>
                <div>Jueves</div>
                <div>Viernes</div>
                <div>Sabado</div>
            </section>
            <section>
                {generateDays()}
            </section>
        </>
    );
}

export default Calendar;