import {useState, useEffect} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import * as entriesAPI from '../utilities/entries-api';

import EditEntryForm from '../components/EditEntryForm';

function EntryPage () {
    
    const [entry, setEntry] = useState({
        wordRom: "",
        wordKan: "",
        translation: "",
        gloss:"",
        source: "",
        chapter: "",
        pageNo: "",
        example: "",
        notes: "",
    })

    const navigate = useNavigate();
    const {id} = useParams();

    //*Call single entry
    useEffect(() => {
        const getEntry = async () => {
            try {
                const data = await entriesAPI.getEntryById(id);
                setEntry(data)
                console.log(data)
            } catch (error) {
                console.error(error)
            }
        }
        getEntry();
    },[])


    //*Delete entry
    const handleSubmit = async (e, entry) => {
        e.preventDefault();
        try {
            const deletedEntry = await entriesAPI.deleteEntry(entry._id);
            console.log(deletedEntry);
            navigate('/entries')
        } catch (error) {
            
        }
    }
    
    const {wordKan, wordRom, translation, gloss, source, chapter, pageNo, example, notes } = entry
    return (
        <main className='entrypage-container'>
            <div className='entry-box'>
                <div className='entry'>
                    <h3>SFX Info</h3>
                    <p>
                        Written: {entry.wordKan}
                        <br/>
                        Read: {entry.wordRom}
                        <br/>
                        Translation: {entry.translation}
                        <br/>
                        Gloss: {entry.gloss}
                        <br/>
                        Volume: {entry.source}
                        <br/>
                        Chapter: {entry.chapter}
                        <br/>
                        Page: {entry.pageNo}
                        <br/>
                        Sample usage: {entry.example}
                        <br/>
                        Notes: {entry.notes}
                    </p>
                </div>

                <div className='update-buttons'>
                    <div className='update-buttons-box'>
                        {/**DELETE BUTTON */}
                        <button
                            type='submit'
                            value='DELETE'
                            onClick={(e) => handleSubmit(e, entry)} 
                        >
                            Delete
                        </button>
                        &nbsp; | &nbsp; 

                        {/**EDIT BUTTON */}
                        <button>Edit</button>
                    </div>
                </div>
            </div>

            <div className='edit-box'>
                <EditEntryForm entry={entry}/>
            </div>
        </main>
    )
}

export default EntryPage;