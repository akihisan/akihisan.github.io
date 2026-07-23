import { createElement, useState, useEffect } from "react";
import EnterSteps from "./EnterSteps";
import Journey from "./Journey";
import Settings from "./Settings";
import CalendarDay from "./CalendarDay";

function Mordor(){
    //Daten aus localStorage holen
    const data = JSON.parse(localStorage.getItem("stepData"));

    const [isSettings, setIsSettings] = useState(false);

    // zu Beginn aktuellen Tag finden
    const [currentDate, setCurrentDate] = useState(new Date());
    const [currentDay, setCurrentDay] = useState(currentDate.getDate());
    const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
    const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());

    // korrekten Monat anzeigen
    const monthNames = [
        "Januar", "Februar", "März", "April", "Mai", "Juni",
        "Juli", "August", "September", "Oktober", "November", "Dezember"
    ];
    const displayedMonth = monthNames[currentMonth];   // angezeigter Monat in Überschrift

    // Anzahl benötigter Kalendertage berechnen
    // Tag 0 vom Folgemonat entspricht letztem Tag des aktuellen Monats
    const days = new Date(currentYear, currentMonth + 1, 0).getDate();

    const daysArray = Array.from({ length: days }, (_, i) => i + 1);

    function changeDate(newDate){
        setCurrentDate(newDate);
        setCurrentDay(newDate.getDate());
        setCurrentMonth(newDate.getMonth());
        setCurrentYear(newDate.getFullYear());
    }

    function toggleSettings(){
        setIsSettings(!isSettings);
    }

    const [tick, setTick] = useState(0);
    function newData(){
        setTick(tick + 1);
    }

    return(
        <div className="mordor">
            {/*
                Schritte werden in Kilometer umgerechnet (x0,0006) und als Fortschrittsbalken angezeigt.
                Bei bestimmten Thresholds soll angezeigt werden wo man jetzt ist (Auenland verlassen, in Seestadt angekommen, ...).
            */}
            <div className="left">
                {/* linker Bereich: Einstellungen und Fotos */}
                <button onClick={toggleSettings}>Einstellungen</button>
                {isSettings && <Settings onChange={newData}/>}
            </div>
            <div className="middle">
                {/* mittlerer Bereich: Journey */}
                <Journey key={tick} data={data}/>
            </div>
            <div className="right">
                {/* rechter Bereich: Kalender und EnterSteps */}
                <h2>{displayedMonth}</h2>
                <div className="calendar">
                    {daysArray.map((day) => (
                        <CalendarDay 
                            key={day}
                            day={day}
                            month={currentMonth}
                            year={currentYear}
                            current={day === currentDay}
                            onSelect={changeDate}
                            data={data}
                        />
                    ))}
                </div>
                <EnterSteps currentDate={currentDate} data={data} newData={newData}/>
            </div>
        </div>
    );
}

export default Mordor;