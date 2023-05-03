import { useEffect, useState } from "react";
import { Params, Link } from "react-router-dom";
import axios from "axios";

function EntryIndexPage () {
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
        <div>
            <h1>Entry Index Page</h1>
            {entriesData && entriesData.map((entry) => (
                <Link>
                    <p key={entry._id}>{entry.wordRom}</p>
                </Link>
            ))}
        </div>
    )
}

export default EntryIndexPage;