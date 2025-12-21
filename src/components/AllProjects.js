import "../css/projects.css";
import Project from "./Project";

function AllProjects(){

    const media = {
        WOF: [
            {src: "WOF/wheelOfFateMenu", type: "img"}, 
            {src: "WOF/WOFLevelSelect", type: "img"}, 
            {src: "WOF/boss1", type: "img"}, 
            {src: "WOF/boss2", type: "img"}, 
            {src: "WOF/boss3", type: "img"},
            {src: "Levelauswahl.mp4", type: "video"}
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

            {/* Wheel of Fate */}
            <div class="project">
                <h2>Wheel of Fate</h2>
                <div class="diashow">
                    <button
                        class="arrow-button"
                        onclick="changeIndex(this, -1)"
                    >
                        <img src="../images/arrowLeft.svg" />
                    </button>
                    <img
                        src="../images/WOF/wheelOfFateMenu.png"
                        alt="Projekt-Screenshot"
                        class="screenshot"
                    />
                    <img
                        src="../images/WOF/WOFLevelSelect.png"
                        alt="Projekt-Screenshot"
                        class="screenshot"
                    />
                    <img
                        src="../images/WOF/boss1.png"
                        alt="Projekt-Screenshot"
                        class="screenshot"
                    />
                    <img
                        src="../images/WOF/boss2.png"
                        alt="Projekt-Screenshot"
                        class="screenshot"
                    />
                    <img
                        src="../images/WOF/boss3.png"
                        alt="Projekt-Screenshot"
                        class="screenshot"
                    />
                    <video class="screenshot" controls>
                        <source src="../videos/Levelauswahl.mp4" type="video/mp4"/>
                    </video>

                    <button class="arrow-button" onclick="changeIndex(this, 1)">
                        <img src="../images/arrowRight.svg" />
                    </button>
                </div>
                <p>
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
                </p>
            </div>

            {/* The Other */}
            <div class="project">
                <h2>The Other</h2>
                <div class="diashow">
                    <button class="arrow-button" onclick="changeIndex(this, -1)">
                        <img src="../images/arrowLeft.svg" />
                    </button>

                    <img
                        src="../images/other/other1.png"
                        alt="Projekt-Screenshot"
                        class="screenshot"
                    />
                    <img
                        src="../images/other/other2.png"
                        alt="Projekt-Screenshot"
                        class="screenshot"
                    />

                    <button class="arrow-button" onclick="changeIndex(this, 1)">
                        <img src="../images/arrowRight.svg" />
                    </button>
                </div>
                <p>
                    <a href="https://rivsastoria.itch.io/the-other" target="_blank">"The Other"</a> entstand 2025 in einer zweitägigen GameJam 
                    mit einem weiteren Entwickler.
                    <br />
                    Es handelt sich um einen 2D-Plattformer mit dem Ziel, schneller als der eigene Doppelgänger zu sein und dessen Fallen auszuweichen.<br />
                    Für mich war dieses Projekt hauptsächlich als Übung im Umgang mit der Godot-Engine gedacht. Deshalb habe ich mich mit so vielen Features auseinandergesetzt,
                    wie möglich. So wurde zum Beispiel eine Tilemap zum Aufbau des Levels genutzt, sowie Animationen und Soundeffekte verwendet.<br/>
                    Ich hatte einen zweiten Entwickler zur Seite, welcher die Assets erstellt hat und für das Gamedesign zuständig war.<br/>
                    <b>Engine:</b> Godot<br/>
                    <b>Programmiersprache:</b> GodotScript
                </p>
            </div>

            {/* Scent of Serenity */}
            <div class="project">
                <h2>Scent of Serenity</h2>
                <div class="diashow">
                    <button class="arrow-button" onclick="changeIndex(this, -1)">
                        <img src="../images/arrowLeft.svg" />
                    </button>

                    <img
                        src="../images/sos/menu.png"
                        alt="Projekt-Screenshot"
                        class="screenshot"
                    />
                    <img
                        src="../images/sos/level.png"
                        alt="Projekt-Screenshot"
                        class="screenshot"
                    />
                    <img
                        src="../images/sos/bee.png"
                        alt="Projekt-Screenshot"
                        class="screenshot"
                    />
                    <img
                        src="../images/sos/colour.png"
                        alt="Projekt-Screenshot"
                        class="screenshot"
                    />
                    <video class="screenshot" controls>
                        <source src="../videos/sos.mp4" type="video/mp4"/>
                    </video>

                    <button class="arrow-button" onclick="changeIndex(this, 1)">
                        <img src="../images/arrowRight.svg" />
                    </button>
                </div>
                <p>
                    <a href="https://rivsastoria.itch.io/scent-of-serenity" target="_blank">"Scent of Serenity"</a> wurde ebenfalls 2024
                    innerhalb eines zweitägigen GameJams mit einem vierköpfigen Team erstellt.
                    <br />
                    In diesem Cozy Game geht es darum, entsprechend der Wünsche der Kunden, Kerzen zu ziehen.<br />
                    Ich habe mich um die generellen Kerzenbau-Funktionalitäten gekümmert. Also die Logik der Abhängigkeiten und korrekten Anzeige
                    der entstandenen Kerze. Außerdem war ich für die Hilfe-Notiz sowie für das Tutorial zuständig.<br/>
                    <b>Engine:</b> Unity<br/>
                    <b>Programmiersprache:</b> C#
                </p>
            </div>

            {/* Goddess of Swing */}
            <div class="project">
                <h2>Goddess of Swing</h2>
                <div class="diashow">
                    <button class="arrow-button" onclick="changeIndex(this, -1)">
                        <img src="../images/arrowLeft.svg" />
                    </button>

                    <img
                        src="../images/gos/gosMenu.jpg"
                        alt="Projekt-Screenshot"
                        class="screenshot"
                    />
                    <img
                        src="../images/gos/gosScore.jpg"
                        alt="Projekt-Screenshot"
                        class="screenshot"
                    />
                    <img
                        src="../images/gos/gosUI.jpg"
                        alt="Projekt-Screenshot"
                        class="screenshot"
                    />
                    <video class="screenshot" controls>
                        <source src="../videos/godess.mp4" type="video/mp4"/>
                    </video>

                    <button class="arrow-button" onclick="changeIndex(this, 1)">
                        <img src="../images/arrowRight.svg" />
                    </button>
                </div>
                <p>
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
                </p>
            </div>

            {/* Dead Lines */}
            <div class="project">
                <h2>Dead Lines</h2>
                <div class="diashow">
                    <button class="arrow-button" onclick="changeIndex(this, -1)">
                        <img src="../images/arrowLeft.svg" />
                    </button>

                    <img
                        src="../images/deadlines/menu.png"
                        alt="Projekt-Screenshot"
                        class="screenshot"
                    />
                    <img
                        src="../images/deadlines/ghostmode.png"
                        alt="Projekt-Screenshot"
                        class="screenshot"
                    />
                    <video class="screenshot" controls>
                        <source src="../videos/Deadlines.mp4" type="video/mp4"/>
                    </video>

                    <button class="arrow-button" onclick="changeIndex(this, 1)">
                        <img src="../images/arrowRight.svg" />
                    </button>
                </div>
                <p>
                    <a href="https://rivsastoria.itch.io/dead-lines" target="_blank">"Dead Lines"</a> wurde 2024 in 
                    einem zweitägigen Halloween-GameJam erstellt. Das Team bestand hier aus vier Entwicklern.
                    <br />
                    Das Spiel ist ein 2D Puzzle Adventure, in dem man seine Kollegen unbemerkt töten muss, um in der Geisterwelt
                    wichtige Aufzeichnungen wiederzufinden.<br />
                    Ich war hier ebenfalls für die Menü-Funktionalitäten zuständig, sowie für die Logik, um zwischen der realen und der
                    Geisterwelt hin und her zu wechseln.<br/>
                    <b>Engine:</b> Unity<br/>
                    <b>Programmiersprache:</b> C#
                </p>
            </div>

            {/* Boredom Busters */}
            <div class="project">
                <h2>Boredom Busters</h2>
                <div class="diashow">
                    <button class="arrow-button" onclick="changeIndex(this, -1)">
                        <img src="../images/arrowLeft.svg" />
                    </button>

                    <img
                        src="../images/bb/bbTasks.png"
                        alt="Projekt-Screenshot"
                        class="screenshot"
                    />
                    <img
                        src="../images/bb/bbClothes.png"
                        alt="Projekt-Screenshot"
                        class="screenshot"
                    />
                    <img
                        src="../images/bb/bbItems.png"
                        alt="Projekt-Screenshot"
                        class="screenshot"
                    />

                    <button class="arrow-button" onclick="changeIndex(this, 1)">
                        <img src="../images/arrowRight.svg" />
                    </button>
                </div>
                <p>
                    <a href="pages/boredomBusters/indexB.html" target="_blank">"Boredom Busters"</a> ist eine Webseite, welche 2025 mit einem
                    Freund als privates Projekt entwickelt wurde.
                    <br />
                    Ziel der Webseite ist es, durch Gamification von zufälligen kleinen Aufgaben, eine schnelle Lösung für alltägliche
                    Langeweile zu schaffen.<br />
                    Hier habe ich mich um den grundlegenden Aufbau und die meisten Funktionen gekümmert. So zum Beispiel das Generieren der
                    Aufgaben und das Inventar- sowie Kleidungssystem.<br/>
                    <b>Programmiersprachen:</b> HTML, JavaScript, CSS
                </p>
            </div>

        </div>
    </>);
}

export default AllProjects;