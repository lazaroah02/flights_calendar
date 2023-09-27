import { useParams } from "react-router-dom";
import Flight from "../components/Flight";
import {FLIGHTS} from '../data'
function FLightsPage() {
    const {date} = useParams()
    return ( 
        <>
        <h1>Vuelos del dia: {date}</h1>
        {FLIGHTS.map(flight => <Flight  key = {flight.id} flight={flight}/>)}
        </>
    );
}

export default FLightsPage;