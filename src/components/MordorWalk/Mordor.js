import { useState } from "react";
import EnterSteps from "./EnterSteps";
import Journey from "./Journey";

function Mordor(){
    const [tab, setTab] = useState("EnterSteps");

    return(
        <div>
        {/*<p>Walk to Mordor.
            Täglich kann Schrittzahl eingegeben werden. Datum als Kalender-Auswahlfeld, das aktuelle wird standardmäßig gewählt.
            Falls möglich sollen alle vergangenen ab Startdatum die keine Zahl haben markiert werden.
            Bei erstem Start oder bei Wahl später über Einstellungen kann Abenteuer gestartet werden. Datum wird gespeichert.
            Allgemein erstmal alles im localstorage speichern, später evtl Keycloak anbinden.
            Schritte werden in Kilometer umgerechnet (x0,0006) und als Fortschrittsbalken angezeigt. Schauen wie fancy es werden kann.
            Bei bestimmten Thresholds soll angezeigt werden wo man jetzt ist (Auenland verlassen, in Seestadt angekommen, ...).
            Diese soll man sich dann vermutlich auch in nem Tab anzeigen lassen können.
        </p>*/}
        <div>
            <button onClick={() => setTab("EnterSteps")}>Schritte eintragen</button>
            <button onClick={() => setTab("Journey")}>Fortschritt ansehen</button>
        </div>
        {tab === "EnterSteps" && <EnterSteps/>}
        {tab === "Journey" && <Journey/>}
        </div>
    );
}

export default Mordor;