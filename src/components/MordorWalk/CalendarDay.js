import { useEffect, useState } from "react";

function CalendarDay({day, month, year, current, onSelect, data}){
    const date = new Date(year, month, day);

    //Fallback falls keine Daten vorhanden sind
    if(!data){
        data = [];
    }
    //herausfinden, ob an diesem Tag Schritte eingetragen sind
    const existing = data.find(item => item.date === date.toDateString());

    // zufällige Rotation für die Checkmark
    const [hasRotation, setHasRotation] = useState(false);
    const [rotation, setRotation] = useState();
    useEffect(() => {
        if(!hasRotation){
            var min = -25;
            var max = 25;
            setRotation(Math.floor(Math.random() * (max - min + 1)) + min);
            setHasRotation(true);
        }
    }, []);

    return (
        <div className={current ? "current day" : "day"} onClick={() => onSelect(date)}>
            <p className="number">{day}</p>
            <img
                className={(existing && existing.steps.trim() !== "") ? "check" : "hide"}
                src={`${process.env.PUBLIC_URL}/images/mordor/check.svg`}
                alt="Checkmark"
                style={{rotate: rotation + "deg"}}
            />
        </div>
    );
}

export default CalendarDay;