import { useEffect, useState } from "react";

function Table() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch(`${process.env.PUBLIC_URL}/books.json`)
            .then(res => res.json())
            .then(setBooks);
    }, []);

    return (
        <table>
            <thead>
                <tr>
                    <th>Titel</th>
                    <th>Autor*innen</th>
                    <th>Cover</th>
                    <th>Seiten</th>
                    <th>Reihe</th>
                </tr>
            </thead>
            <tbody>
                {books?.map(p => (
                    <tr key={p.id}>
                        <td>{p.title}</td>
                        <td>{p.author}</td>
                        <td><img src={p.cover} alt="Cover"/></td>
                        <td>{p.pages}</td>
                        <td>{p.row}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Table;
