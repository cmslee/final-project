import { useState } from 'react';

function NewEntryPage({ user, setUser }) {

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
            const entry = {entryData}
            const res = await fetch('/api/entries', )
            console.log(entryData)


            // setEntryData()
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
            <h1>Create New Entry</h1>
            <form autoComplete='off' onSubmit={handleSubmit}>
                <p>
                    <label>SFX (romaji-ish): </label>
                    <input type='text' name='wordRom' value={entryData.wordRom} onChange={handleChange} required />
                </p>
                <p>
                    <label>SFX (kana): </label>
                    <input type='text' name='wordKan' value={entryData.wordKan} onChange={handleChange} required />
                </p>
                <p>
                    <button type='submit'>Add</button>
                </p>

            </form>
        </div>
    )

}

export default NewEntryPage;