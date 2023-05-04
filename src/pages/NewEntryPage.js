import { useState } from 'react';
import * as entriesAPI from '../utilities/entries-api';
import { useNavigate } from 'react-router-dom';


function NewEntryPage( ) {
    const navigate = useNavigate()
    const [entryData, setEntryData] = useState({
        wordRom: "",
        wordKan: "",
        translation: "",
        gloss:"",
        source: "",
        chapter: "",
        pageNo: "",
        example: "",
        notes: "",
    });

    //*handles what happens when user clicks submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const entryFormData = {
                wordRom: entryData.wordRom,
                wordKan: entryData.wordKan,
                translation: entryData.translation,
                gloss: entryData.gloss,
                source: entryData.source,
                chapter: entryData.chapter,
                pageNo: entryData.pageNo,
                example: entryData.example,
                notes: entryData.notes,
            }
            console.log(entryFormData)

            const entry = await entriesAPI.sendForm(entryFormData)
            // setEntryData()
            console.log('new entry added', entry)
            navigate('/entries')
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
                    onChange={handleChange} 
                    required 
                />
                <br/>
                <label>SFX (kana): </label>
                <input 
                    type='text' 
                    name='wordKan' 
                    value={entryData.wordKan} 
                    onChange={handleChange} 
                    required 
                />
                <br/>
                <label>Translation: </label>
                <input
                    type='text'
                    name='translation'
                    value={entryData.translation}
                    onChange={handleChange}
                />
                <br/>
                <label>Gloss: </label>
                <input
                    type='text'
                    name='gloss'
                    value={entryData.gloss}
                    onChange={handleChange}
                />
                <br/>
                <label>Volume number(1-8): </label>
                <input
                    type='text'
                    name='source'
                    value={entryData.source}
                    onChange={handleChange}
                    required
                />
                <br/>
                <label>Chapter: </label>
                <input
                    type='number'
                    name='chapter'
                    value={entryData.chapter}
                    onChange={handleChange}
                />
                <br/>
                <label>Page number: </label>
                <input
                    type='number'
                    name='pageNo'
                    value={entryData.pageNo}
                    onChange={handleChange}
                />
                <br/>
                <label>Sample usage: </label>
                <input
                    type='text'
                    name='example'
                    value={entryData.example}
                    onChange={handleChange}
                />
                <br/>
                <label>Notes: </label>
                <input
                    type='text'
                    name='notes'
                    value={entryData.notes}
                    onChange={handleChange}
                />
                <br/>

                <button type='submit'>Add</button>

            </form>
        </div>
    )

}

export default NewEntryPage;