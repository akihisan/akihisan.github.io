import Table from "./Table";
import Shelf from "./Shelf";
import { useState } from "react";

function Library(){
    const [view, setView] = useState("table");
    const [isDarkmode, setIsDarkmode] = useState(false);

    return (
        <div>
            <button onClick={() => setIsDarkmode(!isDarkmode)}>toggle darkmode</button>
            {view === "table" && <Table isDarkmode={isDarkmode}/>}
            {view === "shelf" && <Shelf/>}
        </div>
    );
}

export default Library;