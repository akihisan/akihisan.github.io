import Table from "./Table";
import Shelf from "./Shelf";
import { useState } from "react";

function Library(){
    const [view, setView] = useState("table");

    return (
        <div>
            {view === "table" && <Table/>}
            {view === "shelf" && <Shelf/>}
        </div>
    );
}

export default Library;