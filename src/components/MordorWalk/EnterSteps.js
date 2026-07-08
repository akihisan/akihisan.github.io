import { useEffect, useState } from "react";
import "../../css/MordorWalk/mordor.css";

function EnterSteps(){

    const today = new Date().toISOString().split("T")[0]; 
    const [date, setDate] = useState(today);
    const [steps, setSteps] = useState("");

    const [saved, setSaved] = useState(false);  // gibt an ob daten gerade gespeichert wurden

    //Daten aus localStorage holen
    const data = JSON.parse(localStorage.getItem("stepData")) || [];

    //Wenn Datum geändert wird, passenden Eintrag laden
    useEffect(() => {
        const existing = data.find(item => item.date === date);
        setSteps(existing ? existing.steps : "");
    }, [date]);    

    function saveSteps() {
        const existingIndex = data.findIndex(item => item.date === date);

        if (existingIndex !== -1) {
            //Datum existiert → überschreiben
            data[existingIndex].steps = steps;
        } else {
            //Datum existiert nicht → neu hinzufügen
            data.push({ date, steps });
        }

        localStorage.setItem("stepData", JSON.stringify(data));
        setSaved(true);
        setTimeout(() => {
            setSaved(false);
        }, 5000);
    }

    return(
        <div>
            <label htmlFor="date">Datum wählen:</label>
            <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)}/>
            <label htmlFor="steps">Schritte:</label>
            <input type="text" id="steps" value={steps} onChange={(e) => setSteps(e.target.value)}/>
            <button onClick={saveSteps}>Speichern</button>
            <p className={saved ? "info" : "hide"}>Daten gespeichert!</p>
        </div>
    );
}

export default EnterSteps;