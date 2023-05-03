const BASE_URL = '/api/entries';

//* Send form data
export function sendForm(entryFormData){
    return sendRequest(`${BASE_URL}/new`, 'POST', entryFormData)
}

//* Display index
export function getEntries () {
    return sendRequest(`${BASE_URL}/entries`, 'GET');
}

//* Delete entry
export function deleteEntry(id) {
    return sendRequest(`${BASE_URL}/${id}`, 'DELETE')
}

//* Update entry
export function updateEntry(id, newData){
    return sendRequest(`${BASE_URL}/edit/${id}`, 'PUT', newData)
}

//* Display entry
export function getEntryById(id){
    return sendRequest(`${BASE_URL}/${id}`)
}

// --- Helper Functions --- //
export default async function sendRequest(url, method = 'GET', payload = null) {
    // Fetch takes an optional options object as the 2nd argument
    // used to include a data payload, set headers, etc.
    const options = { method };
    if (payload) {
      options.headers = { 'Content-Type': 'application/json' };
      options.body = JSON.stringify(payload);
    }

    const res = await fetch(url, options);
    // res.ok will be false if the status code set to 4xx in the controller action

    if (res.ok) return res.json();
    throw new Error('Bad Request');
  }