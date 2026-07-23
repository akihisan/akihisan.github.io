import { useEffect, useState } from "react";

function Journey({data}){
    const goal = localStorage.goal || 2700; //km
    const [current, setCurrent] = useState(0); //km
    const [completed, setCompleted] = useState(0); //%

    useEffect(() => {
        //alle Schritte addieren
        let stepCount = 0;
        for(let entry in data){
            const steps = data[entry].steps;
            stepCount += Number(steps);
        }

        //in Kilometer umrechnen
        const km = stepCount * 0.0006;
        setCurrent(km);

        //Fortschritt in Prozent berechnen
        const percent = km / goal * 100;
        setCompleted(percent);
        drawProgress(percent);
    }, [data])

    //Hilfsfunktion auf 2 Nachkommastellen runden
    function roundTo2(value) {
        const factor = 10 ** 2;
        return Math.round((value + Number.EPSILON) * factor) / factor;
    }

    //Fortschrittsbalken zeichnen
    function drawProgress(progress){
        const bar = document.getElementById("progressBar");
        bar.style.width = `${progress}%`;
    }

    return(
        <div>
            {roundTo2(current)}km gelaufen.<br/>
            Noch {roundTo2(goal - current)}km übrig bis Mordor.<br/>
            Fortschritt: {roundTo2(completed)}%
            <div id="progressBarBG">
                <div id="progressBar"></div>
            </div>
        </div>
    );
}

export default Journey;