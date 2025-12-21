import "../css/projects.css";
import Project from "./Project";

function AllProjects(){

    const media = {
        WOF: [
            {src: "WOF/wheelOfFateMenu.png", type: "img"}, 
            {src: "WOF/WOFLevelSelect.png", type: "img"}, 
            {src: "WOF/boss1.png", type: "img"}, 
            {src: "WOF/boss2.png", type: "img"}, 
            {src: "WOF/boss3.png", type: "img"},
            {src: "Levelauswahl.mp4", type: "video"}
        ],
        other: [
            {src: "other/other1.png", type: "img"},
            {src: "other/other2.png", type: "img"}
        ],
        sos: [
            {src: "sos/menu.png", type: "img"},
            {src: "sos/level.png", type: "img"},
            {src: "sos/bee.png", type: "img"},
            {src: "sos/colour.png", type: "img"},
            {src: "sos.mp4", type: "video"}
        ],
        gos: [
            {src: "sos/gosMenu.png", type: "img"},
            {src: "sos/gosScore.png", type: "img"},
            {src: "sos/gosUI.png", type: "img"},
            {src: "godess.mp4", type: "video"}
        ],
        deadlines: [
            {src: "deadlines/menu.png", type: "img"},
            {src: "deadlines/ghostmode.png", type: "img"},
            {src: "Deadlines.mp4", type: "video"}
        ]
    };

    return(<>
        <h1>Meine Projekte</h1>
        <div class="allProjects">

            <Project title="Wheel of Fate" media={media.WOF}>
                <a href="https://rivsastoria.itch.io/wheel-of-fate" target="_blank">"Wheel of Fate"</a> wurde 2025 im Rahmen eines
                zweitägigen GameJams mit zwei weiteren Entwicklern erstellt.
                <br />
                Es handelt sich hierbei um ein 2D Adventure-Game, in dem mithilfe
                zufälliger Waffen verschiedene Bosse besiegt werden
                müssen.<br />
                Ich war für die Funktionalität der Menüs und Levelauswahl,
                sowie die Übergänge zwischen den Szenen zuständig. Außerdem
                habe ich das Verhalten der Gegner programmiert. Die Assets
                wurden von einem anderen Entwickler erstellt und
                anschließend von mir in den Szenen angeordnet.<br/>
                <b>Engine:</b> Unity<br/>
                <b>Programmiersprache:</b> C#
            </Project>

            <Project title="The Other" media={media.other}>
                <a href="https://rivsastoria.itch.io/the-other" target="_blank">"The Other"</a> entstand 2025 in einer zweitägigen GameJam 
                mit einem weiteren Entwickler.
                <br />
                Es handelt sich um einen 2D-Plattformer mit dem Ziel, schneller als der eigene Doppelgänger zu sein und dessen Fallen auszuweichen.<br />
                Für mich war dieses Projekt hauptsächlich als Übung im Umgang mit der Godot-Engine gedacht. Deshalb habe ich mich mit so vielen Features auseinandergesetzt,
                wie möglich. So wurde zum Beispiel eine Tilemap zum Aufbau des Levels genutzt, sowie Animationen und Soundeffekte verwendet.<br/>
                Ich hatte einen zweiten Entwickler zur Seite, welcher die Assets erstellt hat und für das Gamedesign zuständig war.<br/>
                <b>Engine:</b> Godot<br/>
                <b>Programmiersprache:</b> GodotScript
            </Project>

            <Project title="Scent of Serenity" media={media.sos}>
                <a href="https://rivsastoria.itch.io/scent-of-serenity" target="_blank">"Scent of Serenity"</a> wurde ebenfalls 2024
                innerhalb eines zweitägigen GameJams mit einem vierköpfigen Team erstellt.
                <br />
                In diesem Cozy Game geht es darum, entsprechend der Wünsche der Kunden, Kerzen zu ziehen.<br />
                Ich habe mich um die generellen Kerzenbau-Funktionalitäten gekümmert. Also die Logik der Abhängigkeiten und korrekten Anzeige
                der entstandenen Kerze. Außerdem war ich für die Hilfe-Notiz sowie für das Tutorial zuständig.<br/>
                <b>Engine:</b> Unity<br/>
                <b>Programmiersprache:</b> C#
            </Project>

            <Project title="Goddess of Swing" media={media.gos}>
                <a href="https://store.steampowered.com/app/3244650/Goddess_Of_Swing/" target="_blank">"Goddess of Swing"</a> 
                ist zwischen 2024 und 2025 im Rahmen meines Studiums an der <a href="https://www.hs-mittweida.de/" target="_blank">Hochschule Mittweida</a> 
                entstanden. Über 2 Semester haben ca. 60 Studierende gemeinsam an diesem Projekt gearbeitet.
                <br />
                Es ist ein 3D-Action Spiel, wo man sich um die Gegner herumschwingen muss, um so möglichst viele Punkte zu erzielen.<br />
                Hier war ich Teil des UI-Teams, zuständig dafür, die Funktionalitäten in der Unity-Engine zu implementieren. Dabei habe ich mich
                hauptsächlich um das Hauptmenü und dessen Untermenüs gekümmert, sowie um den Score-Screen am Ende eines jeden Abschnittes.
                Außerdem habe ich die Schnittstelle für die Logik und das Design des Ingame-UIs gebildet. Das heißt, ich habe die Elemente, die man im 
                Level auf dem Bildschirm sieht, angeordnet und mit der Logik aus den entsprechenden anderen Abteilungen verknüpft, um so die Daten für den
                Spieler anzuzeigen.<br/>
                <b>Engine:</b> Unity<br/>
                <b>Programmiersprache:</b> C#
            </Project>

            <Project title="Dead Lines" media={media.deadlines}>
                <a href="https://rivsastoria.itch.io/dead-lines" target="_blank">"Dead Lines"</a> wurde 2024 in 
                einem zweitägigen Halloween-GameJam erstellt. Das Team bestand hier aus vier Entwicklern.
                <br />
                Das Spiel ist ein 2D Puzzle Adventure, in dem man seine Kollegen unbemerkt töten muss, um in der Geisterwelt
                wichtige Aufzeichnungen wiederzufinden.<br />
                Ich war hier ebenfalls für die Menü-Funktionalitäten zuständig, sowie für die Logik, um zwischen der realen und der
                Geisterwelt hin und her zu wechseln.<br/>
                <b>Engine:</b> Unity<br/>
                <b>Programmiersprache:</b> C#
            </Project>

        </div>
    </>);
}

export default AllProjects;