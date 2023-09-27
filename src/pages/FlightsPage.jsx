import { useParams } from "react-router-dom";
function FLightsPage() {
    const {date} = useParams()
    return ( 
        <>
        FlightsPage {date}
        </>
    );
}

export default FLightsPage;