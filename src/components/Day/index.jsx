import './index.css'
function Day({dayNumber = "", handleNavigate, disabled}) {
    return ( 
        <section className = {disabled?'day-disabled':'day'} onClick={disabled?null:() => handleNavigate(dayNumber)}>
            {dayNumber}
        </section>
     );
}

export default Day;