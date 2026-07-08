import { useEffect, useState } from "react";

function Settings(){
    //Daten aus localStorage holen
    const savedGoal = JSON.parse(localStorage.getItem("goal")) || null;

    //Standardwerte festlegen
    const [goal, setGoal] = useState(2700); // km
    
    useEffect(() => {
        // gespeicherte Werte einsetzen, falls vorhanden
        if(savedGoal){setGoal(savedGoal);}
    }, []);

    useEffect(() => {
        // neuen Zielwert speichern
        localStorage.setItem("goal", goal);
    }, [goal]);

    return(
        <div>
            <label htmlFor="goal">Zielentfernung in Kilometer:</label>
            <input type="goal" id="goal" value={goal} onChange={(e) => setGoal(e.target.value)}/>
        </div>
    );
}

export default Settings;