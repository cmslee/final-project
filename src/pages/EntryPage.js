import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';

import EditEntryForm from '../components/EditEntryForm';

function EntryPage () {

    /*
    const [entryData, setEntryData] = useState(null);
    const params = useParams();

    useEffect (() => {
        const fetchEntry = async () => {
            try {
                const res = await fetch('api/entries')
                const data = await res.json()
                console.log(data)
                setEntryData(data)
            } catch (error) {
                console.error(error)
            }
        }
        fetchEntry()
    }), []
    */
    return (
        <div>
            <h3>SFX Info</h3>

            <EditEntryForm/>
        </div>
    )
}

export default EntryPage;