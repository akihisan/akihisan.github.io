import { useEffect, useState } from "react";
import "../../css/MordorWalk/mordor.css";

function EnterSteps({currentDate, data, newData}){

    const [date, setDate] = useState(currentDate.toDateString());
    const [steps, setSteps] = useState("");

    const [saved, setSaved] = useState(false);  // gibt an ob daten gerade gespeichert wurden

    //Fallback falls keine Daten vorhanden sind
    if(!data){
        data = [];
    }

    //Wenn Datum geändert wird, passenden Eintrag laden
    useEffect(() => {
        const newDate = currentDate.toDateString();
        setDate(newDate);
        const existing = data.find(item => item.date === newDate);
        setSteps(existing ? existing.steps : "");
    }, [currentDate]);

    function saveSteps() {
        const existingIndex = data.findIndex(item => item.date === date);

        if (existingIndex !== -1) {
            //Datum existiert --> überschreiben
            data[existingIndex].steps = steps;
        } else {
            //Datum existiert nicht --> neu hinzufügen
            data.push({ date, steps });
        }

        localStorage.setItem("stepData", JSON.stringify(data));
        newData();
        setSaved(true);
        setTimeout(() => {
            setSaved(false);
        }, 5000);
    }

    return(
        <div>
            <p>{currentDate.toDateString()}</p>
            <label htmlFor="steps">Schritte:</label>
            <input type="text" id="steps" value={steps} onChange={(e) => setSteps(e.target.value)}/>
            <button onClick={saveSteps}>Speichern</button>
            <p className={saved ? "info" : "hide"}>Daten gespeichert!</p>
        </div>
    );
}

export default EnterSteps;