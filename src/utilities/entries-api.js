import sendRequest from "./send-request";

const BASE_URL = '/api/entries';

//*Display all entries
export function getAll() {
    return sendRequest(BASE_URL);
}

export function getbyId(id){
    return sendRequest(`${BASE_URL}/${id}`)
}

//*Create new entry


//*Update entry


//*Delete entry