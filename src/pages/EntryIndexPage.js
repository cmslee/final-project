import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function EntryIndexPage() {
    const [entriesData, setEntriesData] = useState(null)

    useEffect(() => {
        const fetchEntries = async () => {
            try {
                const response = await fetch('/api/entries')
                const data = await response.json()
                console.log(data)
                setEntriesData(data)
            } catch (error) {
                console.error(error)
            }
        }
        fetchEntries()
    }, [])

    return (
        <main className="main-page">
            <ul className="index-container">
                    {entriesData && entriesData.map((entry) => (
                        <Link to={`/entries/${entry._id}`}>
                            <li key={entry._id}>{entry.wordRom} ({entry.wordKan})</li>
                        </Link>
                    ))}
            </ul>
        </main>
    )
}

export default EntryIndexPage;