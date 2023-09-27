import {useState} from 'react'

export function useCalendar(){
    const [month, setMonth] = useState(new Date().getMonth())
    const [year, setYear] = useState(new Date().getFullYear())

    function updateMonth(value) {
        if(value === -1){
            setMonth(11)
            setYear(prev => prev-1)
        }
        else if(value === 12){
            setMonth(0)
            setYear(prev => prev+1)
        }
        else{
            setMonth(value)
        }
    }

    return {updateMonth, month, year}
}