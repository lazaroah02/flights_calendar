function Day({dayNumber, handleNavigate, disabled}) {
    return ( 
        <section className = {disabled?`day-disabled`:null} onClick={() => handleNavigate(dayNumber)}>
            {dayNumber}
        </section>
     );
}

export default Day;