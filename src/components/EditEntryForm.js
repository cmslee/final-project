import {useState, useEffect} from 'react'
import * as entriesAPI from '../utilities/entries-api';
import { useNavigate, useParams } from 'react-router-dom';

function EditEntryForm ({entry}) {
    const navigate = useNavigate();
    const [editedEntry, setEditedEntry] = useState({
        ...entry
    });

    const {id} = useParams()


    const handleEdit = async (e, newEntry) => {
        e.preventDefault();
        try {
            console.log(newEntry)
            const editedEntry = await entriesAPI.updateEntry(id, newEntry);
            console.log(editedEntry);
            setEditedEntry(editedEntry);
            navigate(0)
        } catch (error) {
            console.log(error)
        }
    }

    // const handleUpdate = (evt) => {
    //     setEditedEntry({...editedEntry, [evt.target.name]: evt.target.value, error: ''})
    // }

    return (
        <div>
            <form autoComplete='off' onSubmit={(e) => handleEdit(e, editedEntry)}>
                <h3>Edit Entry Form</h3>
                <label>SFX (romaji-ish): </label>
                <input 
                    type='text' 
                    name='wordRom' 
                    defaultValue={entry.wordRom}
                    onChange={(e) => setEditedEntry({...editedEntry, wordRom: e.target.value})}
                    required 
                />
                <br/>
                <label>SFX (kana): </label>
                <input 
                    type='text' 
                    name='wordKan' 
                    defaultValue={entry.wordKan} 
                    onChange={(e) => setEditedEntry({...editedEntry, wordKan: e.target.value})} 
                    required 
                />
                <br/>
                <label>Translation: </label>
                <input
                    type='text'
                    name='translation'
                    defaultValue={entry.translation}
                    onChange={(e) => setEditedEntry({...editedEntry, translation: e.target.value})}
                />
                <br/>
                <label>Gloss: </label>
                <input
                    type='text'
                    name='gloss'
                    defaultValue={entry.gloss}
                    onChange={(e) => setEditedEntry({...editedEntry, gloss: e.target.value})}
                />
                <br/>
                <label>Volume number(1-8): </label>
                <input
                    type='text'
                    name='source'
                    defaultValue={entry.source}
                    onChange={(e) => setEditedEntry({...editedEntry, source: e.target.value})}
                />
                <br/>
                <label>Chapter: </label>
                <input
                    type='number'
                    name='chapter'
                    defaultValue={entry.chapter}
                    onChange={(e) => setEditedEntry({...editedEntry, chapter: e.target.value})}
                />
                <br/>
                <label>Page number: </label>
                <input
                    type='number'
                    name='pageNo'
                    defaultValue={entry.pageNo}
                    onChange={(e) => setEditedEntry({...editedEntry, pageNo: e.target.value})}
                />
                <br/>
                <label>Sample usage: </label>
                <input
                    type='text'
                    name='example'
                    defaultValue={entry.example}
                    onChange={(e) => setEditedEntry({...editedEntry, example: e.target.value})}
                />
                <br/>
                <label>Notes: </label>
                <input
                    type='text'
                    name='notes'
                    defaultValue={entry.notes}
                    onChange={(e) => setEditedEntry({...editedEntry, notes: e.target.value})}
                />
                <br/>

                <button type='submit'>Update</button>

            </form>
        </div>
    )
}

export default EditEntryForm;