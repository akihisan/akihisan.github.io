import "../css/about.css";

function About(){

    return(<div className="body">
        <h1>Über mich</h1>
        <p>
            Hallo!<br/>
            Mein Name ist Alexander Burkhardt. 
            Ich bin ein 22-jähriger Medieninformatik-Student der <a href="https://www.hs-mittweida.de/" target="_blank" rel="noreferrer">Hochschule Mittweida</a>.<br/>
            Auf dieser Webseite präsentiere ich einige meiner Projekte.
        </p>
            
        <div>
            <h2>Fähigkeiten und Interessen</h2>
            <h3>Programmiersprachen:</h3>
            <ul>
                <li>C#</li>
                <li>Java</li>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>GodotScript</li>

            </ul>
            <h3>Engines:</h3>
            <ul>
                <li>Unity</li>
                <li>Godot</li>
            </ul>
        </div>
        <div>
            <h2>Kontakt</h2>
            <p><b>Email:</b> <a href="mailto:alex@de-erzgebirger.de">alex@de-erzgebirger.de</a></p>
        </div>
    </div>);
}

export default About;