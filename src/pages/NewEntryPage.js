import { useState } from 'react';
import * as entriesAPI from '../utilities/entries-api';


function NewEntryPage() {

    const [entryData, setEntryData] = useState({
        wordRom: "",
        wordKan: "",
        definition: "",
        source: "",
        chapter: "",
        pageNo: "",
        example: "",
        notes: "",
        error: "",
    });

    //*handles what happens when user clicks submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const entryFormData = {entryData}
            console.log(entryFormData)
            const entry = await entriesAPI.sendForm(entryFormData)
            setEntryData()
            console.log('new entry added', entry)
        } catch (error) {
            console.error(error)
        }
    };

    //*handles user inputting values
    const handleChange = (evt) => {
        setEntryData({ ...entryData, [evt.target.name]: evt.target.value, error: ''})
    }


    return (
        <div className='entryform-container'>
            <form autoComplete='off' onSubmit={handleSubmit}>
                <h3>Add New SFX Entry</h3>
                <label>SFX (romaji-ish): </label>
                <input 
                    type='text' 
                    name='wordRom' 
                    value={entryData.wordRom} 
                    onChange={handleChange} required 
                />
                <br/>
                <label>SFX (kana): </label>
                <input 
                    type='text' 
                    name='wordKan' 
                    value={entryData.wordKan} 
                    onChange={handleChange} required 
                />
                <br/>

                <button type='submit'>Add</button>

            </form>
        </div>
    )

}

export default NewEntryPage;