import { useEffect, useState } from "react";
import { Params, Link } from "react-router-dom";
import axios from "axios";

function EntryIndexPage () {
    const [entriesData, setEntriesData] = useState(null)

    useEffect(() => {
        const fetchEntries = async () => {            
            try {
                const res = await fetch('/api/entries')
                const data = await res.json()
                console.log(data)
                setEntriesData()
                
            } catch (error) {
                console.error(error)
            }
        }
    }, [])

    return (
        <div>
            <h1>Entry Index Page</h1>
        </div>
    )
}

export default EntryIndexPage;