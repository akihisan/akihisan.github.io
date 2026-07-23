import { useEffect, useState } from "react";

function Settings({onChange,}){
    //Daten aus localStorage holen
    const savedGoal = JSON.parse(localStorage.getItem("goal")) || null;

    //Standardwerte festlegen
    const [goal, setGoal] = useState(2700); // km
    
    useEffect(() => {
        // gespeicherte Werte einsetzen, falls vorhanden
        if(savedGoal){setGoal(savedGoal);}
    }, []);

    //Änderungen speichern und Einstellungen schließen
    function saveChanges(){
        // neuen Zielwert speichern
        localStorage.setItem("goal", goal);
        onChange();
    }

    //Änderungen rückgängig machen und Einstellungen schließen
    function reset(){
        setGoal(2700);
        localStorage.setItem("goal", 2700);
        onChange();
    }

    return(
        <div>
            <label htmlFor="goal">Zielentfernung in Kilometer:</label>
            <input type="goal" id="goal" value={goal} onChange={(e) => setGoal(e.target.value)}/>
            <button onClick={saveChanges}>Anwenden</button>
            <button onClick={reset}>Zurücksetzen</button>
        </div>
    );
}

export default Settings;