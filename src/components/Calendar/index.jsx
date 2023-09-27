import Day from '../Day'
import { useCalendar } from '../../customHooks/useCalendar'
import { useNavigate } from 'react-router-dom'
import { MONTHS } from '../../data'
import {esBisiesto} from '../../utils/calendarUtilities'
import './index.css'

function Calendar() {
    const {month, year, updateMonth} = useCalendar()
    const navigate = useNavigate()

    //this method generate a grid with the days of the calendar
    function generateDays() {
        //si el año es bisiesto le agrego un dia a febrero
        const numberOfDays = esBisiesto(year) && month === 1? MONTHS[month].days+1:MONTHS[month].days;
        const weekNumberDay = new Date(`${year}-${month+1}-1`).getDay()
        //array that contains the days of the month
        let days = Array.from(
                {length: numberOfDays}, 
                (_, index) => <Day key={index} dayNumber={index+1} handleNavigate={handleNavigate} />
            ); 
        //array that contains the days of the last month visible in the first week of grid
        let daysDisabled = Array.from(
                {length: weekNumberDay}, 
                (_, index) => <Day key={`disabledDay${index}`} disabled = {true}/>
            );
        return daysDisabled.concat(days)
    }

    function handleNavigate(day){
        navigate(`/flights/${day}-${month+1}-${year}`)
    }

    return ( 
        <>
            <section className = "calendar-months-navigator">
                <button onClick = {() => updateMonth(month - 1)}>{"<"}</button>
                <div>{MONTHS[month].name} {year}</div>
                <button onClick = {() => updateMonth(month + 1)}>{">"}</button>
            </section>
            <section className = "calendar-days-grid">
                <div className = "days-header">Domingo</div>
                <div className = "days-header">Lunes</div>
                <div className = "days-header">Martes</div>
                <div className = "days-header">Miercoles</div>
                <div className = "days-header">Jueves</div>
                <div className = "days-header">Viernes</div>
                <div className = "days-header">Sabado</div>
                {generateDays()}
            </section>
        </>
    );
}

export default Calendar;