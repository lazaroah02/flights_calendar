import './index.css'

function Flight({flight}) {
    return ( 
        <section className = "flight-card">
            <div>{flight.from} - {flight.to}</div>
            <div>Hora de salida: {flight.time}</div>
            <div>Precio: ${flight.price}</div>
            <div>Aereolinea: {flight.airline}</div>
            <div>Fecha: {flight.date}</div>
        </section>
    );
}

export default Flight;